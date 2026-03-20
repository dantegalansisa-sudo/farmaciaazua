import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import RevealText from '../components/RevealText';
import { faqs } from '../data/faqs';

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`accordion${open ? ' accordion--open' : ''}`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button className="accordion__trigger" onClick={() => setOpen(!open)}>
        <span className="accordion__question">{question}</span>
        <motion.span
          className="accordion__icon"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="accordion__content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="accordion__answer">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        <div className="faq-inner">
          <span className="label-tag">Preguntas Frecuentes</span>
          <RevealText tag="h2" className="section-title">
            ¿Tienes Dudas?
          </RevealText>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>

          <motion.div
            className="faq-cta"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>¿No encuentras tu respuesta?</p>
            <a
              href="https://wa.me/18093953671"
              target="_blank"
              rel="noopener noreferrer"
              className="faq-cta__btn"
            >
              <MessageCircle size={16} />
              Pregúntanos por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
