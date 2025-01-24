import { Flex, Stack } from '@chakra-ui/react';
import {
  Radio,
  RadioGroup,
} from '@/shared/chakraComponents/ui/radio';
import { LabelInfo } from '@/entities/labelInfo';

interface CoverageTypeProps {
  value: string;
  onChange: (value: string) => void;
}

const CoverageType = ({ value, onChange }: CoverageTypeProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChange(event.target.value);
  };
  return (
    <Flex direction="column">
      <LabelInfo
        labelText="Тип покрытия"
        toggleInfo="Информация о количестве путегествий"
      />
      <RadioGroup
        size="sm"
        defaultValue={value}
        colorPalette="green"
        onChange={handleChange}
      >
        <Stack direction="column">
          <Radio value="Однократное путешествие">
            Однократное путешествие
          </Radio>
          <Radio value="Многократные путешествия">
            Многократные путешествия
          </Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default CoverageType;
