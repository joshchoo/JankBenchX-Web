import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import * as Sentry from '@sentry/browser';

import { ResultTile } from '../result-tile/ResultTile';
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner';
import { Result } from '../../types';
import { ErrorPage } from '../error-page/ErrorPage';

export const GET_BENCHMARK_RESULTS_QUERY = gql`
  query SortedResults($cursor: String, $size: Int) {
    sortedResults(_cursor: $cursor, _size: $size) {
      data {
        _id
        device_name
        device_model
        device_board
        kernel_version
        fingerprint
        _ts
        results {
          test_name
          score
          jank_pct
          bad_frame_pct
        }
      }
      after
      before
    }
  }
`;

export const BenchmarkResults: React.FC = () => {
  const { loading, error, data, fetchMore } = useQuery(
    GET_BENCHMARK_RESULTS_QUERY,
    {
      variables: {
        cursor: null,
        size: 1,
      },
    }
  );
  const history = useHistory();

  if (loading) return <LoadingSpinner />;
  if (error) {
    Sentry.captureException(error);
    return <ErrorPage />;
  }

  const { after: nextCursor } = data.sortedResults;

  const onLoadMore = () => {
    return fetchMore({
      query: GET_BENCHMARK_RESULTS_QUERY,
      variables: { cursor: nextCursor },
      updateQuery: (previousResult: any, { fetchMoreResult }) => {
        const previousEntry = previousResult.sortedResults;
        const newBenchmarkResults = fetchMoreResult.sortedResults.data;
        const newCursor = fetchMoreResult.sortedResults.after;
        const prevCursor = fetchMoreResult.sortedResults.before;

        const newObj = {
          sortedResults: {
            __typename: previousEntry.__typename,
            after: newCursor,
            before: prevCursor,
            data: [...previousEntry.data, ...newBenchmarkResults],
          },
        };

        return newObj;
      },
    });
  };

  return (
    <div className="">
      {data.sortedResults &&
        data.sortedResults.data &&
        data.sortedResults.data.map((result: Result) => (
          <ResultTile
            key={result._id}
            result={result}
            onClick={() => history.push(`/results/${result._id}`)}
          />
        ))}
      <button onClick={onLoadMore}>Load more</button>
    </div>
  );
};
