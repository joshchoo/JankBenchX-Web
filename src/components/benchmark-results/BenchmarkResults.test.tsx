import React from 'react';
import { createBrowserHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';

import { renderApollo, fireEvent } from '../../test-utils';

import {
  BenchmarkResults,
  GET_BENCHMARK_RESULTS_QUERY,
} from './BenchmarkResults';
import { result } from './sample-results';

const mocks = [
  {
    request: {
      query: GET_BENCHMARK_RESULTS_QUERY,
    },
    result: result,
  },
];

test('renders without error', () => {
  renderApollo(
    <MemoryRouter>
      <BenchmarkResults />
    </MemoryRouter>,
    { mocks: mocks }
  );
});

it('navigates to /results/{resultId} when a result tile is clicked', async () => {
  const history = createBrowserHistory();

  const { getByText, findByText } = renderApollo(
    <Router history={history}>
      <BenchmarkResults />
    </Router>,
    { mocks: mocks }
  );

  // Wait for spinner to disappear
  await findByText(/OnePlus6T/);

  fireEvent.click(getByText(/OnePlus6T/));

  expect(window.location.pathname).toMatch('results/8237489274829');
});
