import React from 'react';
import { Result } from '../../types';
import { faunaTimestampToDate } from '../../utils/datetime';

const formatDateTime = (date: Date) => {
  return `${date.toLocaleDateString('default', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })}`;
};

const shortenKernelText = (kernelVersion: string) => {
  const kernelRegex = /[0-9]([^\s]+)/;
  const found = kernelVersion.match(kernelRegex);
  if (found) {
    return found[0];
  } else {
    return kernelVersion;
  }
};

export const ResultTile: React.FC<{ result: Result }> = ({ result }) => {
  return (
    <div className="shadow-xl mx-auto mt-5 mb-5 rounded bg-white max-w-sm sm:max-w-lg">
      <div className="">
        <div className="p-4 text-center rounded-t bg-gray-900 text-gray-100">
          <div className="text-2xl font-medium sm:text-2xl">{`${result.device_name} - ${result.device_model}`}</div>
          <div className="text-gray-100 text-sm">
            {shortenKernelText(result.kernel_version)}
          </div>
        </div>
        <hr className="" />
        <div className="p-2">
          <table className="w-full">
            <thead>
              <tr className="result__table-header">
                <th />
                <th className="text-center font-light sm:text-lg sm:font-normal">
                  Score
                </th>
                <th className="text-center font-light sm:text-lg sm:font-normal">
                  Jank
                </th>
                <th className="hidden text-center font-light sm:table-cell sm:text-lg sm:font-normal">
                  Bad Frames
                </th>
              </tr>
            </thead>
            <tbody>
              {result.results.map((res) => {
                return (
                  <tr key={res.test_name}>
                    <td className="mr-auto px-2 py-1 sm:text-lg">
                      {res.test_name}
                    </td>
                    <td className="text-center text-xl font-bold px-2 sm:text-2xl">
                      {res.score}
                    </td>
                    <td className="text-center text-xl font-bold px-2 sm:text-2xl">{`${res.jank_pct}%`}</td>
                    <td className="hidden text-center text-xl font-bold px-2 sm:table-cell sm:text-2xl">
                      {`${res.bad_frame_pct}%`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-2 rounded-b text-sm bg-gray-900 text-gray-100">
        <div className="">{`ID: ${result._id}`}</div>
        <div className="">
          {formatDateTime(faunaTimestampToDate(result._ts))}
        </div>
      </div>
    </div>
  );
};
