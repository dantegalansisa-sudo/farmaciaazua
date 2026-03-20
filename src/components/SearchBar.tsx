import { useState, useRef, useMemo } from 'react';
import { Search, X, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from '../data/products';
import { useDebounce } from '../hooks/useDebounce';
import { useClickOutside } from '../hooks/useClickOutside';
import { openWhatsApp, orderProductMessage } from '../utils/whatsapp';

interface SearchBarProps {
  onClose?: () => void;
  expanded?: boolean;
}

export default function SearchBar({ onClose, expanded }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 200);
  const wrapRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapRef, () => setOpen(false));

  const results = useMemo(() => {
    if (!debouncedQuery || debouncedQuery.length < 2) return [];
    const q = debouncedQuery.toLowerCase();
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 6);
  }, [debouncedQuery]);

  const handleOrder = (productName: string) => {
    openWhatsApp(orderProductMessage(productName));
    setQuery('');
    setOpen(false);
  };

  return (
    <div className={`search-bar${expanded ? ' search-bar--expanded' : ''}`} ref={wrapRef}>
      <div className="search-bar__input-wrap">
        <Search size={16} strokeWidth={2.5} className="search-bar__icon" />
        <input
          type="text"
          placeholder="Buscar medicamentos, vitaminas..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="search-bar__input"
        />
        {query && (
          <button
            className="search-bar__clear"
            onClick={() => {
              setQuery('');
              setOpen(false);
              onClose?.();
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.div
            className="search-results"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {results.map((product) => (
              <button
                key={product.id}
                className="search-results__item"
                onClick={() => handleOrder(product.name)}
              >
                <div className="search-results__info">
                  <span className="search-results__name">{product.name}</span>
                  <span className="search-results__meta">
                    {product.priceRange}
                    {!product.inStock && (
                      <span className="search-results__oos">Agotado</span>
                    )}
                  </span>
                </div>
                <span className="search-results__cta">
                  <MessageCircle size={13} />
                  Pedir
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
