const yup = require('yup');

const testSchema = yup.object().shape({
  test_name: yup.string().max(80).required(),
  score: yup.number().integer().required(),
  jank_penalty: yup.number().integer().required(),
  consistency_bonus: yup.number().integer().required(),
  jank_pct: yup.number().required(),
  bad_frame_pct: yup.number().required(),
  total_frames: yup.number().integer().required(),
  ms_avg: yup.number().required(),
  ms_90th_pctl: yup.number().required(),
  ms_95th_pctl: yup.number().required(),
  ms_99th_pctl: yup.number().required(),
});

exports.resultsSchema = yup.object().shape({
  run_id: yup.number().integer().required(),
  benchmark_version: yup.string().max(10).required(),
  device_name: yup.string().max(80).required(),
  device_model: yup.string().max(80).required(),
  device_product: yup.string().max(80).required(),
  device_board: yup.string().max(80).required(),
  device_manufacturer: yup.string().max(80).required(),
  device_brand: yup.string().max(80).required(),
  device_hardware: yup.string().max(80).required(),
  android_version: yup.string().max(80).required(),
  build_type: yup.string().max(80).required(),
  build_time: yup.string().max(80).required(),
  fingerprint: yup.string().max(120).required(),
  kernel_version: yup.string().max(200),
  results: yup.array().of(testSchema).min(1).required(),
  refresh_rate: yup.number().integer().required(),
});
