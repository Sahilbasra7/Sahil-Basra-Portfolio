import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects Component', () => {
  it('should render the projects section', () => {
    render(<Projects />);
    const heading = screen.getByText(/Projects/i);
    expect(heading).toBeInTheDocument();
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

  it('should display API Testing Framework project', () => {
    render(<Projects />);
    expect(screen.getByText(/API Testing Framework/i)).toBeInTheDocument();
    expect(screen.getByText(/REST API automation/i)).toBeInTheDocument();
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
    const apiFramework = screen.getByText(/API Testing Framework/i);
    
    expect(sauceDemo).toBeInTheDocument();
    expect(amazonSearch).toBeInTheDocument();
    expect(apiFramework).toBeInTheDocument();
  });
});
