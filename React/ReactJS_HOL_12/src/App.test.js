import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows guest and user pages using conditional rendering', () => {
  render(<App />);

  expect(screen.getByText('Please sign up.')).toBeInTheDocument();
  expect(
    screen.queryByRole('button', { name: 'Book Ticket' })
  ).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Login' }));
  expect(screen.getByText('Welcome back')).toBeInTheDocument();
  expect(
    screen.getAllByRole('button', { name: 'Book Ticket' })
  ).toHaveLength(3);
});
