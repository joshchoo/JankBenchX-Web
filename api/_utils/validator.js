const yup = require('yup');
const faunadb = require('faunadb');
const q = faunadb.query;

/*
 By default, Javascript serializes floats with trailing zeroes in the decimal places into integers (i.e '1.0' becomes '1')
 Fauna interprets integer-looking floats as integers, and stores them as integers.
 However, Fauna sends errors when using their GraphQL API to request this stored integer as a float.
 To force Fauna to interpret our number as a float-type, we need to transform our numbers with query.ToDouble() method.
 */
yup.addMethod(yup.object, 'toDouble', function () {
  return this.transform(function (value, originalValue) {
    if (typeof originalValue !== 'number') {
      return value;
    }

    return q.ToDouble(originalValue);
  });
});

const faunaDouble = yup
  .object({
    raw: yup.object({
      to_double: yup.number().required(),
    }),
  })
  .toDouble();

const testSchema = yup.object().shape({
  test_name: yup.string().max(80).required(),
  score: yup.number().integer().required(),
  jank_penalty: yup.number().integer().required(),
  consistency_bonus: yup.number().integer().required(),
  jank_pct: faunaDouble.required(),
  bad_frame_pct: faunaDouble.required(),
  total_frames: yup.number().integer().required(),
  ms_avg: faunaDouble.required(),
  ms_10th_pctl: faunaDouble.required(),
  ms_20th_pctl: faunaDouble.required(),
  ms_30th_pctl: faunaDouble.required(),
  ms_40th_pctl: faunaDouble.required(),
  ms_50th_pctl: faunaDouble.required(),
  ms_60th_pctl: faunaDouble.required(),
  ms_70th_pctl: faunaDouble.required(),
  ms_80th_pctl: faunaDouble.required(),
  ms_90th_pctl: faunaDouble.required(),
  ms_95th_pctl: faunaDouble.required(),
  ms_99th_pctl: faunaDouble.required(),
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
