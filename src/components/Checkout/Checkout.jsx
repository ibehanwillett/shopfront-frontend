import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "../styles/checkout.css";

function Checkout() {
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    deliveryAddress: "",
    phone: "",
    creditCard: "",
    expiration: "",
    securityCode: "",
    billingName: "",
    billingAddress: "",
    billingPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

//   const isValidForm = () => {
//     const {
//       email,
//       country,
//       firstName,
//       lastName,
//       address,
//       phone,
//       creditCard,
//       expiration,
//       securityCode,
//     } = formData;
//     return (
//       email.length == true &&
//       country.length == true &&
//       firstName.length == true &&
//       lastName.length == true &&
//       address.length > 0 &&
//       phone.length > 0 &&
//       creditCard.length > 0 &&
//       expiration.length > 0 &&
//       securityCode.length > 0
//     );
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isValidForm()) {
    //   console.log("Form data:", formData);
    //   alert("Checkout successful!");
    // } else {
    //   alert("Please fill in all fields.");
    // }
      console.log("Form data:", formData);
      alert("Checkout successful!");
  };

  return (
    <div className="checkout-page">
      <form onSubmit={handleSubmit} className="checkout-form">
        <section className="contact-section">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </section>
        <section className="delivery-section">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="Australia">Australia</option>
            {/* Need to do */}
          </select>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="deliveryAddress"
            placeholder="Address"
            value={formData.deliveryAddress}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </section>
        <section className="payment-section">
          <input
            type="text"
            name="creditCard"
            placeholder="Credit Card Number"
            value={formData.creditCard}
            onChange={handleChange}
          />
          <input
            type="text"
            name="expiration"
            placeholder="Expiration Date (MM/YY)"
            value={formData.expiration}
            onChange={handleChange}
          />
          <input
            type="text"
            name="securityCode"
            placeholder="Security Code"
            value={formData.securityCode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="billingName"
            placeholder="Full Name"
            value={formData.billingName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="billingAddress"
            placeholder="Billing Address"
            value={formData.billingAddress}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="billingPhone"
            placeholder="Billing Phone"
            value={formData.billingPhone}
            onChange={handleChange}
          />
        </section>
        <button type="submit" className="pay-now-button">
          Pay Now
        </button>
      </form>
      <Cart />
    </div>
  );
}

export default Checkout;
