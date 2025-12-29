import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Tools from '../Tools';

describe('Tools Component', () => {
  it('should render the tools section', () => {
    render(<Tools />);
    const heading = screen.getByText(/Tools/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    render(<Tools />);
    const section = document.querySelector('#tools');
    expect(section).toBeInTheDocument();
  });

  it('should display all tools', () => {
    render(<Tools />);
    expect(screen.getByText(/Playwright/i)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Cypress/i)).toBeInTheDocument();
    expect(screen.getByText(/Postman/i)).toBeInTheDocument();
  });
});
