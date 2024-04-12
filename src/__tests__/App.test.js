import React from 'react';
import '@testing-library/jest-dom';
import App from '../App';
import { render, screen } from '@testing-library/react';

test('make sure page renders', () => {
  render(<App />);

  expect(screen.queryByText('Phonebook')).toBeDefined();
});
