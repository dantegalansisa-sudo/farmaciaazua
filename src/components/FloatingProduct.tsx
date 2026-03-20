import { motion } from 'framer-motion';
import { Pill, Zap, Sparkles } from 'lucide-react';

export default function FloatingProduct() {
  return (
    <div className="floating-product">
      <motion.div
        className="fp-circle"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />

      <motion.img
        src="/images/pharma-placeholder.jpg"
        alt="Vitaminas y medicamentos"
        className="fp-image"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 0.6, delay: 0.5 },
        }}
      />

      <motion.span
        className="fp-sparkle"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <Sparkles size={28} strokeWidth={1.5} />
      </motion.span>

      <motion.div
        className="fp-badge fp-badge-1"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
      >
        <Pill size={16} strokeWidth={2.5} style={{ color: '#1A7340' }} />
        Disponible
      </motion.div>

      <motion.div
        className="fp-badge fp-badge-2"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
      >
        <Zap size={16} strokeWidth={2.5} style={{ color: '#E67E22' }} />
        Pedidos WhatsApp
      </motion.div>
    </div>
  );
}
