import React from 'react';
import { TestAll } from '../../types';
import { FrameDetailsGraph } from '../frame-details-graph/FrameDetailsGraph';

export const ResultTileDetailed: React.FC<{
  testDetails: TestAll;
  refreshRate: number;
}> = ({ testDetails, refreshRate }) => {
  const {
    test_name,
    score,
    jank_pct,
    bad_frame_pct,
    consistency_bonus,
    jank_penalty,
    ms_avg,
    ms_10th_pctl,
    ms_20th_pctl,
    ms_30th_pctl,
    ms_40th_pctl,
    ms_50th_pctl,
    ms_60th_pctl,
    ms_70th_pctl,
    ms_80th_pctl,
    ms_90th_pctl,
    ms_95th_pctl,
    ms_99th_pctl,
  } = testDetails;

  const graphData = [
    {
      percentile: 0,
      ms: ms_10th_pctl,
    },
    {
      percentile: 10,
      ms: ms_10th_pctl,
    },
    {
      percentile: 20,
      ms: ms_20th_pctl,
    },
    {
      percentile: 30,
      ms: ms_30th_pctl,
    },
    {
      percentile: 40,
      ms: ms_40th_pctl,
    },
    {
      percentile: 50,
      ms: ms_50th_pctl,
    },
    {
      percentile: 60,
      ms: ms_60th_pctl,
    },
    {
      percentile: 70,
      ms: ms_70th_pctl,
    },
    {
      percentile: 80,
      ms: ms_80th_pctl,
    },
    {
      percentile: 90,
      ms: ms_90th_pctl,
    },
    {
      percentile: 95,
      ms: ms_95th_pctl,
    },
    {
      percentile: 99,
      ms: ms_99th_pctl,
    },
  ];

  return (
    <div className="my-4 w-full max-w-sm rounded bg-white shadow-2xl sm:mx-6 hover:shadow-outline">
      <div className="p-3 text-center text-2xl">{test_name}</div>
      <div className="h-64 w-full flex justify-center items-center bg-gray-800">
        <FrameDetailsGraph
          data={graphData}
          avgMs={ms_avg}
          refreshRate={refreshRate}
        />
      </div>
      <div className="p-4 flex flex-row justify-around">
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-2xl font-bold">{score}</div>
          <div className="text-sm">Score</div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-2xl font-bold">{`${jank_pct
            .toFixed(2)
            .toString()}%`}</div>
          <div className="text-sm">Jank</div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-2xl font-bold">{`${bad_frame_pct
            .toFixed(2)
            .toString()}%`}</div>
          <div className="text-sm">Bad frames</div>
        </div>
      </div>
      <div className="p-4 flex flex-row justify-around">
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-xl">{refreshRate} Hz</div>
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
          <div>{`${ms_avg.toFixed(2).toString()} ms`}</div>
        </div>
        <div className="flex flex-row justify-between w-1/2">
          <div>90th %ile</div>
          <div>{`${ms_90th_pctl.toFixed(2).toString()} ms`}</div>
        </div>
        <div className="flex flex-row justify-between w-1/2">
          <div>95th %ile</div>
          <div>{`${ms_95th_pctl.toFixed(2).toString()} ms`}</div>
        </div>
        <div className="flex flex-row justify-between w-1/2">
          <div>99th %ile</div>
          <div>{`${ms_99th_pctl.toFixed(2).toString()} ms`}</div>
        </div>
      </div>
    </div>
  );
};
