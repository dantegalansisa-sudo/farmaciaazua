import { Instagram, MessageCircle, Phone, MapPin, ShieldCheck, CreditCard, Banknote, ArrowRight, Clock, Heart } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function FooterSection() {
  const handleNewsletter = () => {
    openWhatsApp('Hola, quiero recibir ofertas y promociones de Farmacia Dilania.');
  };

  return (
    <footer className="footer">
      {/* Newsletter Bar */}
      <div className="footer-newsletter">
        <div className="section-container">
          <div className="footer-newsletter__inner">
            <div className="footer-newsletter__left">
              <span className="footer-newsletter__icon">
                <MessageCircle size={24} />
              </span>
              <div>
                <h3 className="footer-newsletter__title">Recibe Ofertas Exclusivas</h3>
                <p className="footer-newsletter__sub">Unete a nuestro canal de WhatsApp para promociones y descuentos</p>
              </div>
            </div>
            <button className="footer-newsletter__btn" onClick={handleNewsletter}>
              Suscribirme por WhatsApp
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="section-container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand-col">
              <div className="footer__logo-wrap">
                <img src="/images/logo/dilania-logo.png" alt="Farmacia Dilania" className="footer__logo" />
              </div>
              <p className="footer__brand-desc">
                Tu farmacia de confianza en Azua. Medicamentos originales, atencion personalizada y los mejores precios.
              </p>
              <div className="footer__brand-hash">#comprometidoscontusalud</div>
              <div className="footer__social">
                <a href="https://instagram.com/farmaciadilania" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                  <Instagram size={18} strokeWidth={2} />
                </a>
                <a href="https://wa.me/18093953671" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social-link">
                  <MessageCircle size={18} strokeWidth={2} />
                </a>
                <a href="tel:8095212301" aria-label="Telefono" className="footer__social-link">
                  <Phone size={18} strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Categories Column */}
            <div>
              <div className="footer__col-title">Categorias</div>
              <div className="footer__links-list">
                <a href="#productos" className="footer__link">Medicamentos</a>
                <a href="#productos" className="footer__link">Vitaminas & Suplementos</a>
                <a href="#productos" className="footer__link">Cosmeticos</a>
                <a href="#productos" className="footer__link">Bebes & Maternidad</a>
                <a href="#productos" className="footer__link">Equipos Medicos</a>
                <a href="#productos" className="footer__link">Primeros Auxilios</a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <div className="footer__col-title">Servicios</div>
              <div className="footer__links-list">
                <a href="#servicios" className="footer__link">Inyecciones</a>
                <a href="#servicios" className="footer__link">Toma de Presion</a>
                <a href="#servicios" className="footer__link">Control de Glucosa</a>
                <a href="#servicios" className="footer__link">Nebulizacion</a>
                <a href="#servicios" className="footer__link">Seguros Medicos</a>
                <a href="#servicios" className="footer__link">Pedidos WhatsApp</a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <div className="footer__col-title">Contacto</div>
              <div className="footer__links-list">
                <a href="#contacto" className="footer__contact-item">
                  <span className="footer__contact-icon"><MapPin size={16} /></span>
                  <span>Av. 27 de Febrero #34, Azua</span>
                </a>
                <a href="tel:8095212301" className="footer__contact-item">
                  <span className="footer__contact-icon"><Phone size={16} /></span>
                  <span>809-521-2301</span>
                </a>
                <a href="tel:8093953761" className="footer__contact-item">
                  <span className="footer__contact-icon"><Phone size={16} /></span>
                  <span>809-395-3761</span>
                </a>
                <a href="https://wa.me/18093953671" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                  <span className="footer__contact-icon"><MessageCircle size={16} /></span>
                  <span>WhatsApp</span>
                </a>
                <span className="footer__contact-item">
                  <span className="footer__contact-icon"><Clock size={16} /></span>
                  <span>Lun - Sab: 8am - 9pm</span>
                </span>
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="footer__trust">
            <div className="footer__trust-item">
              <ShieldCheck size={16} />
              <span>Farmacia autorizada — MSP, RD</span>
            </div>
            <div className="footer__trust-item">
              <ShieldCheck size={16} />
              <span>Aceptamos ARS Renacer</span>
            </div>
            <div className="footer__trust-payments">
              <span className="footer__payment-badge"><CreditCard size={14} /> Visa</span>
              <span className="footer__payment-badge"><CreditCard size={14} /> Mastercard</span>
              <span className="footer__payment-badge"><Banknote size={14} /> Efectivo</span>
            </div>
          </div>

          {/* Legal */}
          <div className="footer__legal">
            <p className="footer__disclaimer">
              Los productos mostrados en este sitio no pretenden diagnosticar, tratar, curar o prevenir ninguna enfermedad.
              Siempre consulte a su medico antes de iniciar cualquier tratamiento. Los precios son referenciales y
              estan sujetos a cambios sin previo aviso.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <span className="footer__copy">
              &copy; 2025 Farmacia Dilania. Azua, Republica Dominicana.
            </span>
            <span className="footer__credit">
              Hecho con <Heart size={12} className="footer__heart" /> por{' '}
              <a href="https://nexixtech.com" target="_blank" rel="noopener noreferrer">NEXIX Tech Studio</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
