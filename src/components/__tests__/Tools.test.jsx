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

  it('should display tools in a single container', () => {
    render(<Tools />);
    const container = document.querySelector('#tools');
    expect(container).toBeInTheDocument();
    // Check that all tools are rendered in the container
    const toolsSection = container.querySelector('div');
    expect(toolsSection).toBeInTheDocument();
  });

  it('should display all 9 tools', () => {
    render(<Tools />);
    expect(screen.getByText(/Node\.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Git & GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/REST APIs/i)).toBeInTheDocument();
    expect(screen.getByText(/CI \/ CD/i)).toBeInTheDocument();
    expect(screen.getByText(/VS Code/i)).toBeInTheDocument();
  });
});
