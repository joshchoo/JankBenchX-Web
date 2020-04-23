import React from 'react';
import { useQuery, gql } from '@apollo/client';

export const GET_BENCHMARK_RESULTS_QUERY = gql`
  {
    allResults {
      data {
        device_name
        device_model
        device_board
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

const renderResults: React.FC = (results) => {
  return <div>Hello</div>;
};

export const BenchmarkResults: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BENCHMARK_RESULTS_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return renderResults(data);
};
