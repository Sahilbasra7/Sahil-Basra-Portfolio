/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useEffect, useLayoutEffect, useState } from 'react';


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
  const [progress, setProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

const [isMobile, setIsMobile] = useState(() => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768;
  }
  return false;
});

  useLayoutEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (isMobile) {
        // MOBILE RULES
        if (currentScroll < 80) {
          setShowNavbar(true);   // always visible near top
        } else if (currentScroll > lastScrollY) {
          setShowNavbar(false);  // scrolling down → hide
        } else {
          setShowNavbar(true);   // scrolling up → show
        }
      } else {
        // DESKTOP (unchanged behavior)
        if (currentScroll <= 10) {
          setShowNavbar(true);
          setShrink(false);
        } else {
          setShowNavbar(false);
          setShrink(true);
        }
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const handleProgress = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener('scroll', handleProgress);
    return () => window.removeEventListener('scroll', handleProgress);
  }, []);

  return (
    <div style={styles.wrapper}>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showNavbar ? 1 : 0,
          y: showNavbar ? 0 : -20,
          scale: shrink ? 0.92 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200 }}
        style={{
          ...styles.nav,
          ...(isMobile ? styles.mobileNavFix : {}),
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '2px',
            width: `${progress}%`,
            background: '#4da3ff',
            borderRadius: '2px',
          }}
        />
        {/* DESKTOP NAV LINKS */}
        {!isMobile &&
          sections.map((item) => (
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

        {/* MOBILE HAMBURGER */}
        {isMobile && (
          <button
            style={styles.hamburger}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        )}
      </motion.nav>
      {isMobile && menuOpen && (
        <div style={styles.mobileOverlay}>
          <div style={styles.mobileMenu}>
            <button
              style={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'fixed',
    top: '16px',
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
    background: 'rgba(20,20,20,0.55)',
    backdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.08)',
    width: 'max-content',
  },
  link: {
    fontSize: '14px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'opacity 0.2s ease',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '22px',
    cursor: 'pointer',
  },
  mobileOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    zIndex: 999,
  },

  mobileMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '260px',
    background: '#141414',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  mobileLink: {
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
  },

  closeBtn: {
    alignSelf: 'flex-end',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
  },
  mobileNavFix: {
    width: 'calc(100% - 32px)',
    justifyContent: 'space-between',
  },
};

export default Navbar;