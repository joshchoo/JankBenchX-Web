import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Label,
} from 'recharts';

type Props = {
  percentile: number;
  ms: number;
}[];

export const FrameDetailsGraph: React.FC<{
  data: Props;
  avgMs: number;
  refreshRate: number;
}> = ({ data, avgMs, refreshRate }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis
          dataKey="percentile"
          type="number"
          domain={[0, 99]}
          hide={true}
        />
        <YAxis
          domain={[0, (dataMax) => Math.max(Math.ceil(dataMax), 20)]}
          hide={true}
        />
        <Tooltip
          formatter={(value, name, props) =>
            `${(value as number).toFixed(2).toString()}`
          }
          labelFormatter={(label) => `${label}th percentile`}
        />
        <Area
          type="monotone"
          dataKey="ms"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="#82ca9d"
          isAnimationActive={false}
        />
        <ReferenceLine
          y={avgMs}
          label={
            <Label
              value={`average (${avgMs.toFixed(2).toString()} ms)`}
              fill="white"
              position="insideBottomLeft"
            />
          }
          stroke="white"
          strokeDasharray="2 2"
          strokeWidth={2}
        />
        <ReferenceLine
          y={1000 / refreshRate}
          label={
            <Label
              value={`deadline (${Math.floor(1000 / refreshRate)} ms)`}
              fill="white"
              position="insideBottomLeft"
            />
          }
          stroke="red"
          strokeWidth={2}
        />
        <ReferenceLine
          y={(0.75 * 1000) / refreshRate}
          label={
            <Label
              value={`bad (${Math.floor((0.75 * 1000) / refreshRate)} ms)`}
              fill="white"
              position="insideBottomLeft"
            />
          }
          stroke="orange"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
