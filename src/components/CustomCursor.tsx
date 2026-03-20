import { motion } from 'framer-motion';
import { useMouse } from '../hooks/useMouse';

export default function CustomCursor() {
  const { position, isHovering } = useMouse();

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className={`cursor-ring${isHovering ? ' cursor--hover' : ''}`}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
