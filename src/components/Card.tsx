import { Box } from '@chakra-ui/react';

const Card: React.FC = () => {
  return (
    <Box
      width="300px"
      height="400px"
      borderRadius="20px"
      padding="0.5rem"
      border="1px solid rgba(200 200 200 / 0.6)"
      background="rgba(255 255 255 / 0.1)"
    />
  );
};

export default Card;
