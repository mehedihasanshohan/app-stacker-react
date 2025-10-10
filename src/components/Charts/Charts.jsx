import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const Charts = ({ app }) => {
  const { ratings } = app;

  const chartData = [...ratings].reverse();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        layout="vertical"
        data={chartData}
        margin={{ top: 20, right: 20, bottom: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" domain={[0, 1200]} ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]} />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="count" barSize={30} fill="#FF8811" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Charts;
