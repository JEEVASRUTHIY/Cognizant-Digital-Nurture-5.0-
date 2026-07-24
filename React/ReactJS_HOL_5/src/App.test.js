import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cohort details with status-based heading colors', () => {
  render(<App />);

  expect(screen.getByText('Cohorts Details')).toBeInTheDocument();
  expect(screen.getByText('INTADMDF10 -.NET FSD')).toHaveStyle('color: blue');
  expect(screen.getByText('ADM21JF014 -Java FSD')).toHaveStyle('color: green');
});
