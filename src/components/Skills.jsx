/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';

const skills = [
  'Manual Testing',
  'Playwright',
  'JavaScript',
  'API Testing',
  'Test Planning',
  'Bug Reporting',
  'Sanity Testing',
  'Regression Testing',
  'Jira',
  'TestRail',
  'Agile/Scrum',
  'Postman',
  'OpenAI API',
  'HTML',
  'CSS',
  'GitHub',
  'AWS',
  'BrowserStack',
  'Lighthouse',
  'CI/CD',
  'Playwright Reporter',
  'MS Office',
];

function Skills() {
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
      marginBottom: '16px',
      textAlign: 'center',
    },
    container: {
      maxWidth: '900px',
      padding: isMobile ? '20px' : '28px',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
    },
    skillsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isMobile ? '6px 12px' : '8px 16px',
      justifyContent: 'center',
      fontSize: isMobile ? '13px' : '14px',
      lineHeight: 1.6,
      opacity: 0.78,
    },
    skill: {
      whiteSpace: 'nowrap',
    },
    separator: {
      opacity: 0.4,
    },
  });

  const styles = getStyles();

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
        SKILLS
      </motion.h2>

      {/* Skills Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 250 }}
        style={styles.container}
      >
        <div style={styles.skillsWrapper}>
          {skills.map((skill, index) => (
            <span key={index}>
              <span style={styles.skill}>{skill}</span>
              {index < skills.length - 1 && <span style={styles.separator}> · </span>}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;