import { motion } from 'framer-motion';
import { Clock, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../data/types';

interface Props {
  items: Product[];
  onViewDetail?: (product: Product) => void;
}

export default function RecentlyViewedSection({ items, onViewDetail }: Props) {
  const { addItem, setIsOpen } = useCart();

  if (items.length === 0) return null;

  const handleAdd = (product: Product) => {
    addItem(product);
    setIsOpen(true);
  };

  return (
    <section className="recently-viewed">
      <div className="section-container">
        <div className="recently-viewed__header">
          <Clock size={18} />
          <h3 className="recently-viewed__title">Vistos Recientemente</h3>
        </div>

        <div className="recently-viewed__grid">
          {items.map((product, i) => (
            <motion.div
              key={product.id}
              className="recent-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="recent-card__img-wrap" onClick={() => onViewDetail?.(product)}>
                <img src={product.image} alt={product.name} className="recent-card__img" loading="lazy" />
                <button className="recent-card__view"><Eye size={14} /></button>
              </div>
              <div className="recent-card__body">
                <h4 className="recent-card__name">{product.name}</h4>
                <span className="recent-card__price">{product.priceRange}</span>
                <button className="recent-card__add" onClick={() => handleAdd(product)} disabled={!product.inStock}>
                  <ShoppingCart size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
