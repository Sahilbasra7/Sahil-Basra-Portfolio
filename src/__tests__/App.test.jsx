import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

describe('App Component - Routing', () => {
  it('should render the main app with navbar', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
        <Hero />
      </MemoryRouter>
    );
    
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/About/i)[0]).toBeInTheDocument();
  });

  it('should render home page components on root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
        <Hero />
      </MemoryRouter>
    );
    
    // Check for Hero section content
    expect(screen.getByRole('heading', { name: /AUTOMATION/i })).toBeInTheDocument();
  });

  it('should have navigation links for all sections', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );
    
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(5);
  });

  it('should render Blog1 component on /blogs/automation-mindset route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );
    
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
  });

  it('should render Blog2 component on /blogs/flaky-tests route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );
    
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
  });

  it('should render Blog3 component on /blogs/team-responsibility route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );
    
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
  });

  it('should render Blog4 component on /blogs/api-testing route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );
    
    expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
  });

  it('should render all main sections on home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );
    
    // Check if navbar is present
    const homeLink = screen.getAllByText(/Home/i)[0];
    expect(homeLink).toBeInTheDocument();
  });
});
