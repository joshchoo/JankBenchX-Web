import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
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
  render(
    <MockedProvider mocks={mocks}>
      <BenchmarkResults />
    </MockedProvider>
  );
});
