import { CardTitle } from '@/entities/cardTitle';
import { ProgressBar } from '@/entities/progressBar';
import ProgramCard from '@/features/programCard/ui/ProgramCard';
import { Box, Flex } from '@chakra-ui/react';

const ChooseProgramCard = () => {
  return (
    <Box bg="#fff" shadow="md" borderRadius="4xl" padding="3.5">
      <Flex direction="column" gap="3.5" padding="3.5" align="left">
        <ProgressBar value={2} />
        <CardTitle title="Выберите программу" />
        <ProgramCard />
      </Flex>
    </Box>
  );
};

export default ChooseProgramCard;
