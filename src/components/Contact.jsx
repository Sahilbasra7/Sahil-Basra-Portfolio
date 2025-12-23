/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" style={styles.section}>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        Contact
      </motion.h2>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}                 // 👈 hover lift added
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 250 }}
        style={styles.card}
      >
        <p style={styles.subHeading}>Let’s work together</p>

        {/* Form */}
        <form style={styles.form}>
          <div style={styles.row}>
            <input style={styles.input} placeholder="Your Name" />
            <input style={styles.input} placeholder="your@email.com" />
          </div>

          <select style={styles.input}>
            <option>Select Purpose</option>
            <option>Automation Testing</option>
            <option>QA Consulting</option>
            <option>Freelance Project</option>
            <option>Full-time Opportunity</option>
          </select>

          <textarea
            style={{ ...styles.input, height: '140px' }}
            placeholder="Message"
          />

          <button style={styles.button}>Submit</button>
        </form>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 40px',
    maxWidth: '900px',
  },

  heading: {
    fontSize: '40px',          // SAME AS ABOUT / EXPERIENCE
    marginBottom: '28px',
  },

  // ✅ SAME CARD SYSTEM AS EXPERIENCE / ABOUT
  card: {
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
  },

  subHeading: {
    fontSize: '18px',
    opacity: 0.7,
    marginBottom: '24px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  row: {
    display: 'flex',
    gap: '20px',
  },

  input: {
    width: '100%',
    padding: '16px 18px',
    background: '#2a2a2a',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
  },

  button: {
    marginTop: '8px',
    padding: '16px',
    borderRadius: '12px',
    border: 'none',
    background: '#f07c4a',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default Contact;