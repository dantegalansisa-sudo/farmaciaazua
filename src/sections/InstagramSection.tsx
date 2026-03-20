import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import RevealText from '../components/RevealText';

const posts = [
  { id: 1, image: '/images/pharma-placeholder.jpg', caption: 'Nuevos productos disponibles' },
  { id: 2, image: '/images/pharma-placeholder.jpg', caption: 'Ofertas de la semana' },
  { id: 3, image: '/images/pharma-placeholder.jpg', caption: 'Cuidado personal' },
  { id: 4, image: '/images/pharma-placeholder.jpg', caption: 'Vitaminas y suplementos' },
  { id: 5, image: '/images/pharma-placeholder.jpg', caption: 'Tu salud es primero' },
  { id: 6, image: '/images/pharma-placeholder.jpg', caption: 'Farmacia Dilania' },
];

export default function InstagramSection() {
  return (
    <section className="instagram-section">
      <div className="section-container">
        <div className="instagram-section__header">
          <div>
            <span className="label-tag">
              <Instagram size={14} />
              Siguenos
            </span>
            <RevealText tag="h2" className="section-title">
              @farmaciadilania
            </RevealText>
          </div>
          <a
            href="https://instagram.com/farmaciadilania"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-section__follow-btn"
          >
            <Instagram size={16} />
            Seguir en Instagram
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="instagram-section__grid">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/farmaciadilania"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-post"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={post.image} alt={post.caption} className="ig-post__img" loading="lazy" />
              <div className="ig-post__overlay">
                <Instagram size={24} />
                <span className="ig-post__caption">{post.caption}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="instagram-section__stats">
          <span className="instagram-section__stat">
            <strong>1,440+</strong> seguidores
          </span>
          <span className="instagram-section__stat-sep" />
          <span className="instagram-section__stat">
            <strong>376+</strong> publicaciones
          </span>
        </div>
      </div>
    </section>
  );
}
