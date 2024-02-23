import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const { orderId } = useParams(); 
  const name = "Customer"; 
  const supportEmail = "support@email.com";

  return (
    <div className="order-confirmation-container">
      <div className="order-confirmation">
        <h1>Purchased!</h1>
        <p>Order #{orderId}</p>
        <p>Thanks for shopping with {name}, and supporting home-grown artists! You should receive an email shortly with details of your purchase. If for any reason you require assistance with your purchase, please reach out at <a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
