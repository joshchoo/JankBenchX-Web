import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { renderApollo } from '../../test-utils';

import { ResultPage, GET_RESULT } from './ResultPage';
import { result } from './sample-data';

const mocks = [
  {
    request: {
      query: GET_RESULT,
      variables: {
        id: '8237489274829',
      },
    },
    result: result,
  },
];

it('renders without error', async () => {
  const { getByText, findByText } = renderApollo(
    <MemoryRouter>
      <ResultPage match={{ params: { resultId: '8237489274829' } }} />
    </MemoryRouter>,
    { mocks: mocks }
  );

  await findByText(/ONEPLUS A6013/);

  expect(getByText(/ONEPLUS A6013/)).toBeInTheDocument();
  expect(getByText(/sdm845/)).toBeInTheDocument();
  expect(getByText(/Image List View Fling/)).toBeInTheDocument();
  expect(getByText(/Bitmap Upload Test/)).toBeInTheDocument();
  expect(getByText(/8237489274829/)).toBeInTheDocument();
});
