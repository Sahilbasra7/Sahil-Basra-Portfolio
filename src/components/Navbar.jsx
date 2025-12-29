/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useEffect, useLayoutEffect, useState } from 'react';


const sections = [
  { id: 'home', label: 'Home', keywords: ['hero', 'automation', 'engineer', 'portfolio', 'main'] },
  { id: 'about', label: 'About', keywords: ['about', 'qa', 'automation', 'engineer', 'experience', 'testing', 'playwright', 'javascript'] },
  { id: 'skills', label: 'Skills', keywords: ['skills', 'automation', 'testing', 'manual', 'regression', 'api', 'ci', 'cd'] },
  { id: 'experience', label: 'Experience', keywords: ['experience', 'work', 'company', 'job', 'senior', 'qa', 'engineer'] },
  { id: 'projects', label: 'Projects', keywords: ['projects', 'work', 'portfolio', 'automation', 'framework'] },
  { id: 'tools', label: 'Tools', keywords: ['tools', 'playwright', 'cypress', 'selenium', 'postman', 'jira', 'github'] },
  { id: 'thoughts', label: 'Thoughts', keywords: ['thoughts', 'blog', 'ideas', 'mindset', 'testing', 'flaky', 'team', 'api'] },
  { id: 'contact', label: 'Contact', keywords: ['contact', 'email', 'message', 'reach', 'connect', 'form'] },
];

function Navbar() {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showRightNav, setShowRightNav] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return sections.filter(section => 
      section.label.toLowerCase().includes(query) ||
      section.keywords.some(keyword => keyword.includes(query))
    );
  };

  const handleSearchResultClick = (sectionId) => {
    setSearchOpen(false);
    setSearchQuery('');
    
    // Navigate to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Also update URL hash
    window.history.pushState(null, '', `#${sectionId}`);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      const results = getSearchResults();
      if (results.length > 0) {
        handleSearchResultClick(results[0].id);
      }
    }
  };

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
        // MOBILE: Always keep navbar visible
        setShowNavbar(true);
        setShowRightNav(false);
      } else {
        // DESKTOP: Top navbar at top, right navbar when scrolled
        if (currentScroll <= 10) {
          setShowNavbar(true);
          setShowRightNav(false);
          setShrink(false);
        } else {
          setShowNavbar(false);
          setShowRightNav(true);
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
    <div style={isMobile ? styles.wrapperMobile : styles.wrapper}>
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
            display: 'none',
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

        {/* MOBILE HAMBURGER - LEFT ALIGNED WITHOUT PILL */}
        {isMobile && !searchOpen && (
          <>
            <button
              style={styles.hamburger}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.div
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 7 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={styles.hamburgerLine}
              ></motion.div>
              <motion.div
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={styles.hamburgerLine}
              ></motion.div>
              <motion.div
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -7 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={styles.hamburgerLine}
              ></motion.div>
            </button>
            <button
              style={styles.searchBtn}
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              🔍
            </button>
          </>
        )}

        {/* MOBILE SEARCH BAR - INLINE IN HEADER */}
        {isMobile && searchOpen && (
          <div style={styles.searchInline}>
            <span style={styles.searchIconInline}>🔍</span>
            <input
              type="text"
              placeholder="Search sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearchKeyPress}
              style={styles.searchInputInline}
              autoFocus
            />
            <button
              style={styles.closeInlineBtn}
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
            >
              ✕
            </button>
          </div>
        )}
      </motion.nav>
      {isMobile && menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={styles.mobileOverlay}
          onClick={() => setMenuOpen(false)}
        >
          <motion.div
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            
            {sections.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                style={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* SEARCH RESULTS DROPDOWN - MOBILE ONLY */}
      {isMobile && searchOpen && searchQuery.trim() && (
        <div style={styles.searchResultsDropdown}>
          {getSearchResults().length > 0 ? (
            getSearchResults().map((section) => (
              <button
                key={section.id}
                style={styles.searchResultItem}
                onClick={() => handleSearchResultClick(section.id)}
              >
                <span style={styles.resultLabel}>{section.label}</span>
                <span style={styles.resultArrow}>→</span>
              </button>
            ))
          ) : (
            <div style={styles.noResults}>No results found</div>
          )}
        </div>
      )}

      {/* SEARCH MODAL - DESKTOP ONLY */}
      {!isMobile && searchOpen && (
        <div style={styles.searchOverlay} onClick={() => {
          setSearchOpen(false);
          setSearchQuery('');
        }}>
          <div style={styles.searchModal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.searchContainer}>
              <div style={styles.searchInputWrapper}>
                <span style={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  style={styles.searchInput}
                  autoFocus
                />
                <button
                  style={styles.closeSearchBtn}
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                >
                  ✕
                </button>
              </div>
              
              {/* SEARCH RESULTS */}
              {searchQuery.trim() && (
                <div style={styles.searchResults}>
                  {getSearchResults().length > 0 ? (
                    getSearchResults().map((section) => (
                      <button
                        key={section.id}
                        style={styles.searchResultItem}
                        onClick={() => handleSearchResultClick(section.id)}
                      >
                        <span style={styles.resultLabel}>{section.label}</span>
                        <span style={styles.resultArrow}>→</span>
                      </button>
                    ))
                  ) : (
                    <div style={styles.noResults}>No results found</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* RIGHT SIDE VERTICAL NAVBAR - DESKTOP ONLY */}
      {!isMobile && (
        <motion.nav
          initial={{ opacity: 0, x: 20, y: '-50%' }}
          animate={{
            opacity: showRightNav ? 1 : 0,
            x: showRightNav ? 0 : 20,
            y: '-50%',
          }}
          transition={{ type: 'spring', stiffness: 200 }}
          style={{
            ...styles.rightNav,
            pointerEvents: showRightNav ? 'auto' : 'none',
          }}
        >
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                ...styles.rightNavLink,
                opacity: active === item.id ? 1 : 0.6,
                fontWeight: active === item.id ? 600 : 400,
              }}
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
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
    zIndex: 50,
    pointerEvents: 'none',
  },
  wrapperMobile: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '12px 0',
    background: 'rgba(10,10,10,0.85)',
    backdropFilter: 'blur(12px)',
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
    pointerEvents: 'auto',
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
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '8px',
  },
  hamburgerLine: {
    width: '24px',
    height: '2px',
    background: '#fff',
    borderRadius: '2px',
  },
  searchBtn: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '8px',
  },
  searchInline: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: 1,
    background: 'transparent',
  },
  searchIconInline: {
    fontSize: '18px',
    opacity: 0.7,
  },
  searchInputInline: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
  },
  closeInlineBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
    opacity: 0.7,
  },
  searchResultsDropdown: {
    position: 'fixed',
    top: '60px',
    left: '16px',
    right: '16px',
    background: '#141414',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    maxHeight: '400px',
    overflowY: 'auto',
    zIndex: 1001,
    padding: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  searchOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(8px)',
    zIndex: 1500,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '80px',
  },
  searchModal: {
    width: '90%',
    maxWidth: '600px',
    background: '#141414',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  searchInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '20px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  searchIcon: {
    fontSize: '18px',
    opacity: 0.6,
  },
  searchInput: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
  },
  closeSearchBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'opacity 0.2s',
  },
  searchResults: {
    maxHeight: '400px',
    overflowY: 'auto',
    padding: '8px',
  },
  searchResultItem: {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '8px',
    marginBottom: '8px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background 0.2s, border-color 0.2s',
    color: '#fff',
    fontSize: '15px',
  },
  resultLabel: {
    flex: 1,
    textAlign: 'left',
  },
  resultArrow: {
    opacity: 0.4,
    fontSize: '18px',
  },
  noResults: {
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
    opacity: 0.5,
    fontSize: '14px',
  },
  mobileOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.7)',
    backdropFilter: 'blur(4px)',
    zIndex: 999,
  },

  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '260px',
    background: '#141414',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    boxShadow: '2px 0 12px rgba(0,0,0,0.5)',
    zIndex: 1001,
  },

  mobileLink: {
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    transition: 'color 0.2s',
  },

  closeBtn: {
    alignSelf: 'flex-start',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
    marginBottom: '8px',
    padding: '8px',
    opacity: 0.8,
    transition: 'opacity 0.2s',
  },
  
  mobileNavFix: {
    width: 'calc(100% - 32px)',
    justifyContent: 'space-between',
    background: 'transparent',
    border: 'none',
    padding: '0 16px',
  },
  rightNav: {
    position: 'fixed',
    right: '40px',
    top: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px 20px',
    borderRadius: '16px',
    background: 'rgba(20,20,20,0.85)',
    backdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.08)',
    zIndex: 100,
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  rightNavLink: {
    fontSize: '14px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'opacity 0.2s ease, font-weight 0.2s ease',
    textAlign: 'right',
    whiteSpace: 'nowrap',
  },
};

export default Navbar;