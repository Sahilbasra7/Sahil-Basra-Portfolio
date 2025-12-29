import { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';

function MainLayout({ children }) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={styles.page}>
      <div style={isMobile ? mobileStyles.wrapper : styles.wrapper}>
        <aside style={isMobile ? mobileStyles.left : styles.left}>
          <ProfileCard />
        </aside>

        <main style={isMobile ? mobileStyles.right : styles.right}>
          {children}
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  wrapper: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    gap: '80px',
    padding: '0 40px',
    alignItems: 'flex-start',
  },

  left: {
    position: 'sticky',
    top: '50vh',
    transform: 'translateY(-50%)',
    flexShrink: 0,
  },

  right: {
    flex: 1,
    minWidth: 0,
  },
};

const mobileStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    padding: '80px 16px 0', // space for fixed navbar
  },

  left: {
    position: 'static',
    transform: 'none',
  },

  right: {
    width: '100%',
  },
};

export default MainLayout;