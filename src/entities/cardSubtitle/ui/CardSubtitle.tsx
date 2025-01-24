import { Flex, Text } from '@chakra-ui/react';
import { PiWarningCircleFill } from 'react-icons/pi';

const CardSubtitle = () => {
  return (
    <Flex align="flex-start" gap="2.5">
      <PiWarningCircleFill color="#18BC50" fontSize="40px" />
      <Text fontSize="12px" minWidth="200px" maxWidth="300px">
        Не волнуйтесь! Вы можете покинуть сайт и продолжить с этого
        момента в любое время
      </Text>
    </Flex>
  );
};

export default CardSubtitle;
