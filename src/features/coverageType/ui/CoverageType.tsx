import { Stack } from '@chakra-ui/react';
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
    <Stack direction="column">
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
          <Radio value="singleTrip">Однократное путешествие</Radio>
          <Radio value="multipleTrips">
            Многократные путешествия
          </Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export default CoverageType;
