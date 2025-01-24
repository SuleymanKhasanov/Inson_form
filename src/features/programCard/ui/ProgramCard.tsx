import {
  RadioCardItem,
  RadioCardRoot,
} from '@/shared/chakraComponents/ui/radio-card';
import { programs } from '@/shared/data/data';
import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// Типизация данных программы
type Program = {
  id: number;
  name: string;
  liability: number;
  description: string;
  coverages: {
    medicine: number;
    accident: number;
    covid: number;
    evacuation: number;
    transportation: number;
    compensation: number;
  };
};

// Типизация данных из localStorage
type FormData = {
  country?: {
    programs?: { name: string }[];
  };
};

const ProgramCard = () => {
  const [selectedPrograms, setSelectedPrograms] = useState<Program[]>(
    [],
  );

  useEffect(() => {
    const data = localStorage.getItem('formData');
    if (data) {
      // Парсим и типизируем данные
      const parsedData: FormData = JSON.parse(data);
      const localPrograms = parsedData?.country?.programs || [];

      // Сопоставляем локальные программы с существующими
      const matchedPrograms = localPrograms
        .map((localProgram) =>
          programs.find(
            (program) => program.name === localProgram.name,
          ),
        )
        .filter((program): program is Program => !!program); // Убираем undefined и приводим к типу Program

      setSelectedPrograms(matchedPrograms); // Теперь типы совпадают
    }
  }, []);

  return (
    <RadioCardRoot>
      <Flex direction="column" gap="4">
        {selectedPrograms.length > 0 ? (
          selectedPrograms.map((element) => (
            <RadioCardItem
              key={element.id.toString()} // Преобразование id в строку
              value={element.id.toString()} // Преобразование id в строку
              label={element.name}
              description={`Общее покрытие - ${new Intl.NumberFormat(
                'ru-RU',
              ).format(element.liability)} EUR`}
              width="100%"
              bgColor="gray.100"
              borderRadius="xl"
              indicatorPlacement="start"
              colorPalette="green"
              _checked={{
                boxShadow: 'md',
                bgColor: '#fff',
                color: '#00146B',
                borderColor: 'green.400',
              }}
              _hover={{
                bgColor: 'gray.50',
              }}
            >
              <Text fontWeight="bold">{element.name}</Text>
              <Text fontSize="sm" color="gray.600">
                Общее покрытие -{' '}
                {new Intl.NumberFormat('ru-RU').format(
                  element.liability,
                )}{' '}
                EUR
              </Text>
              <Text fontSize="xs" color="gray.500" mt="2">
                {element.description}
              </Text>
            </RadioCardItem>
          ))
        ) : (
          <Text color="gray.500">Нет доступных тарифов</Text>
        )}
      </Flex>
    </RadioCardRoot>
  );
};

export default ProgramCard;
