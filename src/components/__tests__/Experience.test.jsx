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
    const heading = screen.getByText(/Experience/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    renderWithRouter(<Experience />);
    const section = document.querySelector('#experience');
    expect(section).toBeInTheDocument();
  });

  it('should display experience entries', () => {
    renderWithRouter(<Experience />);
    expect(screen.getByText(/Senior QA Automation Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/QA Engineer/i)).toBeInTheDocument();
  });
});
