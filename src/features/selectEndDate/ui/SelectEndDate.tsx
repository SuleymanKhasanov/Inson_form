import { LabelInfo } from '@/entities/labelInfo';
import { DateInput } from '@/shared/dateInput';
import { Flex } from '@chakra-ui/react';

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const SelectEndDate = ({ value, onChange }: DatePickerProps) => {
  return (
    <Flex direction="column" gap="2.5">
      <LabelInfo
        labelText="Конец страхования"
        toggleInfo="Информация о страховании"
      />
      <Flex gap="2.5">
        <DateInput value={value} onChange={onChange} />
      </Flex>
    </Flex>
  );
};

export default SelectEndDate;
