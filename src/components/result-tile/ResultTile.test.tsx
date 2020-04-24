import React from 'react';
import { render } from '../../test-utils';

import { ResultTile } from './ResultTile';

const sampleResult = {
  _id: '8237489274829',
  device_name: 'OnePlus6T',
  device_model: 'ONEPLUS A6013',
  device_board: 'sdm845',
  kernel_version:
    'Linux version 4.9.179-perf+ (OnePlus@rd-build-75) (gcc version 4.9.x 20150123 (prerelease) (GCC) ) #1 SMP PREEMPT Tue Oct 8 17:52:41 CST 2019',
  fingerprint:
    'OnePlus/OnePlus6T/OnePlus6T:10/QKQ1.190716.003/1910050400:user/release-keys',
  _ts: 1587608543465000,
  results: [
    {
      test_name: 'Bitmap Upload Test',
      score: 32,
      jank_pct: 12.3,
      bad_frame_pct: 32.7,
    },
    {
      test_name: 'Image List View Fling',
      score: 32,
      jank_pct: 12.3,
      bad_frame_pct: 32.7,
    },
  ],
};

test('renders without error and with correct data', () => {
  const { getByText } = render(<ResultTile result={sampleResult} />);
  expect(getByText(/Bitmap Upload Test/)).toBeInTheDocument();
  expect(getByText(/Image List View Fling/)).toBeInTheDocument();
  expect(getByText(/OnePlus6T/)).toBeInTheDocument();
});
