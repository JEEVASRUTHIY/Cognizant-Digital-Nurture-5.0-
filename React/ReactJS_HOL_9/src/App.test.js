import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('conditionally displays both cricket views', () => {
  render(<App />);

  expect(screen.getByText('List of Players')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Show Indian Team' }));
  expect(screen.getByText('Odd Players')).toBeInTheDocument();
  expect(screen.getByText('List of Indian Players Merged')).toBeInTheDocument();
});
