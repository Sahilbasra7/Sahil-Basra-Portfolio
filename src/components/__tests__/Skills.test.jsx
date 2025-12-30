import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills Component', () => {
  it('should render the skills section', () => {
    render(<Skills />);
    const heading = screen.getByText(/Skills/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    render(<Skills />);
    const section = document.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });

  it('should display all skill items', () => {
    render(<Skills />);
    
    expect(screen.getByText(/^Manual Testing$/i)).toBeInTheDocument();
    const playwrightElements = screen.getAllByText(/Playwright/i);
    expect(playwrightElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/^JavaScript$/i)).toBeInTheDocument();
    expect(screen.getByText(/API Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Planning/i)).toBeInTheDocument();
    expect(screen.getByText(/Bug Reporting/i)).toBeInTheDocument();
    expect(screen.getByText(/Sanity Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/Regression Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/^Jira$/i)).toBeInTheDocument();
    expect(screen.getByText(/TestRail/i)).toBeInTheDocument();
    expect(screen.getByText(/Postman/i)).toBeInTheDocument();
    expect(screen.getByText(/BrowserStack/i)).toBeInTheDocument();
  });

  it('should render exactly 12 skill cards', () => {
    render(<Skills />);
    // Check for specific skills to verify all 22 are present
    expect(screen.getByText(/^Manual Testing$/i)).toBeInTheDocument();
    expect(screen.getByText(/^JavaScript$/i)).toBeInTheDocument();
    expect(screen.getByText(/TestRail/i)).toBeInTheDocument();
    expect(screen.getByText(/OpenAI API/i)).toBeInTheDocument();
    expect(screen.getByText(/MS Office/i)).toBeInTheDocument();
  });

  it('should display skills in a single container with separators', () => {
    render(<Skills />);
    const container = document.querySelector('#skills');
    expect(container).toBeInTheDocument();
    // Check that skills are rendered as text with separator dots
    const text = container.textContent;
    expect(text).toContain('·');
  });

  it('should display all 22 skills', () => {
    render(<Skills />);
    expect(screen.getByText(/Lighthouse/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/AWS/i)).toBeInTheDocument();
    expect(screen.getByText(/CI\/CD/i)).toBeInTheDocument();
    expect(screen.getByText(/HTML/i)).toBeInTheDocument();
    expect(screen.getByText(/CSS/i)).toBeInTheDocument();
  });
});
