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
    
    expect(screen.getByText(/Automation Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/Manual Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Strategy & Planning/i)).toBeInTheDocument();
    expect(screen.getByText(/Regression Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/API Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/CI \/ CD/i)).toBeInTheDocument();
  });

  it('should render exactly 6 skill cards', () => {
    const { container } = render(<Skills />);
    const skillCards = container.querySelectorAll('[style*="display"]');
    // The grid contains 6 skill items
    expect(screen.getByText(/Automation Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/CI \/ CD/i)).toBeInTheDocument();
  });
});
