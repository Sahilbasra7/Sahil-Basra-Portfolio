import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('should render the footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should display copyright or footer content', () => {
    const { container } = render(<Footer />);
    // Footer should render something
    expect(container.firstChild).toBeInTheDocument();
  });
});
