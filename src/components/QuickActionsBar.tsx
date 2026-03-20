import { motion } from 'framer-motion';
import { FileText, DollarSign, Tag, PhoneCall } from 'lucide-react';
import { openWhatsApp, prescriptionMessage, priceCheckMessage } from '../utils/whatsapp';

const actions = [
  {
    label: 'Enviar Receta',
    icon: <FileText size={18} strokeWidth={2} />,
    onClick: () => openWhatsApp(prescriptionMessage()),
  },
  {
    label: 'Consultar Precio',
    icon: <DollarSign size={18} strokeWidth={2} />,
    onClick: () => openWhatsApp(priceCheckMessage('un producto')),
  },
  {
    label: 'Ver Ofertas',
    icon: <Tag size={18} strokeWidth={2} />,
    href: '#ofertas',
  },
  {
    label: 'Llamar Ahora',
    icon: <PhoneCall size={18} strokeWidth={2} />,
    href: 'tel:8095212301',
  },
];

export default function QuickActionsBar() {
  return (
    <motion.div
      className="quick-actions"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="section-container">
        <div className="quick-actions__inner">
          {actions.map((action) =>
            action.href ? (
              <a key={action.label} href={action.href} className="quick-actions__pill">
                {action.icon}
                <span>{action.label}</span>
              </a>
            ) : (
              <button
                key={action.label}
                className="quick-actions__pill"
                onClick={action.onClick}
              >
                {action.icon}
                <span>{action.label}</span>
              </button>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
