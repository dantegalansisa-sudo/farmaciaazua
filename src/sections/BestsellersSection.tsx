import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, ShoppingCart, Eye } from 'lucide-react';
import RevealText from '../components/RevealText';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../data/types';

interface Props {
  onViewDetail?: (product: Product) => void;
}

export default function BestsellersSection({ onViewDetail }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addItem, setIsOpen } = useCart();

  const bestsellers = products.filter((p) => p.popular && p.inStock).slice(0, 10);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const handleAdd = (product: Product) => {
    addItem(product);
    setIsOpen(true);
  };

  return (
    <section className="bestsellers">
      <div className="section-container">
        <div className="bestsellers__header">
          <div>
            <span className="label-tag">
              <TrendingUp size={14} />
              Mas Vendidos
            </span>
            <RevealText tag="h2" className="section-title">
              Productos Populares
            </RevealText>
          </div>
          <div className="bestsellers__nav">
            <button className="bestsellers__arrow" onClick={() => scroll('left')} aria-label="Anterior">
              <ChevronLeft size={20} />
            </button>
            <button className="bestsellers__arrow" onClick={() => scroll('right')} aria-label="Siguiente">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="bestsellers__track" ref={scrollRef}>
          {bestsellers.map((product, i) => (
            <motion.div
              key={product.id}
              className="bestseller-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="bestseller-card__rank">#{i + 1}</div>
              <div className="bestseller-card__img-wrap" onClick={() => onViewDetail?.(product)}>
                <img src={product.image} alt={product.name} className="bestseller-card__img" loading="lazy" />
                <button className="bestseller-card__quick-view">
                  <Eye size={16} />
                </button>
              </div>
              <div className="bestseller-card__body">
                <h3 className="bestseller-card__name">{product.name}</h3>
                <span className="bestseller-card__price">{product.priceRange}</span>
                {product.manufacturer && (
                  <span className="bestseller-card__mfr">{product.manufacturer}</span>
                )}
                <button className="bestseller-card__add" onClick={() => handleAdd(product)}>
                  <ShoppingCart size={14} />
                  Agregar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
