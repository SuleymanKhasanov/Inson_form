import {
  SelectContent,
  SelectRoot,
} from '@/shared/chakraComponents/ui/select';
import {
  Box,
  createListCollection,
  Flex,
  SelectItem,
  SelectTrigger,
  SelectValueText,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { months, years } from '../assets/data';

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

interface DateInputProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  const [day, setDay] = useState<number | ''>('');
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  const days = createListCollection({
    items: daysInMonth,
  });

  useEffect(() => {
    setDaysInMonth(
      Array.from(
        { length: getDaysInMonth(month, year) },
        (_, i) => i + 1,
      ),
    );
  }, [month, year]);

  const monthCollection = createListCollection({
    items: months,
  });

  const yearsCollection = createListCollection({
    items: years,
  });

  return (
    <Flex gap="2.5">
      <Box>
        <SelectRoot collection={days} position="relative">
          <SelectTrigger backgroundColor="gray.100" borderRadius="xl">
            {day ? (
              <Text>{day}</Text>
            ) : (
              <SelectValueText placeholder="День" />
            )}
            <IoChevronDown />
          </SelectTrigger>
          <SelectContent>
            {daysInMonth.map((d) => (
              <SelectItem
                key={d}
                item={String(d)}
                onClick={() => setDay(d)}
              >
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>

      <Box>
        <SelectRoot collection={monthCollection} position="relative">
          <SelectTrigger backgroundColor="gray.100" borderRadius="xl">
            {month ? (
              <Text>{months[month - 1]}</Text>
            ) : (
              <SelectValueText placeholder="Месяц" />
            )}
            <IoChevronDown />
          </SelectTrigger>
          <SelectContent>
            {months.map((monthName, i) => (
              <SelectItem
                key={i}
                item={String(i + 1)}
                onClick={() => setMonth(i + 1)}
              >
                {monthName}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>

      <Box>
        <SelectRoot collection={yearsCollection}>
          <SelectTrigger backgroundColor="gray.100" borderRadius="xl">
            {year ? (
              <Text>{year}</Text>
            ) : (
              <SelectValueText placeholder="Год" />
            )}
            <IoChevronDown />
          </SelectTrigger>
          <SelectContent>
            {years.map((year, i) => (
              <SelectItem
                key={i}
                item={String(i + 1)}
                onClick={() => setYear(year)}
              >
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>
    </Flex>
  );
};

export default DateInput;
