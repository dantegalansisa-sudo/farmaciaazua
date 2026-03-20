import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { useClickOutside } from '../hooks/useClickOutside';
import SearchBar from './SearchBar';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Productos', href: '#productos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ofertas', href: '#ofertas' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Salud', href: '#salud' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useClickOutside(drawerRef, onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            ref={drawerRef}
            className="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="drawer__header">
              <img src="/images/logo/dilania-logo.png" alt="Farmacia Dilania" className="drawer__logo" />
              <button className="drawer__close" onClick={onClose}>
                <X size={20} />
              </button>
            </div>

            <div className="drawer__search">
              <SearchBar expanded onClose={onClose} />
            </div>

            <nav className="drawer__nav">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="drawer__link"
                  onClick={onClose}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="drawer__footer">
              <a href="tel:8095212301" className="drawer__contact">
                <Phone size={16} />
                809-521-2301
              </a>
              <a
                href="https://wa.me/18093953671"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer__cta"
              >
                <MessageCircle size={16} />
                Pedir por WhatsApp
              </a>
              <div className="drawer__ars">
                <ShieldCheck size={14} />
                Aceptamos ARS Renacer
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
