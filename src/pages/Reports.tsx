import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '0-3 Days', orders: 4000, value: 2400 },
  { name: '4-7 Days', orders: 3000, value: 1398 },
  { name: '8-14 Days', orders: 2000, value: 9800 },
  { name: '15+ Days', orders: 2780, value: 3908 },
];

const Reports = () => {
  return (
    <div className="reports-page">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#8884d8" />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Reports;