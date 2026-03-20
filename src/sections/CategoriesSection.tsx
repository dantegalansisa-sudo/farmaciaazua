import RevealText from '../components/RevealText';
import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    icon: '💊',
    title: 'Medicamentos',
    desc: 'Medicamentos de marca y genéricos. Recetados y de venta libre.',
    image: '/images/pharma-placeholder.jpg',
    color: '#1A7340',
  },
  {
    icon: '🌿',
    title: 'Vitaminas & Suplementos',
    desc: 'Vitaminas, minerales y suplementos para toda la familia.',
    image: '/images/pharma-placeholder.jpg',
    color: '#229654',
  },
  {
    icon: '🧴',
    title: 'Cosméticos & Cuidado',
    desc: 'Cremas, lociones, protectores y productos de belleza.',
    image: '/images/pharma-placeholder.jpg',
    color: '#C0392B',
  },
  {
    icon: '👶',
    title: 'Bebés & Maternidad',
    desc: 'Pañales, fórmulas, cremas y todo para tu bebé.',
    image: '/images/pharma-placeholder.jpg',
    color: '#2980B9',
  },
  {
    icon: '🩺',
    title: 'Equipos Médicos',
    desc: 'Tensiómetros, glucómetros, termómetros y más.',
    image: '/images/pharma-placeholder.jpg',
    color: '#8E44AD',
  },
  {
    icon: '🏥',
    title: 'Primeros Auxilios',
    desc: 'Vendas, antisépticos, gasas y todo para emergencias.',
    image: '/images/pharma-placeholder.jpg',
    color: '#E74C3C',
  },
];

export default function CategoriesSection() {
  return (
    <section id="categorias" className="categories-section">
      <div className="section-container">
        <span className="label-tag">Nuestras Categorías</span>
        <RevealText tag="h2" className="section-title">
          Todo Para Tu Salud
        </RevealText>

        <div className="categories-grid">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
