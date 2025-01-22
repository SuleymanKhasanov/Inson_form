import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { SelectCountryInput } from '@/features/selectCountry';
import { CoverageType } from '@/features/coverageType';
import { Controller, useForm } from 'react-hook-form';
import SelectBiginDate from '@/features/selectBiginDate/ui/SelectBiginDate';
import SelectEndDate from '@/features/selectEndDate/ui/SelectEndDate';

interface FormSubmitProps {
  country: string;
  coverageType: string;
  startDate: Date | null;
  endDate: Date | null;
}

const FirstStepForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSubmitProps>();

  const onSubmit = (data: FormSubmitProps) => {
    console.log('Форма отправлена:', data);
  };

  return (
    <Box
      bg="#fff"
      shadow="md"
      borderRadius="4xl"
      padding="2.5"
      width="breakpoint-sm"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="2.5" padding="3.5" align="left">
          <Heading fontWeight="bold" textStyle="3xl" color="#00146B">
            Покупка страхового полиса
          </Heading>

          {/* Поле страны */}
          <Controller
            name="country"
            control={control}
            defaultValue=""
            rules={{ required: 'Это обязательное поле' }}
            render={({ field }) => <SelectCountryInput {...field} />}
          />
          {errors.country && (
            <Text color="red.500">{errors.country.message}</Text>
          )}

          {/* Поле типа покрытия */}
          <Controller
            name="coverageType"
            control={control}
            defaultValue="singleTrip"
            rules={{ required: 'Выберите тип покрытия' }}
            render={({ field }) => <CoverageType {...field} />}
          />
          {errors.coverageType && (
            <Text color="red.500">{errors.coverageType.message}</Text>
          )}

          {/* Начало страхования */}
          <Controller
            name="startDate"
            control={control}
            defaultValue={null}
            rules={{ required: 'Укажите начало страхования' }}
            render={({ field }) => <SelectBiginDate {...field} />}
          />
          {errors.startDate && (
            <Text color="red.500">{errors.startDate.message}</Text>
          )}

          {/* Конец страхования */}
          <Controller
            name="endDate"
            control={control}
            defaultValue={null}
            rules={{
              required: 'Укажите конец страхования',
              validate: (value) =>
                !value || value > control.getValues('startDate')
                  ? true
                  : 'Конец страхования не может быть раньше начала',
            }}
            render={({ field }) => <SelectEndDate {...field} />}
          />
          {errors.endDate && (
            <Text color="red.500">{errors.endDate.message}</Text>
          )}

          <Button
            borderRadius="xl"
            backgroundColor="#18BC50"
            fontWeight="bold"
            width="100px"
            type="submit"
          >
            Далее
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default FirstStepForm;
