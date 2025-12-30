import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects Component', () => {
  it('should render the projects section', () => {
    render(<Projects />);
    const headings = screen.getAllByText(/Projects/i);
    expect(headings.length).toBeGreaterThan(0);
  });

  it('should have correct section id for navigation', () => {
    render(<Projects />);
    const section = document.querySelector('#projects');
    expect(section).toBeInTheDocument();
  });

  it('should display Sauce Demo Automation project', () => {
    render(<Projects />);
    expect(screen.getByText(/Sauce Demo Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/End-to-end automation framework/i)).toBeInTheDocument();
  });

  it('should display Amazon Search Automation project', () => {
    render(<Projects />);
    expect(screen.getByText(/Amazon Search Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Automated product search/i)).toBeInTheDocument();
  });

  it('should display Sahil Basra Portfolio project', () => {
    render(<Projects />);
    expect(screen.getByText(/Sahil Basra Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Modern, responsive personal portfolio website/i)).toBeInTheDocument();
  });

  it('should display technology stack for each project', () => {
    render(<Projects />);
    
    // Check for technology mentions
    const playwrightMentions = screen.getAllByText(/Playwright/i);
    expect(playwrightMentions.length).toBeGreaterThan(0);
    
    const jsMentions = screen.getAllByText(/JavaScript/i);
    expect(jsMentions.length).toBeGreaterThan(0);
  });

  it('should render all three projects', () => {
    render(<Projects />);
    
    const sauceDemo = screen.getByText(/Sauce Demo Automation/i);
    const amazonSearch = screen.getByText(/Amazon Search Automation/i);
    const portfolio = screen.getByText(/Sahil Basra Portfolio/i);
    
    expect(sauceDemo).toBeInTheDocument();
    expect(amazonSearch).toBeInTheDocument();
    expect(portfolio).toBeInTheDocument();
  });

  it('should have links that open in new tabs', () => {
    render(<Projects />);
    const links = document.querySelectorAll('a[target="_blank"]');
    expect(links.length).toBeGreaterThan(0);
    
    // Check for security attributes
    links.forEach(link => {
      expect(link.getAttribute('rel')).toContain('noopener');
      expect(link.getAttribute('rel')).toContain('noreferrer');
    });
  });

  it('should display correct GitHub links', () => {
    render(<Projects />);
    const sauceDemoLink = screen.getByText(/Sauce Demo Automation/i).closest('div').querySelector('a');
    expect(sauceDemoLink.getAttribute('href')).toContain('SauceDemo-Playwright-Automation');
    
    const portfolioLink = screen.getByText(/Sahil Basra Portfolio/i).closest('div').querySelector('a');
    expect(portfolioLink.getAttribute('href')).toContain('Sahil-Basra-Portfolio');
  });

  it('should display React and Vite tech stack for portfolio', () => {
    render(<Projects />);
    expect(screen.getByText(/React \u00b7 Vite \u00b7 Framer Motion \u00b7 Vitest/i)).toBeInTheDocument();
  });
});
