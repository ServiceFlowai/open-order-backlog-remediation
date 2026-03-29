import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();
  return (
    <div className="order-detail">
      <h1>Order Detail for {id}</h1>
      {/* Add order detail view and remediation panel here */}
    </div>
  );
};

export default OrderDetail;