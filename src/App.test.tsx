import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('testing some day', () => {
  const { getByText } = render(<App />);
});
