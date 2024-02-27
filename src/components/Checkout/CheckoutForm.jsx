import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useCartContext } from "../../app-context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkoutForm.css";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: "#666EE8",
      color: "#31325F",
      fontWeight: "300",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#121212" },
      backgroundColor: "#ffffff",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
    complete: {
      color: "#30e189",
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { subtotal } = useCartContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      console.log("Subtotal:", subtotal);

      const paymentData = {
        paymentMethodId: paymentMethod.id,
        amount: Math.round(subtotal * 100), 
      };

      const authToken = "JWT TOKEN HERE";

      fetch("http://localhost:4001/payment/process-payment", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(paymentData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          console.log("Payment Intent:", data.paymentIntent);
          navigate(`/order-confirmation/${data.paymentIntent.id}`);
        } else {
          console.error("Payment failed:", data.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
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
      <p>TEST_Subtotal: ${subtotal.toFixed(2)}</p>
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default CheckoutForm;
