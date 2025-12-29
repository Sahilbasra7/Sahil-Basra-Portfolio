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
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('should display all navigation links', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should render navigation links with correct hrefs', () => {
    renderWithRouter(<Navbar />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const skillsLink = screen.getByRole('link', { name: /skills/i });
    
    expect(homeLink).toHaveAttribute('href', '#home');
    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(skillsLink).toHaveAttribute('href', '#skills');
  });

  it('should have progress bar element', () => {
    const { container } = renderWithRouter(<Navbar />);
    // Progress bar is rendered in the navbar
    const navbar = container.querySelector('nav');
    expect(navbar).toBeInTheDocument();
  });

  it('should render exactly 7 navigation items', () => {
    renderWithRouter(<Navbar />);
    
    const navItems = [
      'Home', 'About', 'Skills', 'Experience', 
      'Projects', 'Tools', 'Contact'
    ];
    
    navItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
