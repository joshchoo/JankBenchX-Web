import React from 'react';
import { render } from '../../test-utils';

import { DeviceCard } from './DeviceCard';
import { data } from './sample-data';

test('renders without error and with correct data', () => {
  const { getByText } = render(<DeviceCard deviceDetails={data} />);
  expect(getByText(/ONEPLUS A6013/)).toBeInTheDocument();
  expect(getByText(/sdm845/)).toBeInTheDocument();
  expect(getByText(/Linux version/)).toBeInTheDocument();
});
