import React from 'react';
import { NotFound } from './NotFound';
import { render } from '@testing-library/react';

it('renders without error', () => {
  render(<NotFound />);
});
