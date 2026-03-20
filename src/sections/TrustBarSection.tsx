import { Pill, ShieldCheck, MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { type ReactNode } from 'react';

const trustItems: { icon: ReactNode; text: string }[] = [
  { icon: <Pill size={16} strokeWidth={2.5} />, text: 'Medicamentos Originales' },
  { icon: <ShieldCheck size={16} strokeWidth={2.5} />, text: 'Aceptamos Seguros ARS' },
  { icon: <MapPin size={16} strokeWidth={2.5} />, text: 'Av. 27 de Febrero #34, Azua' },
  { icon: <Phone size={16} strokeWidth={2.5} />, text: '809-521-2301' },
  { icon: <MessageCircle size={16} strokeWidth={2.5} />, text: 'Pedidos por WhatsApp' },
  { icon: <Clock size={16} strokeWidth={2.5} />, text: 'Consultar Horario' },
];

export default function TrustBarSection() {
  const items = [...trustItems, ...trustItems];

  return (
    <section className="trust-bar">
      <div className="trust-bar__track">
        {items.map((item, i) => (
          <div key={i} className="trust-bar__item">
            <span className="trust-bar__icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
