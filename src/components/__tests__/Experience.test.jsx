import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Experience from '../Experience';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Experience Component', () => {
  it('should render the experience section', () => {
    renderWithRouter(<Experience />);
    const headings = screen.getAllByText(/Experience/i);
    expect(headings[0]).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    renderWithRouter(<Experience />);
    const section = document.querySelector('#experience');
    expect(section).toBeInTheDocument();
  });

  it('should display experience entries', () => {
    renderWithRouter(<Experience />);
    expect(screen.getByText(/QA Automation Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Visualizer\.me/i)).toBeInTheDocument();
    expect(screen.getByText(/Cameleon Network Inc\./i)).toBeInTheDocument();
    expect(screen.getByText(/Septasoft Solutions Inc\./i)).toBeInTheDocument();
    expect(screen.getByText(/Software Test Engineer/i)).toBeInTheDocument();
  });

  it('should display location for each experience', () => {
    renderWithRouter(<Experience />);
    const locations = screen.getAllByText(/Delhi, India/i);
    expect(locations).toHaveLength(3);
  });

  it('should display detailed tech stack descriptions', () => {
    renderWithRouter(<Experience />);
    const playwrightMentions = screen.getAllByText(/Playwright/i);
    expect(playwrightMentions.length).toBeGreaterThan(0);
    expect(screen.getByText(/REST API testing/i)).toBeInTheDocument();
    const awsMentions = screen.getAllByText(/AWS/i);
    expect(awsMentions.length).toBeGreaterThan(0);
    const browserStackMentions = screen.getAllByText(/BrowserStack/i);
    expect(browserStackMentions.length).toBeGreaterThan(0);
  });

  it('should display experience periods', () => {
    renderWithRouter(<Experience />);
    expect(screen.getByText(/October 2023 — Present/i)).toBeInTheDocument();
    expect(screen.getByText(/July 2022 — September 2023/i)).toBeInTheDocument();
    expect(screen.getByText(/Dec 2019 — July 2022/i)).toBeInTheDocument();
  });
});
