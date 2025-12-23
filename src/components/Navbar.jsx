/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
const handleScroll = () => {
  let current = 'home';

  sections.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (!section) return;

    const top = section.offsetTop - 140;
    if (window.scrollY >= top) {
      current = id;
    }
  });

  // ✅ FIX FOR LAST SECTION (CONTACT)
  const scrollBottom =
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 50;

  if (scrollBottom) {
    current = 'contact';
  }

  setActive(current);
};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.wrapper}>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 200 }}
        style={styles.nav}
      >
        {sections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={{
              ...styles.link,
              opacity: active === item.id ? 1 : 0.6,
            }}
          >
            {item.label}
          </a>
        ))}
      </motion.nav>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'fixed',
    top: '24px',
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000,
  },
  nav: {
    display: 'flex',
    gap: '28px',
    padding: '14px 28px',
    borderRadius: '999px',
    background: 'rgba(20,20,20,0.75)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  link: {
    fontSize: '14px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'opacity 0.2s ease',
  },
};

export default Navbar;