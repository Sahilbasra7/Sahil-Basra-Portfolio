import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../Contact';

// Mock fetch for FormSubmit
global.fetch = vi.fn();

describe('Contact Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should render the contact section', () => {
    render(<Contact />);
    const heading = screen.getByText(/Contact/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    render(<Contact />);
    const section = document.querySelector('#contact');
    expect(section).toBeInTheDocument();
  });

  it('should display contact information', () => {
    render(<Contact />);
    const paragraph = screen.getByText(/Let.s work together/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('should render form fields', () => {
    render(<Contact />);
    
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your@email.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Select Purpose/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
  });

  it('should render submit button', () => {
    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('should show validation errors for empty fields', async () => {
    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Please select a purpose')).toBeInTheDocument();
      expect(screen.getByText('Message cannot be empty')).toBeInTheDocument();
    });
  });

  it('should validate email format', async () => {
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Enter a valid email|Invalid email/i)).toBeInTheDocument();
    });
  });

  it('should submit form successfully with valid data', async () => {
    fetch.mockResolvedValueOnce({ ok: true });
    
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    const selectInput = screen.getByDisplayValue(/Select Purpose/i);
    const messageInput = screen.getByPlaceholderText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(selectInput, { target: { value: 'QA Consulting' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Your message has been sent successfully!/i)).toBeInTheDocument();
    });
    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('formsubmit.co'),
      expect.objectContaining({
        method: 'POST',
      })
    );
  });

  it('should show error message on form submission failure', async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    const selectInput = screen.getByDisplayValue(/Select Purpose/i);
    const messageInput = screen.getByPlaceholderText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(selectInput, { target: { value: 'QA Consulting' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Failed to send message. Please try again./i)).toBeInTheDocument();
    });
  });

  it('should disable submit button while submitting', async () => {
    fetch.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 100)));
    
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    const selectInput = screen.getByDisplayValue(/Select Purpose/i);
    const messageInput = screen.getByPlaceholderText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(selectInput, { target: { value: 'QA Consulting' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    fireEvent.click(submitButton);
    
    expect(screen.getByRole('button', { name: /Sending.../i })).toBeDisabled();
  });

  it('should clear errors when user starts typing', () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);
    
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    fireEvent.change(nameInput, { target: { value: 'John' } });
    
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });

  it('should enforce sequential form filling - email requires name', async () => {
    render(<Contact />);
    
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    
    fireEvent.focus(emailInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Please fill name/i)).toBeInTheDocument();
    });
  });

  it('should enforce sequential form filling - purpose requires name and email', async () => {
    render(<Contact />);
    
    const selectInput = screen.getByDisplayValue(/Select Purpose/i);
    
    fireEvent.focus(selectInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Please fill name/i)).toBeInTheDocument();
    });
  });

  it('should enforce sequential form filling - message requires all previous fields', async () => {
    render(<Contact />);
    
    const messageInput = screen.getByPlaceholderText(/Message/i);
    
    fireEvent.focus(messageInput);
    
    await waitFor(() => {
      expect(screen.getByText(/Please fill name/i)).toBeInTheDocument();
    });
  });

  it('should validate email format on blur', async () => {
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.blur(emailInput);
    
    await waitFor(() => {
      expect(screen.getByText('Invalid email')).toBeInTheDocument();
    });
  });

  it('should show invalid email error when moving to next field', async () => {
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    const selectInput = screen.getByDisplayValue(/Select Purpose/i);
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.focus(selectInput);
    
    await waitFor(() => {
      expect(screen.getByText('Invalid email')).toBeInTheDocument();
    });
  });

  it('should allow form submission with valid email', async () => {
    fetch.mockResolvedValueOnce({ ok: true });
    
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    const selectInput = screen.getByDisplayValue(/Select Purpose/i);
    const messageInput = screen.getByPlaceholderText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(selectInput, { target: { value: 'QA Consulting' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Your message has been sent successfully!/i)).toBeInTheDocument();
    });
  });
});

