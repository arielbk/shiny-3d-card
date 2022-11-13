import { Box, flexbox } from '@chakra-ui/react';
import {
  animate,
  AnimationOptions,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import Card from './components/Card';

function App() {
  const cardRef = useRef<HTMLDivElement>(null);

  // mouse position
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );
  const dampen = 40;
  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    if (typeof window === 'undefined') return;
    // recalculate grid on resize
    window.addEventListener('mousemove', handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      position="relative"
      width="100vw"
      height="100vh"
      overflow="hidden"
      style={{ perspective: 1000 }}
    >
      <Box
        as={motion.div}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* GRID */}
        <Box
          width="100%"
          height="100%"
          backgroundSize="60px 60px"
          backgroundImage="radial-gradient(circle at 1px 1px, white 1px, transparent 0)"
          backgroundPosition="center"
          position="absolute"
          as={motion.div}
          style={{
            translateZ: -500,
          }}
        />
        {/* CARD WRAPPER */}
        <Box
          ref={cardRef}
          borderRadius={20}
          backdropFilter="blur(3px) brightness(120%)"
        >
          <Card />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
