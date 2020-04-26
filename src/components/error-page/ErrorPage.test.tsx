import React from 'react';
import { render } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';

it('renders without error', () => {
  render(<ErrorPage />);
});
