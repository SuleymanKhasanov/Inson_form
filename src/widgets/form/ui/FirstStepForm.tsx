import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { SelectCountryInput } from '@/features/selectCountry';
import { CoverageType } from '@/features/coverageType';
import { SelectBiginDate } from '@/features/selectBiginDate';
import { SelectEndDate } from '@/features/selectEndDate';
import { SelectTarget } from '@/features/selectTarget';
import { PhoneNumber } from '@/features/phoneNumber';
import { CardTitle } from '@/entities/cardTitle';
import { CardSubtitle } from '@/entities/cardSubtitle';
import { ProgressBar } from '@/entities/progressBar';
import { Country } from '@/shared/model/countryInterface';
import { useNavigate } from 'react-router-dom';

interface FormSubmitProps {
  country: Country | null;
  coverageType: string;
  startDate: Date | null;
  endDate: Date | null;
  target: string;
  phoneNumber: string;
}

const FirstStepForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSubmitProps>();

  const navigate = useNavigate();

  const onSubmit = (data: FormSubmitProps) => {
    console.log('Форма отправлена:', data);
    localStorage.setItem('formData', JSON.stringify(data));
    navigate('/second-step');
  };

  return (
    <Box bg="#fff" shadow="md" borderRadius="4xl" padding="3.5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="3.5" padding="3.5" align="left">
          <ProgressBar />
          <CardTitle title="Покупка страхового полиса" />

          {/* Поле страны */}
          <Controller
            name="country"
            control={control}
            defaultValue={null}
            rules={{ required: 'Выберете страну путешествий' }}
            render={({ field }) => (
              <SelectCountryInput
                value={field.value}
                onChange={(country) => field.onChange(country)}
              />
            )}
          />
          {errors.country && (
            <Text color="red.500">{errors.country.message}</Text>
          )}

          {/* Поле типа покрытия */}
          <Controller
            name="coverageType"
            control={control}
            defaultValue="Однократное путешествие"
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
              validate: (value) => {
                const startDate = control._getWatch('startDate');
                return !value || !startDate || value > startDate
                  ? true
                  : 'Конец страхования не может быть раньше начала';
              },
            }}
            render={({ field }) => <SelectEndDate {...field} />}
          />
          {errors.endDate && (
            <Text color="red.500">{errors.endDate.message}</Text>
          )}

          {/* Поле цедей путешествия */}
          <Controller
            name="target" // Изменено имя на уникальное
            control={control}
            defaultValue="Туризм"
            rules={{ required: 'Выберите цель' }}
            render={({ field }) => (
              <SelectTarget
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.target && (
            <Text color="red.500">{errors.target.message}</Text>
          )}

          {/* Поле номера телефона */}
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            rules={{
              required: 'Укажите номер телефона',
              validate: (value) => {
                const phoneRegex = /^\+\d{1,4} \d{3} \d{2} \d{2}$/;
                return (
                  phoneRegex.test(value) ||
                  'Введите корректный номер телефона'
                );
              },
            }}
            render={({ field }) => (
              <PhoneNumber
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.phoneNumber && (
            <Text color="red.500">{errors.phoneNumber.message}</Text>
          )}

          <Button
            borderRadius="xl"
            backgroundColor="#18BC50"
            fontWeight="bold"
            width="100px"
            type="submit"
            cursor="pointer"
          >
            Далее
          </Button>

          <CardSubtitle />
        </Flex>
      </form>
    </Box>
  );
};

export default FirstStepForm;
