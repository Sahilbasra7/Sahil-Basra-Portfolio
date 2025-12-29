/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';

const projects = [
  {
    title: 'Sauce Demo Automation',
    description:
      'End-to-end automation framework built using Playwright and JavaScript, covering login, cart, and checkout flows.',
    tech: 'Playwright · JavaScript',
    link: '#',
  },
  {
    title: 'Amazon Search Automation',
    description:
      'Automated product search and validation scenarios with robust selectors and safe execution practices.',
    tech: 'Playwright · JS · Assertions',
    link: '#',
  },
  {
    title: 'API Testing Framework',
    description:
      'REST API automation with validation, negative testing, and reusable utilities.',
    tech: 'JavaScript · API Testing',
    link: '#',
  },
];

function Projects() {
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
      marginBottom: '20px',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '16px' : '24px',
    },
    card: {
      padding: isMobile ? '20px' : '24px',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'box-shadow 0.25s ease, transform 0.25s ease',
    },
    title: {
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: 600,
      marginBottom: '8px',
    },
    description: {
      fontSize: isMobile ? '13px' : '14px',
      lineHeight: 1.6,
      opacity: 0.7,
      marginBottom: '12px',
    },
    tech: {
      fontSize: '12px',
      opacity: 0.55,
      marginBottom: '16px',
    },
    link: {
      fontSize: '14px',
      textDecoration: 'none',
      opacity: 0.75,
      transition: 'opacity 0.2s ease',
    },
  });

  const styles = getStyles();

  return (
    <section id="projects" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        PROJECTS
      </motion.h2>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.35)' }}
            transition={{ type: 'spring', stiffness: 220 }}
            style={styles.card}
          >
            <h3 style={styles.title}>{project.title}</h3>

            <p style={styles.description}>{project.description}</p>

            <p style={styles.tech}>{project.tech}</p>

            <a href={project.link} style={styles.link}>
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;