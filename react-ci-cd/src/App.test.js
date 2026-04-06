import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza hello world', () => {
  render(<App />);
  const texto = screen.getByText(/hello world/i);
  expect(texto).toBeInTheDocument();
});