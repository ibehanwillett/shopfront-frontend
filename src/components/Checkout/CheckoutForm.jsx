import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useCartContext } from "../../app-context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkoutForm.css";

// Define CheckoutForm as a functional component.
const CheckoutForm = () => {
  // Hook into Stripe.js functionality to manage the payment process.
  const stripe = useStripe(); // Access the Stripe object for making API calls.
  const elements = useElements(); // Access Elements to gather payment method details.
  const navigate = useNavigate(); // Hook from React Router for programmatically navigating between routes.
  const { subtotal } = useCartContext(); // Access subtotal from the cart context.

  // Define the handleSubmit function that's called when the form is submitted.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    // Early exit if Stripe.js has not loaded.
    if (!stripe || !elements) {
      return;
    }

    // Retrieve the card details input by the user.
    const cardElement = elements.getElement(CardElement);

    // Create a payment method based on the card details.
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    // Handle the response from attempting to create a payment method.
    if (error) {
      console.log("[error]", error); // Log any errors that occurred.
    } else {
      console.log("[PaymentMethod]", paymentMethod); // Log the successful payment method creation.
      console.log("Subtotal:", subtotal); // Log the subtotal for debugging.

      // Prepare the payment data for sending to the backend.
      const paymentData = {
        paymentMethodId: paymentMethod.id,
        amount: Math.round(subtotal * 100), // Convert subtotal to the smallest currency unit.
      };

      // Make a POST request to the server to process the payment.
      fetch("http://localhost:4001/payment/process-payment", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
      .then(response => {
        if (!response.ok) {
          // Handle non-2xx responses.
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          // Navigate to an order confirmation page if the payment was successful.
          console.log("Payment Intent:", data.paymentIntent);
          navigate(`/order-confirmation/${data.paymentIntent.id}`);
        } else {
          // Log and handle payment failures.
          console.error("Payment failed:", data.message);
        }
      })
      .catch(error => {
        // Catch and log any errors during the fetch operation.
        console.error("Error:", error);
      });
    }
  };

  // Render the checkout form.
  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      {/* Display a card input element for the user to enter their payment details. */}
      <div className="credit-card-info">
        <CardElement />
      </div>
      {/* Collect additional information required for the payment/shipment. */}
      <input type="text" className="full-width-input" placeholder="Last Name" />
      <input type="text" className="full-width-input" placeholder="Address" />
      <input type="text" className="full-width-input" placeholder="Phone" />
      {/* Submit button for the form. */}
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default CheckoutForm;
