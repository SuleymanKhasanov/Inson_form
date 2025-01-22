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
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { LabelInfo } from '@/entities/labelInfo';
import { IoIosAdd } from 'react-icons/io';

type SelectCountryInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const SelectCountryInput = ({
  onChange,
}: SelectCountryInputProps) => {
  const countriesCollection = createListCollection({
    items: countries,
  });

  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (country: string) => {
    setInputValue(country);
    onChange(country);
  };

  return (
    <Flex align="end" gap="2.5">
      <SelectRoot
        collection={countriesCollection}
        position="relative"
      >
        <LabelInfo
          labelText="Страна путешествий"
          toggleInfo="Выберете страну для путешествий"
        />
        <SelectTrigger backgroundColor="gray.100" borderRadius="xl">
          {inputValue ? (
            <Text>{inputValue}</Text>
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
              onClick={() => handleSelectChange(country.name)}
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
  );
};

export default SelectCountryInput;
