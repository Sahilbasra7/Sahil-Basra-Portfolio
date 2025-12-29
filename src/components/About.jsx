/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';

function About() {
  const { isMobile, isTablet } = useResponsive();

  const getStyles = () => ({
    section: {
      padding: isMobile ? '40px 20px' : '60px 40px',
      maxWidth: '900px',
      scrollMarginTop: isMobile ? '80px' : '120px',
    },
    heading: {
      fontSize: isMobile ? '42px' : isTablet ? '60px' : '76px',
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: '-1px',
      marginBottom: '22px',
      textAlign: 'center',
    },
    card: {
      padding: isMobile ? '20px' : '28px',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      marginBottom: '24px',
      maxWidth: '900px',
    },
    description: {
      fontSize: isMobile ? '14px' : '15px',
      lineHeight: 1.7,
      opacity: 0.78,
      marginBottom: '14px',
    },
    divider: {
      height: '1px',
      background: 'rgba(255,255,255,0.08)',
      margin: '18px 0',
    },
    meta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      fontSize: isMobile ? '10px' : '11px',
      opacity: 0.55,
    },
  });

  const styles = getStyles();

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
        ABOUT
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
        <div style={styles.divider} />

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

export default About;