import {
  Button,
  createListCollection,
  Flex,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@chakra-ui/react';
import { countries } from '@/shared/data/data';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { LabelInfo } from '@/entities/labelInfo';
import { IoIosAdd } from 'react-icons/io';
import { Tag } from '@/shared/components/ui/tag';

type SelectCountryInputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
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
    onChange(country); // Это обновит значение в форме
  };

  return (
    <Flex align="end" gap="10px">
      <SelectRoot
        collection={countriesCollection}
        position="relative"
      >
        <LabelInfo
          labelText="Страна путешествий"
          toggleInfo="Выберете город для путешествий"
        />
        <SelectTrigger
          backgroundColor={'#EBEBF2'}
          borderRadius={'xl'}
        >
          {inputValue ? (
            <Tag
              closable
              onClick={() => setInputValue('')}
              padding="5px"
            >
              {inputValue}
            </Tag>
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
        backgroundColor="#EBEBF2"
        cursor="pointer"
        _hover={{ backgroundColor: '#011368' }}
        title="Добавить город"
      >
        <IoIosAdd color="#9B9AA8" />
      </Button>
    </Flex>
  );
};

export default SelectCountryInput;
