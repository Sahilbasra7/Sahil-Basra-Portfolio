/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';

function BlogLayout({ title, children }) {
  return (
    <section style={styles.section}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.title}
      >
        {title}
      </motion.h1>

      <div style={styles.content}>{children}</div>
    </section>
  );
}

const styles = {
  section: {
    padding: '140px 40px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '48px',
    marginBottom: '32px',
  },
  content: {
    fontSize: '16px',
    lineHeight: 1.8,
    opacity: 0.8,
  },
};

export default BlogLayout;