import { Box } from '@chakra-ui/react';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import Card from './components/Card';
import DotGrid from './components/DotGrid';

function App() {
  // mouse position
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );

  // a reference to our animated card element
  const cardRef = useRef<HTMLDivElement>(null);

  // rotation
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

  // sheen
  const sheenPosition = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position: number = newRotateX + newRotateY;
      return position;
    }
  );
  const sheenPercentPosition = useTransform(
    sheenPosition,
    [-5, 5],
    [-100, 200]
  );
  const sheenOpacity = useTransform(
    sheenPercentPosition,
    [-100, 50, 200],
    [0.01, 0.05, 0.01]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(55deg, transparent, rgba(255 255 255 / ${sheenOpacity}) ${sheenPercentPosition}%, transparent)`;

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
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <DotGrid />
        <motion.div
          ref={cardRef}
          style={{
            borderRadius: 20,
            backdropFilter: 'blur(3px) brightness(120%)',
            backgroundImage: sheenGradient,
          }}
        >
          <Card />
        </motion.div>
      </Box>
    </Box>
  );
}

export default App;
