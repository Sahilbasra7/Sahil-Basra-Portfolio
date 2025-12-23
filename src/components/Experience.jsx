/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';

const experience = [
  {
    company: 'Company Name',
    role: 'Senior QA Automation Engineer',
    period: '2022 — Present',
    description:
      'Designed and maintained Playwright automation frameworks, improved test reliability and CI stability.',
  },
  {
    company: 'Previous Company',
    role: 'QA Engineer',
    period: '2019 — 2022',
    description:
      'Executed manual and automated tests, collaborated closely with developers to improve product quality.',
  },
];

function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        Experience
      </motion.h2>

      <div>
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}        // 👈 add hover
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 250 }}
            style={styles.card}
          >
            <h3 style={styles.company}>{item.company}</h3>
            <p style={styles.role}>{item.role}</p>
            <p style={styles.desc}>{item.description}</p>
            <span style={styles.period}>{item.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 40px',
    maxWidth: '900px',
  },
  heading: {
    fontSize: '40px',
    marginBottom: '28px',
  },
  card: {
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    marginBottom: '24px',
  },
  company: {
    fontSize: '20px',
    fontWeight: 600,
  },
  role: {
    fontSize: '14px',
    opacity: 0.7,
    marginTop: '4px',
  },
  desc: {
    marginTop: '12px',
    fontSize: '14px',
    lineHeight: 1.6,
    opacity: 0.75,
    maxWidth: '600px',
  },
  period: {
    display: 'block',
    marginTop: '8px',
    fontSize: '12px',
    opacity: 0.5,
  },
};

export default Experience;