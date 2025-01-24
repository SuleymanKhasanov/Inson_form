import { LabelInfo } from '@/entities/labelInfo';
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from '@/shared/chakraComponents/ui/select';
import {
  createListCollection,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { phoneCodes } from '../assets/phoneCodes';

interface PhoneNumberProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumber = ({ value, onChange }: PhoneNumberProps) => {
  const [selectedCode, setSelectedCode] = useState(phoneCodes[0]);
  const phoneNumber = value.replace(selectedCode.code, '').trim();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 7) {
      const formattedNumber = input.replace(
        /(\d{3})(\d{2})?(\d{2})?/,
        (_, g1, g2, g3) => [g1, g2, g3].filter(Boolean).join(' '),
      );
      onChange(`${selectedCode.code} ${formattedNumber}`);
    }
  };

  const phoneNumbersCollection = createListCollection({
    items: phoneCodes,
  });

  return (
    <Flex direction="column" gap="2.5">
      <LabelInfo
        labelText="Номер мобильного телефона"
        toggleInfo="Номер телефона"
      />
      <Flex gap="2.5">
        <SelectRoot
          collection={phoneNumbersCollection}
          position="relative"
        >
          <SelectTrigger backgroundColor="gray.100" borderRadius="xl">
            <Text>
              ({selectedCode.code}) {selectedCode.country}{' '}
            </Text>
          </SelectTrigger>
          <SelectContent position="absolute" top="100%">
            {phoneCodes.map((item) => (
              <SelectItem
                key={item.code}
                item={item.code}
                onClick={() => setSelectedCode(item)}
              >
                ({item.code}) {item.country}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <Input
          borderRadius="xl"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="123 45 67"
          maxLength={10}
        />
      </Flex>
    </Flex>
  );
};

export default PhoneNumber;
