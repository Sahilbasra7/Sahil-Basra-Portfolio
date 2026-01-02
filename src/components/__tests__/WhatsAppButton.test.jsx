import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import WhatsAppButton from '../WhatsAppButton';

// Mock window.open
const mockWindowOpen = vi.fn();
window.open = mockWindowOpen;

describe('WhatsAppButton Component', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  it('should render the WhatsApp button', () => {
    render(<WhatsAppButton />);
    const button = screen.getByRole('button', { name: /contact via whatsapp/i });
    expect(button).toBeInTheDocument();
  });

  it('should have correct aria-label', () => {
    render(<WhatsAppButton />);
    const button = screen.getByLabelText('Contact via WhatsApp');
    expect(button).toBeInTheDocument();
  });

  it('should render WhatsApp SVG icon', () => {
    const { container } = render(<WhatsAppButton />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should have fixed position styling', () => {
    const { container } = render(<WhatsAppButton />);
    const button = container.querySelector('button');
    expect(button).toHaveStyle({ position: 'fixed' });
  });

  it('should open WhatsApp link when clicked', () => {
    render(<WhatsAppButton />);
    const button = screen.getByRole('button', { name: /contact via whatsapp/i });
    
    fireEvent.click(button);
    
    expect(mockWindowOpen).toHaveBeenCalledTimes(1);
    expect(mockWindowOpen).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/'),
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('should have WhatsApp green background color', () => {
    const { container } = render(<WhatsAppButton />);
    const button = container.querySelector('button');
    expect(button).toHaveStyle({ background: '#25D366' });
  });

  it('should be circular (50% border radius)', () => {
    const { container } = render(<WhatsAppButton />);
    const button = container.querySelector('button');
    expect(button).toHaveStyle({ borderRadius: '50%' });
  });

  it('should have high z-index for visibility', () => {
    const { container } = render(<WhatsAppButton />);
    const button = container.querySelector('button');
    expect(button).toHaveStyle({ zIndex: '1000' });
  });
});
