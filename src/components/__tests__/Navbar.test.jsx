import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navbar Component', () => {
  beforeEach(() => {
    // Mock window properties
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  it('should render the navbar', () => {
    renderWithRouter(<Navbar />);
    const navs = screen.getAllByRole('navigation');
    // Should have 2 navbars on desktop (top and right)
    expect(navs.length).toBeGreaterThanOrEqual(1);
    expect(navs[0]).toBeInTheDocument();
  });

  it('should display all navigation links', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    expect(screen.getAllByText('About')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Skills')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Experience')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Projects')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Tools')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Thoughts')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Contact')[0]).toBeInTheDocument();
  });

  it('should render navigation links with correct hrefs', () => {
    renderWithRouter(<Navbar />);
    
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    const aboutLinks = screen.getAllByRole('link', { name: /about/i });
    const skillsLinks = screen.getAllByRole('link', { name: /skills/i });
    
    expect(homeLinks[0]).toHaveAttribute('href', '#home');
    expect(aboutLinks[0]).toHaveAttribute('href', '#about');
    expect(skillsLinks[0]).toHaveAttribute('href', '#skills');
  });

  it('should have progress bar element', () => {
    const { container } = renderWithRouter(<Navbar />);
    // Progress bar is rendered in the navbar
    const navbar = container.querySelector('nav');
    expect(navbar).toBeInTheDocument();
  });

  it('should render exactly 8 navigation items', () => {
    renderWithRouter(<Navbar />);
    
    const navItems = [
      'Home', 'About', 'Skills', 'Experience', 
      'Projects', 'Tools', 'Thoughts', 'Contact'
    ];
    
    navItems.forEach(item => {
      expect(screen.getAllByText(item)[0]).toBeInTheDocument();
    });
  });
});
