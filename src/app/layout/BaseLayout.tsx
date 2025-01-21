import { Container, Grid } from '@chakra-ui/react';
import { FirstStepForm } from '../../widgets/form';

function BaseLayout() {
  return (
    <Container backgroundColor="#EAEFFA" height="100vh" width="100%">
      <Grid templateColumns="repeat(2, 1fr)">
        <FirstStepForm />
      </Grid>
    </Container>
  );
}

export default BaseLayout;
