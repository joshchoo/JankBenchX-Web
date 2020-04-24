import React from 'react';

import { Navbar } from './Navbar';
import { render } from '../../test-utils';
import { MemoryRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { fireEvent } from '@testing-library/react';

it('renders without error', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
});

it('navigates to "/" when clicking on the JankBenchX text', async () => {
  const history = createBrowserHistory();

  const { getByText } = render(
    <Router history={history}>
      <Navbar />
    </Router>
  );

  fireEvent.click(getByText(/JankBenchX/i));

  expect(window.location.pathname).toMatch('/');
});
