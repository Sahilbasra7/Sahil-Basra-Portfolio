/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';

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
  const { isMobile, isTablet } = useResponsive();

  const getStyles = () => ({
    section: {
      padding: isMobile ? '24px 20px' : '32px 40px',
      maxWidth: '900px',
      scrollMarginTop: isMobile ? '80px' : '120px',
    },
    heading: {
      fontSize: isMobile ? '42px' : isTablet ? '60px' : '76px',
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: '-1px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    card: {
      padding: isMobile ? '20px' : '24px',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      marginBottom: isMobile ? '16px' : '24px',
      transition: 'box-shadow 0.25s ease, transform 0.25s ease',
    },
    company: {
      fontSize: isMobile ? '18px' : '20px',
      fontWeight: 600,
    },
    role: {
      fontSize: isMobile ? '13px' : '14px',
      opacity: 0.7,
      marginTop: '4px',
    },
    desc: {
      marginTop: '12px',
      fontSize: isMobile ? '13px' : '14px',
      lineHeight: 1.6,
      opacity: 0.75,
      maxWidth: '560px',
    },
    period: {
      display: 'block',
      marginTop: '8px',
      fontSize: isMobile ? '11px' : '12px',
      opacity: 0.5,
    },
  });

  const styles = getStyles();

  return (
    <section id="experience" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        EXPERIENCE
      </motion.h2>

      <div>
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
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

export default Experience;