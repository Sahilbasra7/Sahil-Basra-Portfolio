/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" style={styles.section}>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        About
      </motion.h2>

      {/* About Card – SAME SIZE AS PROJECT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}               // 👈 SAME AS PROJECT CARD
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 250 }}
        style={styles.card}
      >
        <p style={styles.description}>
          I am a QA Automation Engineer with hands-on experience in designing
          scalable automation frameworks and ensuring high-quality software
          delivery through reliable testing strategies.
        </p>

        <p style={styles.description}>
          I specialize in Playwright and JavaScript, with strong exposure to
          UI, API, and integration testing across modern web applications.
        </p>

        <div style={styles.meta}>
          <span>3+ Years Experience</span>
          <span>Playwright & Cypress</span>
          <span>JavaScript</span>
          <span>UI & API Testing</span>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: '30px 40px',
    maxWidth: '900px', // if present
    scrollMarginTop: '120px',
  },
  heading: {
    fontSize: '40px',               // SAME AS PROJECTS
    marginBottom: '22px',           // SAME AS PROJECTS
  },
  card: {
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    marginBottom: '24px',
    maxWidth: '900px',
  },
  description: {
    fontSize: '14px',
    lineHeight: 1.6,
    opacity: 0.75,
    marginBottom: '16px',
  },
  meta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    fontSize: '12px',
    opacity: 0.6,
  },
};

export default About;