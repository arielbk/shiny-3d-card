import { Box } from '@chakra-ui/react';

const Card: React.FC = () => {
  return (
    <Box
      width="300px"
      height="400px"
      borderRadius="20px"
      padding="1rem 2rem"
      border="1px solid rgba(200 200 200 / 0.2)"
      display="flex"
      placeItems="center"
      placeContent="center"
      textAlign="center"
      color="#eee"
      textShadow={'0 1px 0 #999'}
      fontWeight={'600'}
    >
      3D card effect with react and framer motion
    </Box>
  );
};

export default Card;
