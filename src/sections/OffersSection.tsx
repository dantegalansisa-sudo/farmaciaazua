import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { Pill, Sun, Baby, Zap, MessageCircle } from 'lucide-react';
import RevealText from '../components/RevealText';
import CountdownTimer from '../components/CountdownTimer';
import { openWhatsApp, offerMessage } from '../utils/whatsapp';

interface OfferItem {
  product: string;
  discount: string;
  detail: string;
  icon: ReactNode;
  featured?: boolean;
}

const featuredExpiry = new Date(Date.now() + 5 * 86400000).toISOString();

const offers: OfferItem[] = [
  { product: 'Vitamina C 1000mg', discount: '20% Off', detail: 'Frasco x 60 cápsulas — Refuerza tu sistema inmunológico', icon: <Pill size={36} strokeWidth={1.2} />, featured: true },
  { product: 'Protector Solar SPF 50', discount: '15% Off', detail: 'Varios tamaños disponibles', icon: <Sun size={36} strokeWidth={1.2} /> },
  { product: 'Pañales Huggies', discount: '10% Off', detail: 'Tallas S, M, L — Pack familiar', icon: <Baby size={36} strokeWidth={1.2} /> },
];

export default function OffersSection() {
  const featured = offers.find((o) => o.featured);
  const rest = offers.filter((o) => !o.featured);

  return (
    <section id="ofertas" className="offers-section">
      <div className="section-container">
        <span className="label-tag" style={{ color: '#2ECC71' }}>Ofertas de la Semana</span>
        <RevealText tag="h2" className="section-title" style={{ color: 'white' }}>
          Promociones Especiales
        </RevealText>

        {featured && (
          <motion.div
            className="offer-featured"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="offer-featured__left">
              <span className="offer-featured__badge">
                <Zap size={14} /> Oferta del Día
              </span>
              <span className="offer-featured__icon">{featured.icon}</span>
              <h3 className="offer-featured__title">{featured.product}</h3>
              <p className="offer-featured__detail">{featured.detail}</p>
              <button
                className="offer-featured__cta"
                onClick={() => openWhatsApp(offerMessage(featured.product))}
              >
                <MessageCircle size={16} />
                Aprovechar Oferta
              </button>
            </div>
            <div className="offer-featured__right">
              <span className="offer-featured__discount">{featured.discount}</span>
              <CountdownTimer targetDate={featuredExpiry} />
              <span className="offer-featured__expires">Tiempo restante</span>
            </div>
          </motion.div>
        )}

        <div className="offers-grid offers-grid--2col">
          {rest.map((offer, i) => (
            <motion.div
              key={offer.product}
              className="offer-card"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="offer-card__img-wrap">
                <span className="offer-card__emoji">{offer.icon}</span>
                <span className="offer-card__discount">{offer.discount}</span>
              </div>
              <div className="offer-card__body">
                <h3 className="offer-card__title">{offer.product}</h3>
                <p className="offer-card__detail">{offer.detail}</p>
                <button
                  className="offer-card__cta"
                  onClick={() => openWhatsApp(offerMessage(offer.product))}
                >
                  <MessageCircle size={14} strokeWidth={2.5} />
                  Consultar por WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="offers-note">Ofertas sujetas a disponibilidad</p>
      </div>
    </section>
  );
}
