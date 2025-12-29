import { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';

function MainLayout({ children }) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      
      // Switch to top position when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const getProfileCardStyle = () => {
    if (isMobile) return mobileStyles.left;
    
    if (isScrolled) {
      return {
        ...styles.left,
        top: '100px',
        transform: 'translateY(0)',
        transition: 'top 0.4s ease, transform 0.4s ease',
      };
    }
    
    return {
      ...styles.left,
      transition: 'top 0.4s ease, transform 0.4s ease',
    };
  };

  return (
    <div style={styles.page}>
      <div style={isMobile ? mobileStyles.wrapper : styles.wrapper}>
        <aside style={getProfileCardStyle()}>
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
    padding: '70px 16px 0', // space for fixed navbar header at top
  },

  left: {
    position: 'static',
    transform: 'none',
    width: '100%',
    maxWidth: '340px',
  },

  right: {
    width: '100%',
  },
};

export default MainLayout;