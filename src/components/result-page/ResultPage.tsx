import React from 'react';
import { gql, useQuery } from '@apollo/client';
import * as Sentry from '@sentry/browser';

import { LoadingSpinner } from '../loading-spinner/LoadingSpinner';
import { ResultAll } from '../../types';
import { ResultTileDetailed } from '../result-tile-detailed/ResultTileDetailed';
import { DeviceCard } from '../device-card/DeviceCard';
import { NotFound } from '../not-found/NotFound';
import { ErrorPage } from '../error-page/ErrorPage';

export const GET_RESULT = gql`
  query findResultById($id: ID!) {
    findResultByID(id: $id) {
      _id
      device_name
      build_type
      fingerprint
      device_hardware
      device_model
      device_brand
      device_board
      kernel_version
      build_time
      android_version
      device_manufacturer
      device_product
      _ts
      benchmark_version
      run_id
      refresh_rate
      results {
        test_name
        jank_pct
        bad_frame_pct
        score
        jank_penalty
        consistency_bonus
        ms_avg
        ms_10th_pctl
        ms_20th_pctl
        ms_30th_pctl
        ms_40th_pctl
        ms_50th_pctl
        ms_60th_pctl
        ms_70th_pctl
        ms_80th_pctl
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

  if (loading) return <LoadingSpinner />;
  if (error) {
    Sentry.captureException(error);
    return <ErrorPage />;
  }

  const result: ResultAll = data.findResultByID;

  if (!result) {
    return <NotFound />;
  }

  return (
    <div className="device-container">
      <div className="px-2">
        <DeviceCard deviceDetails={result} />
      </div>
      <div className="px-2 flex flex-row flex-wrap justify-center items-center">
        {result.results.map((testDetails) => {
          return (
            <ResultTileDetailed
              testDetails={testDetails}
              refreshRate={result.refresh_rate}
              key={testDetails.test_name}
            />
          );
        })}
      </div>
    </div>
  );
};
