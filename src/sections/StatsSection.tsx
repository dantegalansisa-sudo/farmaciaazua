import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { Instagram, Camera, BadgeCheck, Phone } from 'lucide-react';
import RevealText from '../components/RevealText';
import AnimatedCounter from '../components/AnimatedCounter';

const stats: { number: number; suffix: string; label: string; icon: ReactNode }[] = [
  { number: 1440, suffix: '+', label: 'Seguidores Instagram', icon: <Instagram size={28} strokeWidth={1.5} /> },
  { number: 376, suffix: '+', label: 'Publicaciones', icon: <Camera size={28} strokeWidth={1.5} /> },
  { number: 100, suffix: '%', label: 'Medicamentos Originales', icon: <BadgeCheck size={28} strokeWidth={1.5} /> },
  { number: 2, suffix: '', label: 'Líneas Telefónicas', icon: <Phone size={28} strokeWidth={1.5} /> },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="section-container" style={{ textAlign: 'center' }}>
        <span className="label-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Números Que Hablan
        </span>
        <RevealText tag="h2" className="section-title" style={{ color: 'white' }}>
          Nuestra Comunidad
        </RevealText>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="stat-item__icon">{stat.icon}</span>
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <p className="stat-item__label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
