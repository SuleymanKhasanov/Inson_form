import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Flex, Input, Button } from '@chakra-ui/react';

interface FormData {
  day: string;
  month: string;
  year: string;
  date: Date | null;
}

const DateInputForm = () => {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      day: '',
      month: '',
      year: '',
      date: null,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Submitted Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Flex gap="10px" mb="20px">
          {/* Поле для дня */}
          <Controller
            name="day"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                placeholder="DD"
                maxLength={2}
                onChange={(e) => {
                  const value = e.target.value.slice(0, 2); // Ограничение на 2 символа
                  field.onChange(value);
                }}
              />
            )}
          />

          {/* Поле для месяца */}
          <Controller
            name="month"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                placeholder="MM"
                maxLength={2}
                onChange={(e) => {
                  const value = e.target.value.slice(0, 2); // Ограничение на 2 символа
                  field.onChange(value);
                }}
              />
            )}
          />

          {/* Поле для года */}
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                placeholder="YYYY"
                maxLength={4}
                onChange={(e) => {
                  const value = e.target.value.slice(0, 4); // Ограничение на 4 символа
                  field.onChange(value);
                }}
              />
            )}
          />
        </Flex>

        {/* Календарь */}
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              selected={field.value}
              onChange={(date: Date | null) => {
                if (date) {
                  field.onChange(date);
                  setValue(
                    'day',
                    date.getDate().toString().padStart(2, '0'),
                  );
                  setValue(
                    'month',
                    (date.getMonth() + 1).toString().padStart(2, '0'),
                  );
                  setValue('year', date.getFullYear().toString());
                } else {
                  setValue('day', '');
                  setValue('month', '');
                  setValue('year', '');
                }
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Выберите дату"
              customInput={
                <Input
                  placeholder="Выберите дату"
                  readOnly
                  backgroundColor="white"
                />
              }
            />
          )}
        />
      </Box>

      <Button type="submit" mt="10px" colorScheme="blue">
        Отправить
      </Button>
    </form>
  );
};

export default DateInputForm;
