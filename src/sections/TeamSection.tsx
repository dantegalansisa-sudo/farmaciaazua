import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import RevealText from '../components/RevealText';
import { team } from '../data/team';

export default function TeamSection() {
  const featured = team.find((m) => m.featured);
  const others = team.filter((m) => !m.featured);

  return (
    <section id="equipo" className="team-section">
      <div className="section-container">
        <span className="label-tag">Nuestro Equipo</span>
        <RevealText tag="h2" className="section-title">
          Profesionales de Confianza
        </RevealText>

        {/* Featured Member — full width split */}
        {featured && (
          <motion.div
            className="team-featured"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="team-featured__avatar-wrap">
              <div className="team-featured__avatar">
                <span>{featured.initials}</span>
              </div>
              <div className="team-featured__ring" />
            </div>
            <div className="team-featured__info">
              <div className="team-featured__badge">
                <Award size={14} />
                Farmacéutica Principal
              </div>
              <h3 className="team-featured__name">{featured.name}</h3>
              <p className="team-featured__title">{featured.title}</p>
              <p className="team-featured__bio">{featured.bio}</p>
              <div className="team-featured__specialty">
                <GraduationCap size={16} />
                {featured.specialty}
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Members */}
        <div className="team-grid">
          {others.map((member, i) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="team-card__avatar">
                <span>{member.initials}</span>
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__title">{member.title}</p>
              <div className="team-card__specialty">
                <GraduationCap size={13} />
                {member.specialty}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
