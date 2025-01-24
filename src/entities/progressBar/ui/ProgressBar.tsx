import { Box, Button, Flex } from '@chakra-ui/react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Flex gap="2.5" align="center">
      <Box
        backgroundColor="green.500"
        width="50%"
        height="1.5"
        borderRadius="xl"
      />
      <Box
        backgroundColor={value === 2 ? 'green.500' : 'gray.200'}
        width="50%"
        height="1.5"
        borderRadius="xl"
      />
      <Button
        backgroundColor={value === 2 ? 'blue.800' : 'gray.400'}
        borderRadius="4xl"
        disabled={value !== 2}
        onClick={handleBackClick} // Используем обработчик
      >
        <IoArrowBackOutline />
      </Button>
    </Flex>
  );
};

export default ProgressBar;
