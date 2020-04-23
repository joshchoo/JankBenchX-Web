import React from 'react';
import { Result } from '../../types';

export const ResultTile: React.FC<{ result: Result }> = ({ result }) => {
  return <div>{result.device_name}</div>;
};
