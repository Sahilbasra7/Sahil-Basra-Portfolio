import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Hero Component', () => {
  it('should render the hero section', () => {
    renderWithRouter(<Hero />);
    const heading = screen.getByRole('heading', { name: /AUTOMATION/i });
    expect(heading).toBeInTheDocument();
  });

  it('should display the main title with correct text', () => {
    renderWithRouter(<Hero />);
    const title = screen.getByRole('heading', { name: /AUTOMATION.*ENGINEER/i });
    expect(title).toBeInTheDocument();
  });

  it('should display the engineer subtitle', () => {
    renderWithRouter(<Hero />);
    const subtitle = screen.getAllByText(/ENGINEER/i);
    expect(subtitle.length).toBeGreaterThan(0);
  });

  it('should display the professional description', () => {
    renderWithRouter(<Hero />);
    const description = screen.getByText(/Passionate QA Automation Engineer/i);
    expect(description).toBeInTheDocument();
  });

  it('should contain automation frameworks mention', () => {
    renderWithRouter(<Hero />);
    const text = screen.getByText(/automation frameworks/i);
    expect(text).toBeInTheDocument();
  });

  it('should render stats section', () => {
    renderWithRouter(<Hero />);
    const experienceElements = screen.getAllByText(/Years of Experience/i);
    const projectsElements = screen.getAllByText(/Projects Completed/i);
    const clientsElements = screen.getAllByText(/Worldwide Clients/i);
    
    expect(experienceElements.length).toBeGreaterThan(0);
    expect(projectsElements.length).toBeGreaterThan(0);
    expect(clientsElements.length).toBeGreaterThan(0);
  });

  it('should have correct section id for navigation', () => {
    renderWithRouter(<Hero />);
    const section = document.querySelector('#home');
    expect(section).toBeInTheDocument();
  });
});
