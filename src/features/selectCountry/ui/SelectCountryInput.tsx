import {
  Button,
  createListCollection,
  Flex,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  Text,
} from '@chakra-ui/react';
import { countries } from '@/shared/data/data';
import { IoChevronDown } from 'react-icons/io5';
import { LabelInfo } from '@/entities/labelInfo';
import { IoIosAdd } from 'react-icons/io';
import { Country } from '@/shared/model/countryInterface';

type SelectCountryInputProps = {
  value: Country | null;
  onChange: (country: Country) => void;
};

const SelectCountryInput = ({
  value,
  onChange,
}: SelectCountryInputProps) => {
  const countriesCollection = createListCollection({
    items: countries,
  });

  const handleSelectChange = (country: Country) => {
    onChange(country); // Передаём весь объект страны
  };

  return (
    <Flex direction="column" gap="2.5">
      <LabelInfo
        labelText="Страна путешествий"
        toggleInfo="Выберете страну для путешествий"
      />
      <Flex gap="2.5">
        <SelectRoot
          collection={countriesCollection}
          position="relative"
        >
          <SelectTrigger backgroundColor="gray.100" borderRadius="xl">
            {value ? (
              <Text>{value.name}</Text>
            ) : (
              <SelectValueText placeholder="Выберите страну" />
            )}
            <IoChevronDown />
          </SelectTrigger>
          <SelectContent position="absolute" top="100%">
            {countriesCollection.items.map((country) => (
              <SelectItem
                key={country.id}
                item={country.name}
                onClick={() => handleSelectChange(country)}
              >
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <Button
          borderRadius="xl"
          backgroundColor="gray.100"
          cursor="pointer"
          _hover={{ backgroundColor: 'blue.700' }}
          title="Добавить город"
        >
          <IoIosAdd color="#9B9AA8" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default SelectCountryInput;
