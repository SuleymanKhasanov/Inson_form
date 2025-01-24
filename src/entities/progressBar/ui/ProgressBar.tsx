import { Box, Button, Flex } from '@chakra-ui/react';
import { IoArrowBackOutline } from 'react-icons/io5';

const ProgressBar = () => {
  return (
    <Flex gap="2.5" align="center">
      <Box
        backgroundColor="green.500"
        width="50%"
        height="1.5"
        borderRadius="xl"
      />
      <Box
        backgroundColor="gray.200"
        width="50%"
        height="1.5"
        borderRadius="xl"
      />
      <Button backgroundColor="gray.200" borderRadius="4xl" disabled>
        <IoArrowBackOutline />
      </Button>
    </Flex>
  );
};

export default ProgressBar;
