import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function MagneticButton({
  children,
  className = '',
  href,
  target,
  onClick,
  type,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.3;
    const distY = (e.clientY - centerY) * 0.3;
    setPosition({ x: distX, y: distY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      style={{ display: 'inline-flex' }}
    >
      {href ? (
        <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={className}>
          {children}
        </a>
      ) : type === 'submit' ? (
        <button type="submit" className={className} onClick={onClick}>
          {children}
        </button>
      ) : (
        <button type="button" className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
