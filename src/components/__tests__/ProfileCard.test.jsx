import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProfileCard from '../ProfileCard';

describe('ProfileCard Component', () => {
  it('should render the profile card', () => {
    render(<ProfileCard />);
    const nameHeading = screen.getByText('Sahil Basra');
    expect(nameHeading).toBeInTheDocument();
  });

  it('should display the correct name', () => {
    render(<ProfileCard />);
    expect(screen.getByText('Sahil Basra')).toBeInTheDocument();
  });

  it('should display the correct subtitle', () => {
    render(<ProfileCard />);
    expect(screen.getByText('QA Automation Engineer')).toBeInTheDocument();
  });

  it('should render the profile image', () => {
    render(<ProfileCard />);
    const image = screen.getByAltText('Sahil');
    expect(image).toBeInTheDocument();
  });

  describe('Social Media Links', () => {
    it('should render LinkedIn link with correct URL', () => {
      render(<ProfileCard />);
      const linkedInLink = screen.getByLabelText('LinkedIn');
      expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/sahilbasra7/');
      expect(linkedInLink).toHaveAttribute('target', '_blank');
      expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should render GitHub link with correct URL', () => {
      render(<ProfileCard />);
      const githubLink = screen.getByLabelText('GitHub');
      expect(githubLink).toHaveAttribute('href', 'https://github.com/Sahilbasra7');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should render Medium link with correct URL', () => {
      render(<ProfileCard />);
      const mediumLink = screen.getByLabelText('Blog');
      expect(mediumLink).toHaveAttribute('href', 'https://medium.com/@basrasahil32');
      expect(mediumLink).toHaveAttribute('target', '_blank');
      expect(mediumLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should render all 3 social media links', () => {
      render(<ProfileCard />);
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(3);
    });

    it('should render all social media icons as SVGs', () => {
      const { container } = render(<ProfileCard />);
      const svgs = container.querySelectorAll('svg');
      expect(svgs).toHaveLength(3);
    });
  });

  describe('Card Structure', () => {
    it('should have nested picture card structure', () => {
      const { container } = render(<ProfileCard />);
      const pictureCard = container.querySelector('div > div');
      expect(pictureCard).toBeInTheDocument();
    });

    it('should render image inside picture card', () => {
      render(<ProfileCard />);
      const image = screen.getByAltText('Sahil');
      expect(image).toBeInTheDocument();
      expect(image.parentElement).toBeInTheDocument();
    });
  });
});
