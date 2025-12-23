
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
            whileHover={{ y: -6 }}                         // SAME AS TOOLS
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
    padding: '40px 40px',
  },
  heading: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '16px',
    maxWidth: '800px',
  },
  card: {
    padding: '16px 20px',                               // SAME AS TOOLS
    borderRadius: '12px',                               // SAME AS TOOLS
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    fontSize: '14px',
    textAlign: 'center',
    opacity: 0.85,
  },
};

export default Skills;