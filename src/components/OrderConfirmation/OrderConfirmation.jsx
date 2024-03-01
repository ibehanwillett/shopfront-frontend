import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/OrderConfirmation.css';


// Component for displaying order confirmation details.
const OrderConfirmation = () => {
    // Retrieves the orderId from the URL parameters using the useParams hook from React Router.
    const { orderId } = useParams(); 

    // Hardcoded customer name for demonstration purposes. In a real application, this could be dynamic.
    const name = "Customer"; 
  
    // Defines a support email address to be displayed for users who might need assistance with their order.
    const supportEmail = "support@email.com";

    // The component returns JSX to render the confirmation message.
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
