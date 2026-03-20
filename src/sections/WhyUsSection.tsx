import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { BadgeCheck, DollarSign, MapPin, Handshake, ShieldCheck, MessageCircle } from 'lucide-react';
import RevealText from '../components/RevealText';

const reasons: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <BadgeCheck size={24} strokeWidth={2} />, title: 'Medicamentos Originales', desc: 'Solo manejamos productos de laboratorios certificados. Calidad garantizada en cada medicamento.' },
  { icon: <DollarSign size={24} strokeWidth={2} />, title: 'Mejores Precios', desc: 'Precios competitivos y ofertas semanales para nuestros clientes frecuentes.' },
  { icon: <MapPin size={24} strokeWidth={2} />, title: 'Ubicación Céntrica', desc: 'En la Av. 27 de Febrero #34, en el corazón de Azua. Fácil acceso.' },
  { icon: <Handshake size={24} strokeWidth={2} />, title: 'Atención Personalizada', desc: 'Nuestro equipo te orienta para que consigas el medicamento correcto.' },
  { icon: <ShieldCheck size={24} strokeWidth={2} />, title: 'Aceptamos ARS', desc: 'Trabajamos con ARS Renacer para que uses tu seguro médico cómodamente.' },
  { icon: <MessageCircle size={24} strokeWidth={2} />, title: 'Pedidos Express', desc: 'Ordena por WhatsApp y ten tus medicamentos listos cuando llegues.' },
];

export default function WhyUsSection() {
  return (
    <section className="whyus-section">
      <div className="section-container">
        <span className="label-tag">Por Qué Elegirnos</span>
        <RevealText tag="h2" className="section-title">
          Tu Salud Es Nuestra Prioridad
        </RevealText>

        <div className="whyus-grid">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="reason-card"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              <span className="reason-card__icon">{reason.icon}</span>
              <h3 className="reason-card__title">{reason.title}</h3>
              <p className="reason-card__desc">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
