import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone, ShieldCheck, ArrowDown, Pill, Heart, Clock } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section className="hero" ref={sectionRef}>
      {/* Background gradient */}
      <div className="hero__bg" />

      {/* Decorative grid pattern */}
      <div className="hero__grid-pattern" />

      {/* Floating shapes */}
      <motion.div
        className="hero__shape hero__shape--1"
        animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero__shape hero__shape--2"
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero__shape hero__shape--3"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero__content section-container">
        {/* LEFT — Text */}
        <motion.div className="hero__left" style={{ y: contentY }}>
          <motion.div
            className="hero__badge"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="badge-dot" />
            #comprometidoscontusalud
          </motion.div>

          <div className="hero__title-wrap">
            {['Tu Farmacia', 'de Confianza', 'en Azua'].map((line, i) => (
              <div className="hero__title-line" key={i}>
                <motion.span
                  className="hero-title"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.p
            className="hero__sub"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Medicamentos originales, vitaminas, cosméticos y más.
            Atención personalizada y los mejores precios de Azua.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <MagneticButton
              className="btn-green btn-green--hero"
              href="https://wa.me/18093953671"
              target="_blank"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              Pedir por WhatsApp
            </MagneticButton>
            <MagneticButton className="btn-ghost-hero" href="#productos">
              Ver Productos
            </MagneticButton>
          </motion.div>

          {/* Info items */}
          <motion.div
            className="hero__info-row"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <a href="tel:8095212301" className="hero__info-chip">
              <Phone size={14} />
              809-521-2301
            </a>
            <a href="tel:8093953761" className="hero__info-chip">
              <Phone size={14} />
              809-395-3761
            </a>
            <div className="hero__info-chip hero__info-chip--green">
              <ShieldCheck size={14} />
              ARS Renacer
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Image with effects */}
        <motion.div className="hero__right" style={{ y: imgY }}>
          {/* Main image container with clip-path */}
          <motion.div
            className="hero__img-container"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ rotate: imgRotate }}
          >
            <div className="hero__img-inner">
              <img
                src="/images/portada9.jpg"
                alt="Farmacéutica atendiendo cliente en Farmacia Dilania"
                className="hero__img"
              />
              {/* Gradient overlay on image edges */}
              <div className="hero__img-overlay" />
            </div>

            {/* Border glow */}
            <div className="hero__img-glow" />
          </motion.div>

          {/* Floating badge cards */}
          <motion.div
            className="hero__card hero__card--1"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero__card-icon hero__card-icon--green">
                <Pill size={18} />
              </div>
              <span className="hero__card-text">100% Original</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__card hero__card--2"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="hero__card-icon hero__card-icon--red">
                <Heart size={18} />
              </div>
              <span className="hero__card-text">Atención 10/10</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__card hero__card--3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="hero__card-icon hero__card-icon--blue">
                <Clock size={18} />
              </div>
              <span className="hero__card-text">Servicio Rápido</span>
            </motion.div>
          </motion.div>

          {/* Decorative ring behind image */}
          <motion.div
            className="hero__ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#productos"
        className="hero__scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
