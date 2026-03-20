import { motion, type Variants } from 'framer-motion';
import { type ReactNode, type CSSProperties, type ElementType } from 'react';

interface RevealTextProps {
  children: ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export default function RevealText({
  children,
  tag = 'h2',
  className = '',
  delay = 0,
  style,
}: RevealTextProps) {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariant: Variants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const Tag = tag as ElementType;

  if (!text) {
    return (
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        }}
      >
        <Tag className={className} style={style}>
          {children}
        </Tag>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <Tag
        className={className}
        style={{
          ...style,
          display: 'flex',
          flexWrap: 'wrap' as const,
          gap: '0 0.3em',
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariant}
            style={{ display: 'inline-block', overflow: 'hidden' }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
