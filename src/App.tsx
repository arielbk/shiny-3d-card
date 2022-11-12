import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box
      position="relative"
      width="100vw"
      height="100vh"
      padding="100px"
      boxSizing="border-box"
    >
      <Box
        width="100%"
        height="100%"
        backgroundSize="60px 60px"
        backgroundImage="linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)"
        backgroundPosition="center"
        opacity="20%"
      />
    </Box>
  );
}

export default App;
