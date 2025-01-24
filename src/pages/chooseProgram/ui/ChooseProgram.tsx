import { ChooseProgramCard } from '@/widgets/chooseProgramCard';
import { UserDataInfo } from '@/widgets/userDataInfo';
import { Container, Flex, Grid, Heading } from '@chakra-ui/react';

const ChooseProgram = () => {
  return (
    <Container width="100%" padding="3.5">
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        alignItems="center"
        justifyItems="center"
        gap="4.5"
      >
        <Flex direction="column" gap="4.5">
          <Heading color="#00146B" size="5xl" fontWeight="bold">
            Travel
          </Heading>
          <ChooseProgramCard />
        </Flex>
        <UserDataInfo />
      </Grid>
    </Container>
  );
};

export default ChooseProgram;
