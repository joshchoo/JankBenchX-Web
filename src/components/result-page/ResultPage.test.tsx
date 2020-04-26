import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { renderApollo } from '../../test-utils';

import { ResultPage, GET_RESULT } from './ResultPage';
import { result } from './sample-data';
import { nullResult } from './null-data';
import { waitForElementToBeRemoved } from '@testing-library/react';

it('renders without error', async () => {
  const resultId = '8237489274829';
  const mocks = [
    {
      request: {
        query: GET_RESULT,
        variables: {
          id: resultId,
        },
      },
      result: result,
    },
  ];

  const { getByText, getByTestId } = renderApollo(
    <MemoryRouter>
      <ResultPage match={{ params: { resultId: resultId } }} />
    </MemoryRouter>,
    { mocks: mocks }
  );

  await waitForElementToBeRemoved(() => getByTestId('spinner'));

  expect(getByText(/ONEPLUS A6013/)).toBeInTheDocument();
  expect(getByText(/sdm845/)).toBeInTheDocument();
  expect(getByText(/Image List View Fling/)).toBeInTheDocument();
  expect(getByText(/Bitmap Upload Test/)).toBeInTheDocument();
  expect(getByText(/8237489274829/)).toBeInTheDocument();
});

it('renders NotFound when received data is null', async () => {
  const resultId = '263793008906863099';
  const mockedNullResult = [
    {
      request: {
        query: GET_RESULT,
        variables: {
          id: resultId,
        },
      },
      result: nullResult,
    },
  ];

  const { getByTestId } = renderApollo(
    <MemoryRouter>
      <ResultPage match={{ params: { resultId: resultId } }} />
    </MemoryRouter>,
    { mocks: mockedNullResult }
  );

  await waitForElementToBeRemoved(() => getByTestId('spinner'));

  expect(getByTestId('not-found')).toBeInTheDocument();
});
