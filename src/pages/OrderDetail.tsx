import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Order Detail for {id}</h1>
      {/* Add order detail components here */}
    </div>
  );
};

export default OrderDetail;