import "../styles/checkout.css";
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../stripe'; 
import CheckoutForm from './CheckoutForm';
import Cart from '../Cart/Cart';

// Defines a functional component named Checkout for the checkout page of the application.
function Checkout() {
  // The component's return statement defines the JSX structure to be rendered to the DOM.
  return (
    // A div element with a className of "checkout-page" serves as the container for the checkout page content.
    <div className="checkout-page">
      {/* The Elements component from Stripe's React library is used here to provide a Stripe object to the CheckoutForm. */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>    
      {/* Renders cart but hides the checkout button if already in checkout */}
      <Cart hideCheckoutButton={true} />
    </div>
  );
}

export default Checkout;
