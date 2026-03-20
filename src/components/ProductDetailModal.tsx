import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, AlertTriangle, Check, FileText, Info, Package, Heart, Share2 } from 'lucide-react';
import type { Product } from '../data/types';
import { useClickOutside } from '../hooks/useClickOutside';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { addItem, setIsOpen: openCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useClickOutside(modalRef, onClose);

  const handleAddToCart = () => {
    if (product && product.inStock) {
      addItem(product);
      onClose();
      openCart(true);
    }
  };

  const handleShare = () => {
    if (!product) return;
    const text = `Mira este producto en Farmacia Dilania: ${product.name} - ${product.priceRange}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="modal-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="product-modal"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className="product-modal__close" onClick={onClose}>
                <X size={20} />
              </button>

              <div className="product-modal__grid">
                <div className="product-modal__img-wrap">
                  <img src={product.image} alt={product.name} className="product-modal__img" />
                  {product.requiresPrescription && (
                    <span className="product-modal__rx-badge">
                      <FileText size={14} />
                      Requiere Receta
                    </span>
                  )}
                </div>

                <div className="product-modal__info">
                  <div className="product-modal__header">
                    <span className={`product-modal__stock ${product.inStock ? '' : 'product-modal__stock--out'}`}>
                      {product.inStock ? <><Check size={12} /> Disponible</> : <><AlertTriangle size={12} /> Agotado</>}
                    </span>
                    {product.manufacturer && (
                      <span className="product-modal__mfr">
                        <Package size={12} />
                        {product.manufacturer}
                      </span>
                    )}
                  </div>

                  <h2 className="product-modal__name">{product.name}</h2>
                  <span className="product-modal__price">{product.priceRange}</span>

                  {product.dosage && (
                    <div className="product-modal__section">
                      <h4><Info size={14} /> Dosis</h4>
                      <p>{product.dosage}</p>
                    </div>
                  )}

                  {product.activeIngredients && product.activeIngredients.length > 0 && (
                    <div className="product-modal__section">
                      <h4>Ingredientes Activos</h4>
                      <div className="product-modal__tags">
                        {product.activeIngredients.map((ing) => (
                          <span key={ing} className="product-modal__tag">{ing}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.indications && product.indications.length > 0 && (
                    <div className="product-modal__section">
                      <h4><Check size={14} /> Indicaciones</h4>
                      <ul className="product-modal__list">
                        {product.indications.map((ind) => (
                          <li key={ind}>{ind}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.warnings && product.warnings.length > 0 && (
                    <div className="product-modal__section product-modal__section--warn">
                      <h4><AlertTriangle size={14} /> Advertencias</h4>
                      <ul className="product-modal__list product-modal__list--warn">
                        {product.warnings.map((w) => (
                          <li key={w}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="product-modal__button-row">
                    <button
                      className="product-modal__add-btn"
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart size={18} />
                      {product.inStock ? 'Agregar al Carrito' : 'No Disponible'}
                    </button>
                    <button
                      className={`product-modal__icon-btn ${isInWishlist(product.id) ? 'product-modal__icon-btn--active' : ''}`}
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Favorito"
                    >
                      <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      className="product-modal__icon-btn"
                      onClick={handleShare}
                      aria-label="Compartir"
                    >
                      <Share2 size={18} />
                    </button>
                  </div>

                  <p className="product-modal__disclaimer">
                    Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulte a su medico.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
