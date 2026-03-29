import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const order = {
    id,
    customer: 'Customer A',
    value: 1000,
    status: 'Open',
    daysOpen: 5,
    items: [
      { itemId: 1, description: 'Item 1', quantity: 10, deliveryDate: '2023-10-01' },
      { itemId: 2, description: 'Item 2', quantity: 5, deliveryDate: '2023-10-05' },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order Detail</h1>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-2">Order ID: {order.id}</h2>
        <p>Customer: {order.customer}</p>
        <p>Value: {order.value}</p>
        <p>Status: {order.status}</p>
        <p>Days Open: {order.daysOpen}</p>
        <h3 className="text-lg font-semibold mt-4">Items & Deliveries</h3>
        <ul>
          {order.items.map(item => (
            <li key={item.itemId}>
              {item.description} - Quantity: {item.quantity}, Delivery Date: {item.deliveryDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetail;