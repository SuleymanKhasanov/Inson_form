import { FirstStepForm } from '@/widgets/form';
import { Container, Flex, Grid, Heading } from '@chakra-ui/react';

const PurchasingPolicy = () => {
  return (
    <Container width="100%" padding="3.5">
      <Grid
        templateColumns={{ base: '1fr', xl: 'repeat(2, 1fr)' }}
        alignItems="center"
        justifyItems="center"
      >
        <Flex direction="column" gap="4.5">
          <Heading color="#00146B" size="5xl" fontWeight="bold">
            Travel
          </Heading>
          <FirstStepForm />
        </Flex>
      </Grid>
    </Container>
  );
};

export default PurchasingPolicy;
