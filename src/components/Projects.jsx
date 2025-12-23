/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';

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
  return (
    <section id="projects" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        Projects
      </motion.h2>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 250 }}
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

const styles = {
  section: {
    padding: '40px 40px',
  },
  heading: {
    fontSize: '40px',
    marginBottom: '28px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  description: {
    fontSize: '14px',
    lineHeight: 1.6,
    opacity: 0.75,
    marginBottom: '12px',
  },
  tech: {
    fontSize: '12px',
    opacity: 0.5,
    marginBottom: '16px',
  },
  link: {
    fontSize: '14px',
    textDecoration: 'none',
    opacity: 0.8,
  },
};

export default Projects;