/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';

const tools = [
  'Playwright',
  'JavaScript',
  'Cypress',
  'Node.js',
  'Git & GitHub',
  'Postman',
  'REST APIs',
  'CI / CD',
  'VS Code',
];

function Tools() {
  return (
    <section id="tools" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        Tools
      </motion.h2>

      <div style={styles.grid}>
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(0,0,0,0.35)' }}
            transition={{ type: 'spring', stiffness: 220 }}
            style={styles.card}
          >
            {tool}
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
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '16px',
    maxWidth: '800px',
    marginTop: '12px',
  },
  card: {
    padding: '16px 20px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    fontSize: '14px',
    textAlign: 'center',
    opacity: 0.8,
    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
  },
};

export default Tools;