import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Day 1', value: 4000 },
  { name: 'Day 2', value: 3000 },
  { name: 'Day 3', value: 2000 },
  { name: 'Day 4', value: 2780 },
  { name: 'Day 5', value: 1890 },
  { name: 'Day 6', value: 2390 },
  { name: 'Day 7', value: 3490 },
];

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Backlog Value Over Time</h2>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Orders by Age Buckets</h2>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;