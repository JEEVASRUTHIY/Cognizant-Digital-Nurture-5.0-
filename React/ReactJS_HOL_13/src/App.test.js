import { render, screen } from '@testing-library/react';
import App from './App';

test('renders course, book and blog detail components', () => {
  render(<App />);

  expect(screen.getByText('Course Details')).toBeInTheDocument();
  expect(screen.getByText('Book Details')).toBeInTheDocument();
  expect(screen.getByText('Blog Details')).toBeInTheDocument();
  expect(screen.getByText('Master React')).toBeInTheDocument();
  expect(screen.getByText('React Learning')).toBeInTheDocument();
});
