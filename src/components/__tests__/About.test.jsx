import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Component', () => {
  it('should render the about section', () => {
    render(<About />);
    const heading = screen.getByText(/About/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    render(<About />);
    const section = document.querySelector('#about');
    expect(section).toBeInTheDocument();
  });

  it('should display QA Automation Engineer description', () => {
    render(<About />);
    const description = screen.getByText(/I am a QA Automation Engineer/i);
    expect(description).toBeInTheDocument();
  });

  it('should mention scalable automation frameworks', () => {
    render(<About />);
    const text = screen.getByText(/scalable automation frameworks/i);
    expect(text).toBeInTheDocument();
  });

  it('should highlight Playwright and JavaScript expertise', () => {
    render(<About />);
    const expertise = screen.getByText(/Playwright and JavaScript/i);
    expect(expertise).toBeInTheDocument();
  });

  it('should display experience metadata', () => {
    render(<About />);
    expect(screen.getByText(/3\+ Years Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Playwright & Cypress/i)).toBeInTheDocument();
    const jsElements = screen.getAllByText(/JavaScript/i);
    expect(jsElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/UI & API Testing/i)).toBeInTheDocument();
  });

  it('should mention UI, API, and integration testing', () => {
    render(<About />);
    const testingTypes = screen.getByText(/UI, API, and integration testing/i);
    expect(testingTypes).toBeInTheDocument();
  });
});
