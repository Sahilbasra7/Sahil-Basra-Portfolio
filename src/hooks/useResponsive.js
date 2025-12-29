import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowSize.width <= 768,
    isTablet: windowSize.width > 768 && windowSize.width <= 1024,
    isDesktop: windowSize.width > 1024,
    width: windowSize.width,
    height: windowSize.height,
  };
};

// Responsive style generator
export const responsive = (base, mobile, tablet) => {
  if (typeof window === 'undefined') return base;
  
  const width = window.innerWidth;
  
  if (width <= 768 && mobile) return mobile;
  if (width > 768 && width <= 1024 && tablet) return tablet;
  return base;
};
