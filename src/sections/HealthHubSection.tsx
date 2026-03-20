import { motion } from 'framer-motion';
import { Clock, ArrowRight, MessageCircle } from 'lucide-react';
import RevealText from '../components/RevealText';
import { healthArticles } from '../data/healthArticles';
import { openWhatsApp, articleMessage } from '../utils/whatsapp';

export default function HealthHubSection() {
  const featured = healthArticles[0];
  const rest = healthArticles.slice(1);

  return (
    <section id="salud" className="health-section">
      <div className="section-container">
        <span className="label-tag">Salud & Bienestar</span>
        <RevealText tag="h2" className="section-title">
          Cuida Tu Salud
        </RevealText>

        <div className="health-bento">
          {/* Featured Article — takes left side */}
          <motion.div
            className="health-card health-card--featured"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            onClick={() => openWhatsApp(articleMessage(featured.title))}
          >
            <img src={featured.image} alt={featured.title} className="health-card__img" loading="lazy" />
            <div className="health-card__overlay" />
            <div className="health-card__content">
              <span className="health-card__cat">{featured.category}</span>
              <h3 className="health-card__title">{featured.title}</h3>
              <p className="health-card__excerpt">{featured.excerpt}</p>
              <div className="health-card__meta">
                <span className="health-card__time">
                  <Clock size={13} /> {featured.readTime}
                </span>
                <span className="health-card__cta">
                  Más Info <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Articles */}
          <div className="health-sidebar">
            {rest.map((article, i) => (
              <motion.div
                key={article.title}
                className="health-card health-card--small"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => openWhatsApp(articleMessage(article.title))}
              >
                <img src={article.image} alt={article.title} className="health-card__img-small" loading="lazy" />
                <div className="health-card__body">
                  <span className="health-card__cat-small">{article.category}</span>
                  <h4 className="health-card__title-small">{article.title}</h4>
                  <div className="health-card__time-small">
                    <Clock size={12} /> {article.readTime}
                  </div>
                </div>
                <MessageCircle size={16} className="health-card__wa" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
