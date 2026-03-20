import { motion } from 'framer-motion';
import { Upload, MessageCircle, ArrowRight } from 'lucide-react';
import RevealText from '../components/RevealText';
import SearchBar from '../components/SearchBar';
import { products } from '../data/products';
import { openWhatsApp, prescriptionMessage, orderProductMessage } from '../utils/whatsapp';

const popularProducts = products.filter((p) => p.popular).slice(0, 6);

export default function QuickOrderSection() {
  return (
    <section className="quick-order">
      <div className="section-container">
        <span className="label-tag">Pedido Rápido</span>
        <RevealText tag="h2" className="section-title">
          Pide Sin Complicaciones
        </RevealText>

        <div className="quick-order__grid">
          {/* Left — Prescription Upload + Search */}
          <motion.div
            className="quick-order__left"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="quick-order__upload" onClick={() => openWhatsApp(prescriptionMessage())}>
              <div className="quick-order__upload-icon">
                <Upload size={32} strokeWidth={1.5} />
              </div>
              <h3 className="quick-order__upload-title">Envía Tu Receta</h3>
              <p className="quick-order__upload-desc">
                Toma una foto de tu receta médica y envíala por WhatsApp.
                Te confirmamos disponibilidad y precio al instante.
              </p>
              <span className="quick-order__upload-cta">
                <MessageCircle size={16} />
                Enviar Receta por WhatsApp
                <ArrowRight size={14} />
              </span>
            </div>

            <div className="quick-order__search-wrap">
              <SearchBar expanded />
            </div>
          </motion.div>

          {/* Right — Quick Picks */}
          <motion.div
            className="quick-order__right"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="quick-order__picks-title">Productos Populares</h3>
            <div className="quick-order__picks">
              {popularProducts.map((product) => (
                <button
                  key={product.id}
                  className="quick-pick"
                  onClick={() => openWhatsApp(orderProductMessage(product.name))}
                >
                  <div className="quick-pick__info">
                    <span className="quick-pick__name">{product.name}</span>
                    <span className="quick-pick__price">{product.priceRange}</span>
                  </div>
                  <span className="quick-pick__cta">
                    <MessageCircle size={13} />
                    Pedir
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
