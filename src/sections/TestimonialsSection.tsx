import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import RevealText from '../components/RevealText';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="testimonials-header">
          <div>
            <span className="label-tag">Testimonios</span>
            <RevealText tag="h2" className="section-title">
              Lo Que Dicen Nuestros Clientes
            </RevealText>
          </div>
          <div className="testimonials-nav">
            <button className="testimonials-nav__btn" onClick={() => scroll('left')} aria-label="Anterior">
              <ChevronLeft size={20} />
            </button>
            <button className="testimonials-nav__btn" onClick={() => scroll('right')} aria-label="Siguiente">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="testimonials-carousel" ref={scrollRef}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="testimonial-card__stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="var(--green)" stroke="var(--green)" />
                ))}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-card__name">
                      {t.name}
                      {t.verified && <BadgeCheck size={14} className="testimonial-card__verified" />}
                    </div>
                    <div className="testimonial-card__location">{t.location}</div>
                  </div>
                </div>
                <div className="testimonial-card__meta">
                  <span className="testimonial-card__category">{t.category}</span>
                  <span className="testimonial-card__date">{t.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
