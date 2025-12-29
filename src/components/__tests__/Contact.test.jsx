import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Component', () => {
  it('should render the contact section', () => {
    render(<Contact />);
    const heading = screen.getByText(/Contact/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    render(<Contact />);
    const section = document.querySelector('#contact');
    expect(section).toBeInTheDocument();
  });

  it('should display contact information', () => {
    render(<Contact />);
    const paragraph = screen.getByText(/Let.s work together/i);
    expect(paragraph).toBeInTheDocument();
  });
});
