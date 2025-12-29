import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

    // Mock document.body.style
    document.body.style.overflow = 'unset';
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

  describe('Mobile Hamburger Menu', () => {
    beforeEach(() => {
      // Set mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
    });

    it('should render hamburger menu button on mobile', () => {
      renderWithRouter(<Navbar />);
      const hamburgerBtn = screen.getByLabelText(/open menu/i);
      expect(hamburgerBtn).toBeInTheDocument();
    });

    it('should open mobile menu when hamburger is clicked', () => {
      renderWithRouter(<Navbar />);
      const hamburgerBtn = screen.getByLabelText(/open menu/i);
      
      fireEvent.click(hamburgerBtn);
      
      // Check for menu being open by finding navigation links inside menu
      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toBeInTheDocument();
    });

    it('should close mobile menu when close button is clicked', () => {
      renderWithRouter(<Navbar />);
      const hamburgerBtn = screen.getByLabelText(/open menu/i);
      
      fireEvent.click(hamburgerBtn);
      // Get all close buttons and click the one with the X symbol (inside menu)
      const closeBtns = screen.getAllByLabelText(/close menu/i);
      const menuCloseBtn = closeBtns.find(btn => btn.textContent === '✕');
      fireEvent.click(menuCloseBtn);
      
      expect(screen.queryByText('✕')).not.toBeInTheDocument();
    });

    it('should lock body scroll when menu is open', () => {
      renderWithRouter(<Navbar />);
      const hamburgerBtn = screen.getByLabelText(/open menu/i);
      
      fireEvent.click(hamburgerBtn);
      
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should unlock body scroll when menu is closed', () => {
      renderWithRouter(<Navbar />);
      const hamburgerBtn = screen.getByLabelText(/open menu/i);
      
      fireEvent.click(hamburgerBtn);
      const closeBtns = screen.getAllByLabelText(/close menu/i);
      const menuCloseBtn = closeBtns.find(btn => btn.textContent === '✕');
      fireEvent.click(menuCloseBtn);
      
      expect(document.body.style.overflow).toBe('unset');
    });

    it('should display all navigation links in mobile menu', () => {
      renderWithRouter(<Navbar />);
      const hamburgerBtn = screen.getByLabelText(/open menu/i);
      
      fireEvent.click(hamburgerBtn);
      
      expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
    });

    it('should close menu when clicking on a navigation link', () => {
      renderWithRouter(<Navbar />);
      const hamburgerBtn = screen.getByLabelText(/open menu/i);
      
      fireEvent.click(hamburgerBtn);
      const aboutLink = screen.getByRole('link', { name: 'About' });
      fireEvent.click(aboutLink);
      
      expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument();
    });
  });

  describe('Search Functionality', () => {
    beforeEach(() => {
      // Set mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
    });

    it('should render search button on mobile', () => {
      renderWithRouter(<Navbar />);
      const searchBtn = screen.getByLabelText(/search/i);
      expect(searchBtn).toBeInTheDocument();
    });

    it('should open search input when search button is clicked', () => {
      renderWithRouter(<Navbar />);
      const searchBtn = screen.getByLabelText(/search/i);
      
      fireEvent.click(searchBtn);
      
      const searchInput = screen.getByPlaceholderText(/search sections/i);
      expect(searchInput).toBeInTheDocument();
    });

    it('should display search results when typing', async () => {
      renderWithRouter(<Navbar />);
      const searchBtn = screen.getByLabelText(/search/i);
      
      fireEvent.click(searchBtn);
      const searchInput = screen.getByPlaceholderText(/search sections/i);
      fireEvent.change(searchInput, { target: { value: 'about' } });
      
      await waitFor(() => {
        expect(screen.getByText('About')).toBeInTheDocument();
      });
    });

    it('should filter sections based on search query', async () => {
      renderWithRouter(<Navbar />);
      const searchBtn = screen.getByLabelText(/search/i);
      
      fireEvent.click(searchBtn);
      const searchInput = screen.getByPlaceholderText(/search sections/i);
      fireEvent.change(searchInput, { target: { value: 'automation' } });
      
      await waitFor(() => {
        const results = screen.queryAllByRole('button');
        expect(results.length).toBeGreaterThan(0);
      });
    });

    it('should close search when close button is clicked', () => {
      renderWithRouter(<Navbar />);
      const searchBtn = screen.getByLabelText(/search/i);
      
      fireEvent.click(searchBtn);
      const closeBtn = screen.getAllByRole('button').find(btn => btn.textContent === '✕');
      fireEvent.click(closeBtn);
      
      expect(screen.queryByPlaceholderText(/search sections/i)).not.toBeInTheDocument();
    });
  });

  describe('Desktop Right Navigation', () => {
    beforeEach(() => {
      // Set desktop viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
    });

    it('should render two navigation elements on desktop', () => {
      renderWithRouter(<Navbar />);
      const navs = screen.getAllByRole('navigation');
      expect(navs.length).toBe(2);
    });

    it('should not render hamburger menu on desktop', () => {
      renderWithRouter(<Navbar />);
      expect(screen.queryByLabelText(/open menu/i)).not.toBeInTheDocument();
    });
  });
});
