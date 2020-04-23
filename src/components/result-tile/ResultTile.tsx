import React from 'react';
import { Result } from '../../types';

export const ResultTile: React.FC<{ result: Result }> = ({ result }) => {
  return (
    <div className="result">
      <div className="result__header">
        <div className="result__header-id">{`ID: ${result._id}`}</div>
        <div className="result__header-datetime">{result._ts}</div>
      </div>
      <div className="result__body">
        <div className="result__device-name">{`${result.device_name} - ${result.device_model}`}</div>
        <div className="result__kernel-version">{result.kernel_version}</div>
        <div className="result__tests-section">
          <table className="result__table">
            <thead>
              <tr className="result__table-header">
                <td />
                <td>Score</td>
                <td>Jank Frames</td>
                <td>Bad Frames</td>
              </tr>
            </thead>
            <tbody>
              {result.results.map((res) => {
                return (
                  <tr key={res.test_name}>
                    <td>{res.test_name}</td>
                    <td>{res.score}</td>
                    <td>{res.jank_pct}</td>
                    <td>{res.bad_frame_pct}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
