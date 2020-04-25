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

export type ResultAll = {
  _id: string;
  device_name: string;
  device_model: string;
  device_board: string;
  kernel_version: string;
  fingerprint: string;
  build_type: string;
  device_hardware: string;
  device_brand: string;
  build_time: string;
  android_version: string;
  device_manufacturer: string;
  device_product: string;
  benchmark_version: string;
  run_id: number;
  _ts: number;
  refresh_rate: number;
  results: TestAll[];
};

export type TestAll = {
  test_name: string;
  score: number;
  jank_pct: number;
  bad_frame_pct: number;
  jank_penalty: number;
  consistency_bonus: number;
  ms_avg: number;
  ms_90th_pctl: number;
  ms_95th_pctl: number;
  ms_99th_pctl: number;
  total_frames: number;
};
