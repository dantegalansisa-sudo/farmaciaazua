import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pill, Sparkles, Paintbrush, Baby, Stethoscope, Cross, LayoutGrid } from 'lucide-react';
import type { ReactNode } from 'react';
import RevealText from '../components/RevealText';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import type { Product, CategorySlug } from '../data/types';

type FilterKey = 'todos' | CategorySlug;

const filters: { key: FilterKey; label: string; icon: ReactNode }[] = [
  { key: 'todos', label: 'Todos', icon: <LayoutGrid size={16} /> },
  { key: 'medicamentos', label: 'Medicamentos', icon: <Pill size={16} /> },
  { key: 'vitaminas', label: 'Vitaminas', icon: <Sparkles size={16} /> },
  { key: 'cosmeticos', label: 'Cosmeticos', icon: <Paintbrush size={16} /> },
  { key: 'bebes', label: 'Bebes', icon: <Baby size={16} /> },
  { key: 'equipos', label: 'Equipos', icon: <Stethoscope size={16} /> },
  { key: 'primeros-auxilios', label: 'Primeros Auxilios', icon: <Cross size={16} /> },
];

interface Props {
  onViewDetail?: (product: Product) => void;
}

export default function ProductCatalogSection({ onViewDetail }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('todos');

  const filtered = useMemo(
    () =>
      activeFilter === 'todos'
        ? products
        : products.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="productos" className="catalog-section">
      <div className="section-container">
        <span className="label-tag">Catalogo</span>
        <RevealText tag="h2" className="section-title">
          Nuestros Productos
        </RevealText>

        <div className="catalog-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`catalog-filter${activeFilter === f.key ? ' catalog-filter--active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        <motion.div className="catalog-count" layout>
          <span>{filtered.length} producto{filtered.length !== 1 ? 's' : ''}</span>
        </motion.div>

        <motion.div className="catalog-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onViewDetail={onViewDetail}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
