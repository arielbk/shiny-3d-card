import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const DotGrid: React.FC = () => {
  return (
    <Box
      width="100%"
      height="100%"
      backgroundSize="60px 60px"
      backgroundImage="radial-gradient(circle at 1px 1px, rgba(170 205 255 / 0.3) 2px, transparent 0)"
      backgroundPosition="center"
      position="absolute"
      style={{
        transform: 'translateZ(-500px)',
      }}
    />
  );
};

export default DotGrid;
