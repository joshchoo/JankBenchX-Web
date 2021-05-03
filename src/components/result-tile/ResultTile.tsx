import React from "react";
import { Result } from "../../types";
import { faunaTimestampToDate, formatDateTime } from "../../utils/datetime";

const shortenKernelText = (kernelVersion: string) => {
  const kernelRegex = /[0-9]([^\s]+)/;
  const found = kernelVersion.match(kernelRegex);
  if (found) {
    return found[0];
  } else {
    return kernelVersion;
  }
};

export const ResultTile: React.FC<{ result: Result; onClick?: () => void }> = ({ result, onClick = () => {} }) => {
  const date = faunaTimestampToDate(result._ts);

  return (
    <div
      className="shadow-xl mx-auto mt-5 mb-5 rounded bg-white max-w-sm sm:max-w-lg cursor-pointer transition ease-out duration-150 transform hover:-translate-y-2 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="">
        <div className="p-4 text-center rounded-t">
          <div className="text-2xl font-medium">{`${result.device_name} - ${result.device_model}`}</div>
          <div className="text-sm">{result.kernel_version ? shortenKernelText(result.kernel_version) : ""}</div>
        </div>
        <hr className="" />
        <div className="p-2">
          <table className="w-full">
            <thead>
              <tr className="result__table-header">
                <th />
                <th className="pr-2 text-right font-light">Score</th>
                <th className="pr-2 text-right font-light">Jank Frames</th>
                <th className="hidden pr-2 text-right font-light sm:table-cell">Bad Frames</th>
              </tr>
            </thead>
            <tbody>
              {result.results.map((res) => {
                return (
                  <tr key={res.test_name}>
                    <td className="mr-auto px-2 py-1 sm:py-2">{res.test_name}</td>
                    <td className="text-right text-xl font-bold pr-2">{res.score}</td>
                    <td className="text-right text-xl font-bold pr-2">{`${res.jank_pct.toFixed(2).toString()}%`}</td>
                    <td className="hidden text-right text-xl font-bold pr-2 sm:table-cell">
                      {`${res.bad_frame_pct.toFixed(2).toString()}%`}
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
          {`${formatDateTime(date)} - ${date
            .getUTCHours()
            .toString()
            .padStart(2, "0")}:${date.getUTCMinutes().toString().padStart(2, "0")}`}
        </div>
      </div>
    </div>
  );
};
