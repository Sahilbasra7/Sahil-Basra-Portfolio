import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Thoughts from '../Thoughts';

describe('Thoughts Component', () => {
  it('should render the thoughts section', () => {
    render(<Thoughts />);
    const heading = screen.getByText(/Thoughts/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have correct section id for navigation', () => {
    render(<Thoughts />);
    const section = document.querySelector('#thoughts');
    expect(section).toBeInTheDocument();
  });

  it('should display all thought titles', () => {
    render(<Thoughts />);
    
    expect(screen.getByText(/Automation is a mindset/i)).toBeInTheDocument();
    expect(screen.getByText(/Flaky tests are worse than no tests/i)).toBeInTheDocument();
    expect(screen.getByText(/Testing is a team responsibility/i)).toBeInTheDocument();
    expect(screen.getByText(/APIs deserve as much attention as UI/i)).toBeInTheDocument();
  });

  it('should display preview text for each thought', () => {
    render(<Thoughts />);
    
    expect(screen.getByText(/Good automation is not about writing more tests/i)).toBeInTheDocument();
    expect(screen.getByText(/A flaky test suite destroys trust/i)).toBeInTheDocument();
    expect(screen.getByText(/Quality is not owned by QA alone/i)).toBeInTheDocument();
    expect(screen.getByText(/API testing provides faster and more stable feedback/i)).toBeInTheDocument();
  });

  it('should render all four thought cards', () => {
    render(<Thoughts />);
    
    const automationMindset = screen.getByText(/Automation is a mindset/i);
    const flakyTests = screen.getByText(/Flaky tests are worse than no tests/i);
    const teamResponsibility = screen.getByText(/Testing is a team responsibility/i);
    const apiTesting = screen.getByText(/APIs deserve as much attention as UI/i);
    
    expect(automationMindset).toBeInTheDocument();
    expect(flakyTests).toBeInTheDocument();
    expect(teamResponsibility).toBeInTheDocument();
    expect(apiTesting).toBeInTheDocument();
  });

  it('should toggle thought details when clicked', () => {
    render(<Thoughts />);
    
    // Initially, full text should not be visible
    expect(screen.queryByText(/Automation is not about increasing test count/i)).not.toBeInTheDocument();
    
    // Click on the first thought
    const firstThought = screen.getByText(/Automation is a mindset/i).closest('div');
    fireEvent.click(firstThought);
    
    // Now full text should be visible
    expect(screen.getByText(/Automation is not about increasing test count/i)).toBeInTheDocument();
  });

  it('should close thought details when clicked again', () => {
    render(<Thoughts />);
    
    const firstThought = screen.getByText(/Automation is a mindset/i).closest('div');
    
    // Open
    fireEvent.click(firstThought);
    expect(screen.getByText(/Automation is not about increasing test count/i)).toBeInTheDocument();
    
    // Close
    fireEvent.click(firstThought);
    expect(screen.queryByText(/Automation is not about increasing test count/i)).not.toBeInTheDocument();
  });
});
