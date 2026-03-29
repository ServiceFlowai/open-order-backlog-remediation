import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Customer A', value: 1000, status: 'Open', daysOpen: 5 },
    { id: 2, customer: 'Customer B', value: 2000, status: 'Partial', daysOpen: 10 },
    { id: 3, customer: 'Customer C', value: 3000, status: 'Open', daysOpen: 15 },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Value</th>
            <th className="py-2">Status</th>
            <th className="py-2">Days Open</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="text-center">
              <td className="py-2">{order.id}</td>
              <td className="py-2">{order.customer}</td>
              <td className="py-2">{order.value}</td>
              <td className="py-2">{order.status}</td>
              <td className="py-2">{order.daysOpen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;