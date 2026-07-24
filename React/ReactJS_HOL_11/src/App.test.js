import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('handles counter and currency converter events', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('Hello! Member!')).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Amount'), {
    target: { value: '80' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Convert' }));
  expect(
    screen.getByText('Converting to Euro Amount is 6400')
  ).toBeInTheDocument();
});
