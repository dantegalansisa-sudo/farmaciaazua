import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, Search, ChevronDown, X, ShoppingCart, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data/categories';
import SearchBar from './SearchBar';
import MobileDrawer from './MobileDrawer';
import MagneticButton from './MagneticButton';
import { useCart } from '../contexts/CartContext';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { totalItems, setIsOpen: openCart } = useCart();
  const { isDark, toggle: toggleDark } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <a href="#" className="navbar__logo">
            <img src="/images/logo/dilania-logo.png" alt="Farmacia Dilania" className="navbar__logo-img" />
          </a>

          <div className="navbar__links">
            <div
              className="navbar__link navbar__link--mega"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              Productos <ChevronDown size={12} />

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    className="mega-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mega-menu__grid">
                      {categories.map((cat) => (
                        <a
                          key={cat.slug}
                          href="#productos"
                          className="mega-menu__item"
                          onClick={() => setMegaOpen(false)}
                        >
                          <div
                            className="mega-menu__color"
                            style={{ background: cat.color }}
                          />
                          <div>
                            <div className="mega-menu__title">{cat.title}</div>
                            <div className="mega-menu__count">
                              {cat.productCount} productos
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#servicios" className="navbar__link">Servicios</a>
            <a href="#ofertas" className="navbar__link">Ofertas</a>
            <a href="#equipo" className="navbar__link">Equipo</a>
            <a href="#contacto" className="navbar__link">Contacto</a>
          </div>

          <div className="navbar__right">
            <button
              className="navbar__icon-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
            >
              {searchOpen ? <X size={18} strokeWidth={2.5} /> : <Search size={18} strokeWidth={2.5} />}
            </button>

            <span className="navbar__divider" />

            <button
              className="navbar__icon-btn"
              onClick={toggleDark}
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            </button>

            <button
              className="navbar__icon-btn navbar__cart-btn"
              onClick={() => openCart(true)}
              aria-label="Carrito"
            >
              <ShoppingCart size={18} strokeWidth={2.5} />
              {totalItems > 0 && <span className="navbar__cart-badge">{totalItems}</span>}
            </button>

            <span className="navbar__divider" />

            <a href="tel:8095212301" className="navbar__phone">
              <Phone size={14} strokeWidth={2.5} />
              809-521-2301
            </a>

            <MagneticButton
              href="https://wa.me/18093953671"
              target="_blank"
              className="navbar__cta"
            >
              <MessageCircle size={15} strokeWidth={2.5} />
              Pedir por WhatsApp
            </MagneticButton>

            <button
              className="navbar__hamburger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Search overlay — fuera del navbar para que no se corte el dropdown */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="section-container">
              <SearchBar expanded onClose={() => setSearchOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
