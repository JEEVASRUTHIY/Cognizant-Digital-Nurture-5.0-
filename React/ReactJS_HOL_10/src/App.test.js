import { render, screen } from '@testing-library/react';
import App from './App';

test('renders office details and applies rent colors', () => {
  render(<App />);

  expect(
    screen.getByText('Office Space, at Affordable Range')
  ).toBeInTheDocument();
  expect(screen.getByText('Rent: Rs. 50000')).toHaveStyle('color: red');
  expect(screen.getByText('Rent: Rs. 75000')).toHaveStyle('color: green');
});
