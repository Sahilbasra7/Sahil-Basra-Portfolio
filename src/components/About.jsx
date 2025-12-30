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
          Results-driven Software QA Engineer with 5+ years of hands-on experience in manual and
          automation testing, specializing in UI, API, and regression testing. Highly proficient in
          building scalable end-to-end automation frameworks using JavaScript and Playwright. Known
          for creating effective test strategies, accurate defect tracking, and measurable quality
          improvements. Excels in Agile/Scrum environments, collaborating cross-functionally to
          deliver reliable, high-performance applications. Proven ability to increase test coverage,
          reduce defect resolution time, and maintain exceptional quality standards across multiple
          platforms.
        </p>
        <div style={styles.divider} />

        <div style={styles.meta}>
          <span>5+ Years Experience</span>
          <span>Manual & Automation Testing</span>
          <span>Playwright & JavaScript</span>
          <span>API & UI Testing</span>
          <span>Agile/Scrum</span>
        </div>
      </motion.div>
    </section>
  );
}

export default About;