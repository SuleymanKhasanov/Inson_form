import { LabelInfo } from '@/entities/labelInfo';
import {
  Radio,
  RadioGroup,
} from '@/shared/chakraComponents/ui/radio';
import { Flex } from '@chakra-ui/react';
import { activities } from '@/shared/data/data';

interface CoverageTypeProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectTarget = ({ value, onChange }: CoverageTypeProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChange(event.target.value);
  };
  return (
    <Flex direction="column" gap="2.5">
      <LabelInfo
        labelText="Цель"
        toggleInfo="Информация о количестве путегествий"
      />
      <RadioGroup
        size="sm"
        defaultValue={value}
        colorPalette="green"
        onChange={handleChange}
      >
        <Flex gap="2.5" wrap="wrap">
          {activities.map((acticity) => (
            <Radio key={acticity.id} value={acticity.name}>
              {acticity.name}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>
    </Flex>
  );
};

export default SelectTarget;
