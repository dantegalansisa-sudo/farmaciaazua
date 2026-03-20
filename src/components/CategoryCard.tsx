import { motion } from 'framer-motion';

interface CategoryCardProps {
  icon: string;
  title: string;
  desc: string;
  image: string;
  color: string;
  index: number;
}

export default function CategoryCard({ icon, title, desc, image, color, index }: CategoryCardProps) {
  return (
    <motion.div
      className="category-card"
      style={{ '--cat-color': color } as React.CSSProperties}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <img src={image} alt={title} className="category-card__img" loading="lazy" />
      <div className="category-card__body">
        <span className="category-card__icon">{icon}</span>
        <h3 className="category-card__title">{title}</h3>
        <p className="category-card__desc">{desc}</p>
      </div>
    </motion.div>
  );
}
