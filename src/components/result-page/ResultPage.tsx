import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_RESULT = gql`
  query findResultById($id: ID!) {
    findResultByID(id: $id) {
      _id
      device_name
      build_type
      fingerprint
      device_hardware
      device_model
      device_brand
      run_id
      benchmark_version
      device_board
      kernel_version
      build_time
      android_version
      device_manufacturer
      device_product
      _ts
      results {
        test_name
        jank_pct
        bad_frame_pct
        score
        jank_penalty
        consistency_bonus
        ms_avg
        ms_90th_pctl
        ms_95th_pctl
        ms_99th_pctl
        total_frames
      }
    }
  }
`;

export const ResultPage: React.FC<any> = ({
  match: {
    params: { resultId },
  },
}) => {
  const { loading, error, data } = useQuery(GET_RESULT, {
    variables: { id: resultId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error :(</div>;

  const result = data.findResultByID;

  const {
    _id,
    device_name,
    build_type,
    fingerprint,
    device_hardware,
    device_model,
    device_brand,
    run_id,
    benchmark_version,
    device_board,
    kernel_version,
    build_time,
    android_version,
    device_manufacturer,
    device_product,
    _ts,
    results,
  } = result;
  return <div>Result</div>;
};
