import { Heading } from '@chakra-ui/react';

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return (
    <Heading fontWeight="bold" textStyle="2xl" color="#00146B">
      {title}
    </Heading>
  );
};

export default CardTitle;
