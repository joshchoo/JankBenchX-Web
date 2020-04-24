import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { ResultsOverview } from './ResultsOverview';

it('renders without error', async () => {
  render(
    <MemoryRouter>
      <ResultsOverview match={{ path: '/non-existent' }} />
    </MemoryRouter>
  );
});
