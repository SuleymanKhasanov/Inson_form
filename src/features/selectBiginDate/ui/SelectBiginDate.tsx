import { LabelInfo } from '@/entities/labelInfo';
import { DateInput } from '@/shared/dateInput';
import { Flex, Box } from '@chakra-ui/react';

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const SelectBiginDate = ({ value, onChange }: DatePickerProps) => {
  return (
    <Flex direction="column" gap="2.5">
      <LabelInfo
        labelText="Начало страхования"
        toggleInfo="Информация о страховании"
      />
      <Box>
        <DateInput value={value} onChange={onChange} />
      </Box>
    </Flex>
  );
};

export default SelectBiginDate;
