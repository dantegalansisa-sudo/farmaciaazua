import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Instagram, ShieldCheck, Send } from 'lucide-react';
import RevealText from '../components/RevealText';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: 'Medicamento',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name}.%0ATel: ${form.phone}%0ATipo: ${form.type}%0A%0A${form.message}`;
    window.open(`https://wa.me/18093953671?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="section-container">
        <span className="label-tag">Contacto</span>
        <RevealText tag="h2" className="section-title">
          Estamos Para Ayudarte
        </RevealText>

        <div className="contact-grid">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info__item">
              <span className="contact-info__icon"><MapPin size={20} strokeWidth={2} /></span>
              <div>
                <div className="contact-info__label">Dirección</div>
                <div className="contact-info__value">
                  Av. 27 de Febrero No. 34, Centro de la Ciudad, Azua
                </div>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon"><Phone size={20} strokeWidth={2} /></span>
              <div>
                <div className="contact-info__label">Teléfonos</div>
                <div className="contact-info__value">
                  <a href="tel:8095212301">809-521-2301</a> · <a href="tel:8093953761">809-395-3761</a>
                </div>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon"><MessageCircle size={20} strokeWidth={2} /></span>
              <div>
                <div className="contact-info__label">WhatsApp</div>
                <div className="contact-info__value">
                  <a href="https://wa.me/18093953671" target="_blank" rel="noopener noreferrer">
                    Enviar mensaje por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon"><Instagram size={20} strokeWidth={2} /></span>
              <div>
                <div className="contact-info__label">Instagram</div>
                <div className="contact-info__value">
                  <a href="https://instagram.com/farmaciadilania" target="_blank" rel="noopener noreferrer">
                    @farmaciadilania
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon"><ShieldCheck size={20} strokeWidth={2} /></span>
              <div>
                <div className="contact-info__label">Seguros</div>
                <div className="contact-info__value">
                  Aceptamos ARS Renacer y otros seguros médicos
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-form__row">
              <input type="text" name="name" placeholder="Tu nombre" value={form.name} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Tu teléfono" value={form.phone} onChange={handleChange} required />
            </div>
            <select name="type" value={form.type} onChange={handleChange}>
              <option value="Medicamento">Medicamento</option>
              <option value="Vitaminas">Vitaminas</option>
              <option value="Cosméticos">Cosméticos</option>
              <option value="Equipos">Equipos Médicos</option>
              <option value="Otro">Otro</option>
            </select>
            <textarea name="message" placeholder="Describe el medicamento o tu consulta..." value={form.message} onChange={handleChange} required />
            <button type="submit" className="contact-form__submit">
              <Send size={18} strokeWidth={2.5} />
              Enviar por WhatsApp
            </button>
          </motion.form>
        </div>

        {/* Mapa */}
        <motion.div
          className="contact-map"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-map__header">
            <MapPin size={18} />
            <span>Av. 27 de Febrero No. 34, Centro de la Ciudad, Azua</span>
          </div>
          <div className="contact-map__frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5!2d-70.7289!3d18.4533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea562c2f4555555%3A0x1234567890abcdef!2sAv.%2027%20de%20Febrero%2C%20Azua%20De%20Compostela!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion Farmacia Dilania — Azua"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
