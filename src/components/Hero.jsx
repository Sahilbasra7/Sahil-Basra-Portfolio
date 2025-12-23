/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import sahil from '../assets/sahil.jpg';

function Hero() {
  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>

        {/* LEFT: Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.content}
        >
          <h1 style={styles.title}>
            AUTOMATION <br />
            <span style={styles.muted}>ENGINEER</span>
          </h1>

          <p style={styles.subtitle}>
            Passionate QA Automation Engineer focused on building scalable
            automation frameworks and delivering high-quality software
            through reliable testing strategies.
          </p>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>+5</h3>
              <p style={styles.statLabel}>Years of Experience</p>
            </div>

            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>+6</h3>
              <p style={styles.statLabel}>Projects Completed</p>
            </div>

            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>+12</h3>
              <p style={styles.statLabel}>Worldwide Clients</p>
            </div>
          </div>
          <div style={styles.heroCards}>

            {/* Experience Card */}
            <motion.div
              style={styles.heroCard}
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
              whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.35)', y: -2 }}
            >
              <div>
                <h4 style={styles.cardValue}>+12</h4>
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

        {/* RIGHT: Vertical Profile Card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 250 }}
          style={styles.card}
        >
          <img src={sahil} alt="Sahil" style={styles.image} />

          <div style={styles.cardContent}>
            <h3 style={styles.name}>Sahil Basra</h3>
            <p style={styles.tagline}>
              QA Automation Engineer
            </p>

            <div style={styles.socials}>
              <span>🌐</span>
              <span>🐦</span>
              <span>📸</span>
              <span>▶️</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: '160px',      // ✅ clears navbar
    paddingBottom: '220px',   // ✅ separates from About
    paddingLeft: '40px',
    paddingRight: '40px',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '100px',
    flexWrap: 'wrap',
  },

  /* LEFT CONTENT */
  content: {
    maxWidth: '600px',
    flex: 1,
    minWidth: '300px',
  },
  title: {
    fontSize: '72px',
    fontWeight: 700,
    lineHeight: 1,
    marginBottom: '24px',
  },
  muted: {
    opacity: 0.3,
  },
  subtitle: {
    fontSize: '16px',
    opacity: 0.7,
    lineHeight: 1.6,
  },

  /* RIGHT PROFILE CARD */
  card: {
    width: '280px',
    background: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    color: '#000000',
    flexShrink: 0,
  },
  image: {
    width: '100%',
    aspectRatio: '4 / 5',
    objectFit: 'cover',
    display: 'block',
  },
  cardContent: {
    padding: '20px',
    textAlign: 'center',
  },
  name: {
    fontSize: '22px',
    fontWeight: 600,
    marginBottom: '6px',
  },
  tagline: {
    fontSize: '14px',
    opacity: 0.7,
    marginBottom: '16px',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    fontSize: '18px',
    cursor: 'pointer',
  },
  stats: {
    display: 'flex',
    gap: '48px',
    marginTop: '40px',
  },

  statItem: {
    display: 'flex',
    flexDirection: 'column',
  },

  statNumber: {
    fontSize: '36px',
    fontWeight: 700,
    letterSpacing: '-1px',
  },

  statLabel: {
    marginTop: '6px',
    fontSize: '12px',
    opacity: 0.6,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heroCards: {
    display: 'flex',
    gap: '24px',
    marginTop: '40px',
  },

  heroCard: {
    position: 'relative',
    width: '220px',
    height: '140px',
    padding: '20px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
    boxShadow: '0 0 0 rgba(0,0,0,0)',   // 👈 REQUIRED
  },

  cardValue: {
    fontSize: '28px',
    fontWeight: 700,
  },

  cardLabel: {
    marginTop: '6px',
    fontSize: '12px',
    opacity: 0.65,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

  arrowBtn: {
    background: 'none',
    border: 'none',
    fontSize: '22px',
    cursor: 'pointer',
    color: '#888',
    transition: 'color 0.2s ease, transform 0.2s ease',
  },
  statsRow: {
    display: 'flex',
    gap: '48px',
    marginTop: '32px',
    opacity: 0.8,
  },

  cardsRow: {
    display: 'flex',
    gap: '24px',
    marginTop: '32px', // 👈 IMPORTANT: space from stats
  },

  statCard: {
    flex: '0 0 260px',
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.04)', // ✅ ONLY here
    border: '1px solid rgba(255,255,255,0.08)',
    position: 'relative',
  },

  arrow: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    opacity: 0.6,
  },
};

export default Hero;