import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import { ResultTile } from '../result-tile/ResultTile';

export const GET_BENCHMARK_RESULTS_QUERY = gql`
  {
    allResults {
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
    }
  }
`;

export const BenchmarkResults: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BENCHMARK_RESULTS_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  console.log(data);

  return (
    <Fragment>
      {data.allResults &&
        data.allResults.data &&
        data.allResults.data.map((result: any) => (
          <ResultTile key={result._id} result={result} />
        ))}
    </Fragment>
  );
};
