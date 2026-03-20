import { motion } from 'framer-motion';
import { ShoppingCart, Check, AlertCircle, Eye, FileText, Heart, Share2, AlertTriangle } from 'lucide-react';
import type { Product } from '../data/types';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
  index: number;
  onViewDetail?: (product: Product) => void;
}

function getStockUrgency(product: Product): string | null {
  if (!product.inStock) return null;
  const hash = product.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  if (hash % 5 === 0) return 'Solo quedan 3!';
  if (hash % 7 === 0) return 'Ultimas unidades';
  return null;
}

export default function ProductCard({ product, index, onViewDetail }: ProductCardProps) {
  const { addItem, setIsOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);
  const urgency = getStockUrgency(product);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.inStock) {
      addItem(product);
      setIsOpen(true);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Mira este producto en Farmacia Dilania: ${product.name} - ${product.priceRange}`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
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

        <div className="product-card__actions">
          <button
            className={`product-card__action-btn ${wishlisted ? 'product-card__action-btn--active' : ''}`}
            onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
            aria-label="Favorito"
          >
            <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            className="product-card__action-btn"
            onClick={(e) => { e.stopPropagation(); onViewDetail?.(product); }}
            aria-label="Ver detalle"
          >
            <Eye size={16} />
          </button>
          <button
            className="product-card__action-btn"
            onClick={handleShare}
            aria-label="Compartir"
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>

      <div className="product-card__body">
        {urgency && (
          <span className="product-card__urgency">
            <AlertTriangle size={11} />
            {urgency}
          </span>
        )}
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
