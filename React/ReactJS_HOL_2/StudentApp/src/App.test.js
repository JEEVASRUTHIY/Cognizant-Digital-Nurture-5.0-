import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all Student Management Portal components', () => {
  render(<App />);

  expect(
    screen.getByText('Welcome to the Home page of Student Management Portal')
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      'Welcome to the About page of the Student Management Portal'
    )
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      'Welcome to the Contact page of the Student Management Portal'
    )
  ).toBeInTheDocument();
});
