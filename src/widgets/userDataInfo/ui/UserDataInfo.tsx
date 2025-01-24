import { CardTitle } from '@/entities/cardTitle';
import { UserDataList } from '@/entities/userDataList';
import { Box, Flex } from '@chakra-ui/react';

const UserDataInfo = () => {
  return (
    <Box bg="#fff" shadow="md" borderRadius="4xl" padding="3.5">
      <Flex direction="column" gap="2.5">
        <CardTitle title="Ваши данные" />
        <UserDataList />
      </Flex>
    </Box>
  );
};

export default UserDataInfo;
