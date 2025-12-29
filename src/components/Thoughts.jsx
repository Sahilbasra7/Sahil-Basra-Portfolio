/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useResponsive } from '../hooks/useResponsive';

const thoughts = [
  {
    title: 'Automation is a mindset',
    preview:
      'Good automation is not about writing more tests, but writing the right tests.',
    full:
      'Automation is not about increasing test count. It is about building confidence, reducing risk, and enabling teams to ship faster with quality.',
  },
  {
    title: 'Flaky tests are worse than no tests',
    preview:
      'A flaky test suite destroys trust faster than missing coverage.',
    full:
      'Flaky tests break confidence in automation. Teams begin ignoring failures, which defeats the purpose of testing entirely.',
  },
  {
    title: 'Testing is a team responsibility',
    preview:
      'Quality is not owned by QA alone.',
    full:
      'Quality emerges when developers, testers, and product teams collaborate from day one.',
  },
  {
    title: 'APIs deserve as much attention as UI',
    preview:
      'API testing provides faster and more stable feedback.',
    full:
      'Strong API tests reduce UI dependency, catch bugs earlier, and improve delivery speed.',
  },
];

function Thoughts() {
  const [openIndex, setOpenIndex] = useState(null);
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
    mainCard: {
      padding: isMobile ? '16px' : '24px',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      display: 'grid',
      gap: isMobile ? '12px' : '20px',
    },
    thoughtCard: {
      position: 'relative',
      padding: isMobile ? '16px 16px 16px 48px' : '20px 20px 20px 56px',
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      textDecoration: 'none',
      color: '#fff',
      cursor: 'pointer',
      transition: 'box-shadow 0.25s ease, transform 0.25s ease',
    },
    badge: {
      position: 'absolute',
      top: isMobile ? '16px' : '20px',
      left: isMobile ? '16px' : '20px',
      width: isMobile ? '20px' : '24px',
      height: isMobile ? '20px' : '24px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.12)',
      fontSize: isMobile ? '11px' : '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
    },
    chevron: {
      position: 'absolute',
      top: isMobile ? '14px' : '18px',
      right: isMobile ? '14px' : '18px',
      background: 'none',
      border: 'none',
      color: '#999',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 0,
      transition: 'transform 0.25s ease, color 0.25s ease',
    },
    cardTitle: {
      fontSize: isMobile ? '15px' : '16px',
      fontWeight: 600,
      marginBottom: '8px',
    },
    cardText: {
      fontSize: isMobile ? '13px' : '14px',
      opacity: 0.75,
      lineHeight: 1.6,
    },
    readMore: {
      display: 'inline-block',
      marginTop: '12px',
      fontSize: isMobile ? '12px' : '13px',
      color: '#4da3ff',
      opacity: 0.9,
      transition: 'opacity 0.2s ease',
    },
    dropdown: {
      marginTop: '16px',
      fontSize: isMobile ? '13px' : '14px',
      lineHeight: 1.6,
      opacity: 0.85,
    },
    previewText: {
      fontSize: isMobile ? '13px' : '14px',
      lineHeight: 1.6,
      opacity: 0.7,
      marginBottom: '8px',
    },
  });

  const styles = getStyles();

  return (
    <section id="thoughts" style={styles.section}>
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        THOUGHTS
      </motion.h2>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.mainCard}
      >
        {thoughts.map((item, index) => (
          <motion.div
            key={index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(0,0,0,0.35)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 250,
              delay: index * 0.08,
            }}
            style={styles.thoughtCard}
          >
            {/* Number Badge */}
            <motion.div
              style={styles.badge}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {index + 1}
            </motion.div>

            <motion.button
              onClick={(e) => {
                e.stopPropagation();   // 👈 IMPORTANT
                setOpenIndex(openIndex === index ? null : index);
              }}
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              style={styles.chevron}
              aria-label="Toggle thought"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
            <h3 style={styles.cardTitle}>{item.title}</h3>

            <p style={styles.previewText}>{item.preview}</p>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                style={styles.dropdown}
              >
                <p>{item.full}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Thoughts;  