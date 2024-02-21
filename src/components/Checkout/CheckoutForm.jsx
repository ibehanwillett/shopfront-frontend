import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import "../styles/checkoutForm.css";


const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': { color: '#fce883' },
        '::placeholder': { color: '#121212' },
        backgroundColor: '#ffffff', 
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
      },
      complete: {
        color: '#30e189',
      },
    },
  };

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // pass paymentMethod.id to backend to process the payment
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="credit-card-info">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <input type="text" className="full-width-input" placeholder="Last Name" />
      <input type="text" className="full-width-input" placeholder="Address" />
      <input type="text" className="full-width-input" placeholder="Phone" />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default CheckoutForm;