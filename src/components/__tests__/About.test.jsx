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
    const description = screen.getByText(/Results-driven Software QA Engineer/i);
    expect(description).toBeInTheDocument();
  });

  it('should mention scalable automation frameworks', () => {
    render(<About />);
    const text = screen.getByText(/effective test strategies/i);
    expect(text).toBeInTheDocument();
  });

  it('should highlight Playwright and JavaScript expertise', () => {
    render(<About />);
    const expertise = screen.getByText(/JavaScript and Playwright/i);
    expect(expertise).toBeInTheDocument();
  });

  it('should display experience metadata', () => {
    render(<About />);
    expect(screen.getByText(/5\+ Years Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Manual & Automation Testing/i)).toBeInTheDocument();
    const jsElements = screen.getAllByText(/JavaScript/i);
    expect(jsElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/API & UI Testing/i)).toBeInTheDocument();
    const agileElements = screen.getAllByText(/Agile\/Scrum/i);
    expect(agileElements.length).toBeGreaterThan(0);
  });

  it('should mention UI, API, and integration testing', () => {
    render(<About />);
    const uiTest = screen.getAllByText(/UI/i);
    const apiTest = screen.getAllByText(/API/i);
    expect(uiTest.length).toBeGreaterThan(0);
    expect(apiTest.length).toBeGreaterThan(0);
  });
});
