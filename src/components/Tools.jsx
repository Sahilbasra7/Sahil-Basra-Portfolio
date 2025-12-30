/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';

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
  const { isMobile, isTablet } = useResponsive();

  const getStyles = () => ({
    section: {
      padding: isMobile ? '24px 20px' : '32px 40px',
      scrollMarginTop: isMobile ? '80px' : '120px',
    },
    heading: {
      fontSize: isMobile ? '42px' : isTablet ? '60px' : '76px',
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: '-1px',
      marginBottom: '20px',      textAlign: 'center',    },
    container: {
      maxWidth: '900px',
      padding: isMobile ? '20px' : '28px',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
    },
    toolsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isMobile ? '8px' : '10px',
      justifyContent: 'center',
    },
    tool: {
      padding: isMobile ? '8px 14px' : '10px 18px',
      borderRadius: '8px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      fontSize: isMobile ? '12px' : '13px',
      opacity: 0.8,
      transition: 'all 0.2s ease',
    },
  });

  const styles = getStyles();

  return (
    <section id="tools" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        TOOLS
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 250 }}
        style={styles.container}
      >
        <div style={styles.toolsWrapper}>
          {tools.map((tool, index) => (
            <span key={index} style={styles.tool}>
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Tools;