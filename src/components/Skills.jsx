/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';

const skills = [
  'Automation Testing',
  'Manual Testing',
  'Test Strategy & Planning',
  'Regression Testing',
  'API Testing',
  'CI / CD',
];

function Skills() {
  return (
    <section id="skills" style={styles.section}>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}
            transition={{ type: 'spring', stiffness: 250 }}
            style={styles.card}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '32px 40px',
  },
  heading: {
    fontSize: '40px',
    marginBottom: '16px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '14px',
    maxWidth: '800px',
  },
  card: {
    padding: '16px 20px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.035)',
    border: '1px solid rgba(255,255,255,0.08)',
    fontSize: '14px',
    textAlign: 'center',
    opacity: 0.85,
    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
  },
};

export default Skills;