import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as Sentry from '@sentry/browser';

import { ResultTile } from '../result-tile/ResultTile';
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner';
import { Result } from '../../types';
import { ErrorPage } from '../error-page/ErrorPage';

export const GET_BENCHMARK_RESULTS_QUERY = gql`
  query SortedResults($cursor: String) {
    sortedResults(_cursor: $cursor, _size: 10) {
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
      },
    }
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading) return <LoadingSpinner />;
  if (error) {
    Sentry.captureException(error);
    return <ErrorPage />;
  }

  const { after: nextCursor } = data.sortedResults;
  const endOfPage = nextCursor === null;

  const onLoadMore = () => {
    if (!endOfPage) {
      setIsLoadingMore(true);

      fetchMore({
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

          setIsLoadingMore(false);

          return newObj;
        },
      });
    }
  };

  return (
    <div className="">
      {data.sortedResults && data.sortedResults.data && (
        <AdvancedBenchmarkResultsList
          results={data.sortedResults.data}
          onLoadMore={onLoadMore}
          endOfPage={endOfPage}
          isLoadingMore={isLoadingMore}
        />
      )}
    </div>
  );
};

const BenchmarkResultsList: React.FC<any> = ({
  results,
  onLoadMore,
  history,
  isLoadingMore,
}) => {
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        results.length &&
        !isLoadingMore
      )
        onLoadMore();
    };

    window.addEventListener('scroll', onScroll, false);

    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, [results.length, onLoadMore, isLoadingMore]);

  return (
    <div className="">
      {results.map((result: Result) => (
        <ResultTile
          key={result._id}
          result={result}
          onClick={() => history.push(`/results/${result._id}`)}
        />
      ))}
    </div>
  );
};

const withPaginated = (Component: React.ComponentType) => (props: any) => {
  return (
    <div>
      <Component {...props} />
      {!props.endOfPage && !props.isLoadingMore && (
        <button onClick={props.onLoadMore}>Load more</button>
      )}
    </div>
  );
};

const AdvancedBenchmarkResultsList = compose<any, any>(
  withPaginated,
  withRouter
)(BenchmarkResultsList);
