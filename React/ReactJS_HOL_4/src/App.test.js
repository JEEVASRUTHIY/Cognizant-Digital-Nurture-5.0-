import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, title: 'First post', body: 'Post body' },
        ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('loads posts after the component mounts', async () => {
  render(<App />);

  expect(screen.getByText('Loading posts...')).toBeInTheDocument();
  expect(await screen.findByText('First post')).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/posts'
  );
});
