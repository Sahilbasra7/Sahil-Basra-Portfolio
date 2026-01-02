/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useResponsive } from '../hooks/useResponsive';

function Hero() {
  const { isMobile, isTablet } = useResponsive();

  const getStyles = () => ({
    section: {
      paddingTop: isMobile ? '40px' : '160px',
      paddingBottom: isMobile ? '40px' : isTablet ? '60px' : '80px',
      paddingLeft: isMobile ? '20px' : '40px',
      paddingRight: isMobile ? '20px' : '40px',
      scrollMarginTop: isMobile ? '80px' : '100px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: isMobile ? '32px' : '72px',
      flexWrap: 'wrap',
    },
    content: {
      maxWidth: isMobile ? '100%' : '600px',
      flex: 1,
      minWidth: isMobile ? '100%' : '300px',
    },
    title: {
      fontSize: isMobile ? '42px' : isTablet ? '60px' : '76px',
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: '-1px',
      marginBottom: '20px',
    },
    muted: {
      opacity: 0.22,
      fontWeight: 700,
    },
    subtitle: {
      fontSize: isMobile ? '16px' : '18px',
      opacity: 0.7,
      lineHeight: 1.75,
      maxWidth: isMobile ? '100%' : '540px',
    },
    stats: {
      display: 'flex',
      gap: isMobile ? '24px' : '48px',
      marginTop: isMobile ? '24px' : '32px',
      flexWrap: 'wrap',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
    },
    statNumber: {
      fontSize: isMobile ? '28px' : '38px',
      fontWeight: 800,
      letterSpacing: '-1.2px',
    },
    statLabel: {
      marginTop: '6px',
      fontSize: isMobile ? '10px' : '11px',
      opacity: 0.55,
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
    },
    heroCards: {
      display: 'flex',
      gap: isMobile ? '12px' : '20px',
      marginTop: '28px',
      flexWrap: 'wrap',
    },
    heroCard: {
      position: 'relative',
      width: isMobile ? 'calc(50% - 6px)' : '220px',
      height: isMobile ? '120px' : '140px',
      padding: isMobile ? '16px' : '20px',
      borderRadius: '16px',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
      border: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      boxShadow: '0 0 0 rgba(0,0,0,0)',
    },
    cardValue: {
      fontSize: isMobile ? '24px' : '28px',
      fontWeight: 700,
    },
    cardLabel: {
      marginTop: '6px',
      fontSize: isMobile ? '10px' : '12px',
      opacity: 0.65,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    arrowBtn: {
      background: 'none',
      border: 'none',
      fontSize: isMobile ? '18px' : '22px',
      cursor: 'pointer',
      color: '#9aa3af',
      transition: 'color 0.2s ease, transform 0.2s ease',
    },
    divider: {
      height: '1px',
      width: '100%',
      maxWidth: '520px',
      background: 'rgba(255,255,255,0.08)',
      marginTop: '28px',
    },
  });

  const styles = getStyles();

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>

        {/* LEFT: Hero Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          style={styles.content}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            style={styles.title}
          >
            AUTOMATION <br />
            <span style={styles.muted}>ENGINEER</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            style={styles.subtitle}
          >
            Passionate QA Automation Engineer focused on building scalable
            automation frameworks and delivering high-quality software
            through reliable testing strategies.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            style={styles.stats}
          >
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>+5</h3>
              <p style={styles.statLabel}>Years of Experience</p>
            </div>

            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>+4</h3>
              <p style={styles.statLabel}>Projects Completed</p>
            </div>

            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>+12</h3>
              <p style={styles.statLabel}>Worldwide Clients</p>
            </div>
          </motion.div>
          <div style={styles.divider} />
          <div style={styles.heroCards}>

            {/* Experience Card */}
            <motion.div
              style={styles.heroCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.35)', y: -2 }}
            >
              <div>
                <h4 style={styles.cardValue}>+5</h4>
                <p style={styles.cardLabel}>Years of Experience</p>
              </div>

              <button
                style={styles.arrowBtn}
                onClick={() =>
                  document.getElementById('experience')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                →
              </button>
            </motion.div>

            {/* Projects Card */}
            <motion.div
              style={styles.heroCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.35)', y: -2 }}
            >
              <div>
                <h4 style={styles.cardValue}>+4</h4>
                <p style={styles.cardLabel}>Projects Completed</p>
              </div>

              <button
                style={styles.arrowBtn}
                onClick={() =>
                  document.getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                →
              </button>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;