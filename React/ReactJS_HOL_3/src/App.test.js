import { render, screen } from '@testing-library/react';
import App from './App';

test('calculates and displays the student score', () => {
  render(<App />);

  expect(screen.getByText('Student Details:')).toBeInTheDocument();
  expect(screen.getByText('Steeve')).toBeInTheDocument();
  expect(screen.getByText('DNV Public School')).toBeInTheDocument();
  expect(screen.getByText('94.67%')).toBeInTheDocument();
});
