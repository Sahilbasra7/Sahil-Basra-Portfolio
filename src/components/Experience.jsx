/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useResponsive } from '../hooks/useResponsive';

const experience = [
  {
    role: 'QA Automation Engineer',
    company: 'Visualizer.me',
    period: 'October 2023 — Present',
    location: 'Delhi, India',
    description:
      'Developed a robust end-to-end automated test suite using Playwright to validate complete user flows, including resume creation, profile setup, and shareable link generation. Performed comprehensive REST API testing with Postman, covering authentication, user data management, PDF exports, and OpenAI-powered content rewriting services. Validated secure integration with AWS-hosted backend systems and embedded the automated test suite into the AWS CI/CD pipeline to support continuous testing. Tested dynamic UI components such as AI-based resume introductions, career graphs, and live location maps, verified OpenAI API responses, and ensured cross-browser and mobile compatibility using BrowserStack.',
  },
  {
    role: 'QA Engineer',
    company: 'Cameleon Network Inc.',
    period: 'July 2022 — September 2023',
    location: 'Delhi, India',
    description:
      'Developed six well-structured test plans that significantly enhanced QA team collaboration and improved overall test coverage. Documented, tracked, and managed defects with 80% accuracy using bug-tracking tools, enabling effective root-cause analysis and faster resolution. Executed thorough manual testing across web and client platforms to validate UI behavior, core functionality, and end-to-end business workflows. Closely collaborated with Scrum Masters and product owners to triage and resolve high-impact issues, achieving a 20% reduction in system downtime. Prioritized defect resolution cycles and applied strong regression and sanity testing practices, reducing bug fix turnaround time by 30% and improving release stability by 40%.',
  },
  {
    role: 'Software Test Engineer',
    company: 'Septasoft Solutions Inc.',
    period: 'Dec 2019 — July 2022',
    location: 'Delhi, India',
    description:
      'Conducted comprehensive manual testing of marketing websites and internal dashboards, with a strong focus on UI/UX consistency, data integrity, and smooth navigation flows. Created and maintained detailed test cases in Jira integrated with TestRail, covering feature acceptance, field validations, and cross-browser compatibility. Worked closely with developers to clarify requirements and reported defects with clear reproduction steps, logs, and screenshots. During release cycles, executed smoke, sanity, and exploratory testing to ensure stability. Developed a limited set of Playwright automation scripts to validate repetitive workflows and performed responsive and mobile testing using BrowserStack. Used Lighthouse in Chrome DevTools to assess performance, accessibility, and SEO.',
  },
];

function Experience() {
  const { isMobile, isTablet } = useResponsive();
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
    role: {
      fontSize: isMobile ? '18px' : '20px',
      fontWeight: 600,
    },
    company: {
      fontSize: isMobile ? '13px' : '14px',
      opacity: 0.7,
      marginTop: '4px',
    },
    descriptionContainer: {
      marginTop: '12px',
      padding: isMobile ? '12px' : '16px',
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    desc: {
      fontSize: isMobile ? '13px' : '14px',
      lineHeight: 1.6,
      opacity: 0.75,
      margin: 0,
      flex: 1,
    },
    descCollapsed: {
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    expandButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
    },
    arrowButton: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      padding: '4px 8px',
      fontSize: '14px',
      opacity: 0.5,
      transition: 'opacity 0.2s ease, transform 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '8px',
      flexWrap: 'wrap',
      gap: '8px',
    },
    period: {
      fontSize: isMobile ? '11px' : '12px',
      opacity: 0.5,
    },
    location: {
      fontSize: isMobile ? '11px' : '12px',
      opacity: 0.5,
      fontStyle: 'italic',
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
            <h3 style={styles.role}>{item.role}</h3>
            <p style={styles.company}>{item.company}</p>

            <div style={styles.descriptionContainer}>
              <p style={{
                ...styles.desc,
                ...(expandedCards[index] ? {} : styles.descCollapsed)
              }}>
                {item.description}
              </p>
              <div style={styles.expandButtonContainer}>
                <button
                  onClick={() => toggleExpand(index)}
                  style={{
                    ...styles.arrowButton,
                    transform: expandedCards[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
                  aria-label={expandedCards[index] ? 'Collapse details' : 'Expand details'}
                >
                  ▼
                </button>
              </div>
            </div>

            <div style={styles.footer}>
              <span style={styles.period}>{item.period}</span>
              <span style={styles.location}>{item.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;