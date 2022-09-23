import { render, screen } from '@testing-library/react';
import App from './app';

test('renders Unlock Wallet link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Unlock Wallet/i);
  expect(linkElement).toBeInTheDocument();
});
