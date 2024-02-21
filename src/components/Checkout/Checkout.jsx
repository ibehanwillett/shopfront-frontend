import "../styles/checkout.css";
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../stripe'; 
import CheckoutForm from './CheckoutForm';
import Cart from '../Cart/Cart';

function Checkout() {
  return (
    <div className="checkout-page">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      <Cart hideCheckoutButton={true} />
    </div>
  );
}

export default Checkout;
