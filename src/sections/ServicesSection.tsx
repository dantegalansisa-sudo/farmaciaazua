import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { Syringe, HeartPulse, Droplets, Wind, ShieldCheck, MessageCircle } from 'lucide-react';
import RevealText from '../components/RevealText';

const services: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <Syringe size={32} strokeWidth={1.5} />, title: 'Aplicación de Inyecciones', desc: 'Servicio de inyectología disponible. Trae tu receta médica.' },
  { icon: <HeartPulse size={32} strokeWidth={1.5} />, title: 'Toma de Presión', desc: 'Medición de presión arterial gratuita para nuestros clientes.' },
  { icon: <Droplets size={32} strokeWidth={1.5} />, title: 'Control de Glucosa', desc: 'Medición rápida de azúcar en sangre con glucómetro digital.' },
  { icon: <Wind size={32} strokeWidth={1.5} />, title: 'Nebulización', desc: 'Servicio de nebulización disponible. Consulta disponibilidad.' },
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'Seguros Médicos (ARS)', desc: 'Aceptamos ARS Renacer y otros seguros médicos.' },
  { icon: <MessageCircle size={32} strokeWidth={1.5} />, title: 'Pedidos por WhatsApp', desc: 'Pide tus medicamentos por WhatsApp y los tenemos listos.' },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="services-section">
      <div className="section-container">
        <span className="label-tag">Servicios</span>
        <RevealText tag="h2" className="section-title">
          Más Que Una Farmacia
        </RevealText>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              <span className="service-card__icon">{service.icon}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
