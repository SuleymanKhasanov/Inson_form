import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { SelectCountryInput } from '@/features/selectCountry';
import { CoverageType } from '@/features/coverageType';
import { Controller, useForm } from 'react-hook-form';

interface FormSubmitProps {
  country: string;
  control: string;
}

const FirstStepForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSubmitProps>();

  const onSubmit = (data: FormSubmitProps) => {
    console.log(data);
  };

  return (
    <Box
      bg="#fff"
      shadow="md"
      borderRadius="30px"
      padding="10px"
      width="500px"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction="column"
          gap="10px"
          padding="20px"
          align="left"
        >
          <Text fontWeight="bold" textStyle="2xl" color="#00146B">
            Покупка страхового полиса
          </Text>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            rules={{ required: 'Выберите страну' }}
            render={({ field }) => <SelectCountryInput {...field} />}
          />
          {errors.country && (
            <Text color="red.500">{'Это обязательное поле'}</Text>
          )}
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
