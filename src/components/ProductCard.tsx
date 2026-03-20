import { motion } from 'framer-motion';
import { ShoppingCart, Check, AlertCircle, Eye, FileText } from 'lucide-react';
import type { Product } from '../data/types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
  onViewDetail?: (product: Product) => void;
}

export default function ProductCard({ product, index, onViewDetail }: ProductCardProps) {
  const { addItem, setIsOpen } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.inStock) {
      addItem(product);
      setIsOpen(true);
    }
  };

  return (
    <motion.div
      className="product-card"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <div className="product-card__img-wrap" onClick={() => onViewDetail?.(product)}>
        <img src={product.image} alt={product.name} className="product-card__img" loading="lazy" />
        {product.popular && <span className="product-card__badge">Popular</span>}
        {product.requiresPrescription && (
          <span className="product-card__rx"><FileText size={10} /> Receta</span>
        )}
        <span className={`product-card__stock ${product.inStock ? '' : 'product-card__stock--out'}`}>
          {product.inStock ? <><Check size={11} /> Disponible</> : <><AlertCircle size={11} /> Agotado</>}
        </span>
        <button className="product-card__view" onClick={(e) => { e.stopPropagation(); onViewDetail?.(product); }}>
          <Eye size={16} />
        </button>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <span className="product-card__price">{product.priceRange}</span>
        {product.manufacturer && (
          <span className="product-card__mfr">{product.manufacturer}</span>
        )}
        <div className="product-card__tags">
          {product.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="product-card__tag">{tag}</span>
          ))}
        </div>
        <button
          className="product-card__cta"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart size={14} />
          {product.inStock ? 'Agregar al Carrito' : 'No Disponible'}
        </button>
      </div>
    </motion.div>
  );
}
