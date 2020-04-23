import React from 'react';
import { render } from '../../test-utils';

import { LoadingSpinner } from './LoadingSpinner';

it('renders without error', () => {
  render(<LoadingSpinner />);
});
