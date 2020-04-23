import React from 'react';
import { renderApollo } from '../../test-utils';

import {
  BenchmarkResults,
  GET_BENCHMARK_RESULTS_QUERY,
} from './BenchmarkResults';
import { result } from './benchmarkResults';

const mocks = [
  {
    request: {
      query: GET_BENCHMARK_RESULTS_QUERY,
    },
    result: result,
  },
];

test('renders without error', () => {
  renderApollo(<BenchmarkResults />, { mocks: mocks });
});
