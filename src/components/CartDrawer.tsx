import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useClickOutside } from '../hooks/useClickOutside';
import { openWhatsApp } from '../utils/whatsapp';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, clearCart, totalItems } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  useClickOutside(drawerRef, () => { if (isOpen) setIsOpen(false); });

  const buildOrderMessage = () => {
    const lines = items.map(
      (item) => `- ${item.product.name} x${item.quantity} (${item.product.priceRange})`
    );
    return `Hola, quiero hacer un pedido:\n\n${lines.join('\n')}\n\nTotal de productos: ${totalItems}\n\nPor favor confirmar disponibilidad y precio final. Gracias!`;
  };

  const handleCheckout = () => {
    openWhatsApp(buildOrderMessage());
    clearCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            ref={drawerRef}
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="cart-drawer__header">
              <h2 className="cart-drawer__title">
                <ShoppingCart size={20} />
                Mi Carrito
                {totalItems > 0 && <span className="cart-drawer__count">{totalItems}</span>}
              </h2>
              <button className="cart-drawer__close" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="cart-drawer__empty">
                <ShoppingCart size={48} strokeWidth={1} />
                <p>Tu carrito esta vacio</p>
                <button className="cart-drawer__browse" onClick={() => setIsOpen(false)}>
                  Ver Productos
                </button>
              </div>
            ) : (
              <>
                <div className="cart-drawer__items">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      className="cart-item"
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="cart-item__img"
                      />
                      <div className="cart-item__info">
                        <h4 className="cart-item__name">{item.product.name}</h4>
                        <span className="cart-item__price">{item.product.priceRange}</span>
                        <div className="cart-item__controls">
                          <button
                            className="cart-item__qty-btn"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="cart-item__qty">{item.quantity}</span>
                          <button
                            className="cart-item__qty-btn"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            className="cart-item__remove"
                            onClick={() => removeItem(item.product.id)}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="cart-drawer__footer">
                  <div className="cart-drawer__summary">
                    <span>Total de productos:</span>
                    <strong>{totalItems}</strong>
                  </div>
                  <p className="cart-drawer__note">
                    El precio final sera confirmado por WhatsApp
                  </p>
                  <button className="cart-drawer__checkout" onClick={handleCheckout}>
                    <MessageCircle size={18} />
                    Enviar Pedido por WhatsApp
                    <ArrowRight size={16} />
                  </button>
                  <button className="cart-drawer__clear" onClick={clearCart}>
                    Vaciar Carrito
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
