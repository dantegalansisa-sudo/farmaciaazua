import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

export default function InsuranceSection() {
  return (
    <section className="insurance-section">
      <div className="section-container">
        <span className="label-tag">Seguros Médicos</span>
        <RevealText tag="h2" className="section-title">
          Aceptamos Tu Seguro
        </RevealText>

        <motion.div
          className="ars-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="ars-card__icon">
            <ShieldCheck size={48} strokeWidth={1.5} color="#1A7340" />
          </span>
          <h3 className="ars-card__title">ARS Renacer</h3>
          <p className="ars-card__text">
            Traslada tu receta y tu tarjeta de seguro.
            Te atendemos con tu ARS Renacer. Proceso rápido y sin complicaciones.
          </p>
          <MagneticButton
            href="https://wa.me/18093953671?text=Hola%2C%20quiero%20consultar%20sobre%20la%20cobertura%20de%20mi%20ARS"
            target="_blank"
            className="btn-green"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Consultar Cobertura
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
