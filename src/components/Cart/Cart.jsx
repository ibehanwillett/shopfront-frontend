import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../styles/cart.css";
import { useCartContext } from "../../app-context/CartContext";


function Cart({ hideCheckoutButton }) {

  // Destructure necessary functions and variables from the cart context
  const { cartItems, setCartItems, addToCart, removeFromCart, subtotal } =
    useCartContext();

  // Main render of the Cart component
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <CartItem
        // Each cart item is assigned a unique key generated by concatenating the 
        // item's id with its index in the array. This helps React identify which 
        // items have changed, are added, or are removed.
          key={`${item.id}` + `${index}`}
          name={item.name}
          price={item.price}
          image={item.image}
          onDelete={() => removeFromCart(item.id, index)}
        />
      ))}
      <div className="cart-subtotal">
        <p>Subtotal:</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      {!hideCheckoutButton && (
        <Link to="/checkout">
          <button className="checkout-button">Check Out</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
