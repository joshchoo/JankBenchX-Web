import React from 'react';

// TODO: extract types to separate file
export type Test = {
  test_name: string;
  score: number;
  jank_pct: number;
  bad_frame_pct: number;
};

export type Result = {
  _id: string;
  device_name: string;
  device_model: string;
  device_board: string;
  kernel_version: string;
  fingerprint: string;
  _ts: number;
  results: Test[];
};

export const ResultTile: React.FC<{ result: Result }> = ({ result }) => {
  return <div>{result.device_name}</div>;
};
