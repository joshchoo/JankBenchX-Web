import React from 'react';
import { TestAll } from '../../types';

export const ResultTileDetailed: React.FC<{ testDetails: TestAll }> = ({
  testDetails,
}) => {
  const {
    test_name,
    score,
    jank_pct,
    bad_frame_pct,
    consistency_bonus,
    jank_penalty,
    ms_avg,
    ms_90th_pctl,
    ms_95th_pctl,
    ms_99th_pctl,
  } = testDetails;

  return (
    <div className="my-4 w-full max-w-sm rounded bg-white shadow-2xl sm:mx-6">
      <div className="p-3 text-center text-2xl">{test_name}</div>
      {/* <div className=graph"></div> */}
      <div className="h-64 w-full flex justify-center items-center bg-gray-800 text-gray-100">
        Graph
      </div>
      <div className="p-4 flex flex-row justify-around">
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-2xl font-bold">{score}</div>
          <div className="text-sm">Score</div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-2xl font-bold">{`${jank_pct}%`}</div>
          <div className="text-sm">Jank</div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-2xl font-bold">{`${bad_frame_pct}%`}</div>
          <div className="text-sm">Bad frames</div>
        </div>
      </div>
      <div className="p-4 flex flex-row justify-around">
        <div className="flex flex-col justify-center items-center w-1/3">
          {/* TODO: Replace 60 Hz with a variable */}
          <div className="text-xl">60 Hz</div>
          <div className="text-sm">Refresh rate</div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-xl">{consistency_bonus}</div>
          <div className="text-sm">Consistency</div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-xl">{jank_penalty}</div>
          <div className="text-sm">Penalty</div>
        </div>
      </div>
      <div className="pt-2 pb-6 flex flex-col justify-center items-center text-sm">
        <div className="py-1 font-bold">Frame Details</div>
        <div className="flex flex-row justify-between w-1/2">
          <div>Average</div>
          <div>{`${ms_avg} ms`}</div>
        </div>
        <div className="flex flex-row justify-between w-1/2">
          <div>90th %ile</div>
          <div>{`${ms_90th_pctl} ms`}</div>
        </div>
        <div className="flex flex-row justify-between w-1/2">
          <div>95th %ile</div>
          <div>{`${ms_95th_pctl} ms`}</div>
        </div>
        <div className="flex flex-row justify-between w-1/2">
          <div>99th %ile</div>
          <div>{`${ms_99th_pctl} ms`}</div>
        </div>
      </div>
    </div>
  );
};
