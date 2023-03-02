import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/components/App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
});
describe('true is truthy and false is falsy', () => {
  it('true is truthy', () => {
    expect(true).toBe(true);
  });

  it('false is falsy', () => {
    expect(false).toBe(false);
  });
});
