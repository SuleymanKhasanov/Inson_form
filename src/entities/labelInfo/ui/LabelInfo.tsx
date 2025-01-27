import { Button, Flex, Text } from '@chakra-ui/react';
import { ToggleTip } from '@/shared/chakraComponents/ui/toggle-tip';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

interface LabelInfoProps {
  labelText: string;
  toggleInfo: string;
}

const LabelInfo: React.FC<LabelInfoProps> = ({
  labelText,
  toggleInfo,
}) => {
  return (
    <Flex justify="space-between" align="center" width="90%">
      <Text fontWeight="bold">{labelText}</Text>
      <ToggleTip content={toggleInfo}>
        <Button size="sm" variant="ghost">
          <AiOutlineQuestionCircle />
        </Button>
      </ToggleTip>
    </Flex>
  );
};

export default LabelInfo;
