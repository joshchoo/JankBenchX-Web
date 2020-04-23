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

export type Test = {
  test_name: string;
  score: number;
  jank_pct: number;
  bad_frame_pct: number;
};
