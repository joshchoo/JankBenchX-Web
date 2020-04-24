import React from 'react';
import { render } from '../../test-utils';

import { ResultTileDetailed } from './ResultTileDetailed';

const testDetails = {
  test_name: 'List View Fling',
  score: 32,
  jank_penalty: 54,
  consistency_bonus: 50,
  jank_pct: 12.3,
  bad_frame_pct: 32.7,
  total_frames: 9100,
  ms_avg: 9.76,
  ms_90th_pctl: 11.12,
  ms_95th_pctl: 18.54,
  ms_99th_pctl: 24.13,
};

it('renders without error and with correct data', () => {
  const { getByText } = render(
    <ResultTileDetailed testDetails={testDetails} />
  );
  expect(getByText(/List View Fling/)).toBeInTheDocument();
});
