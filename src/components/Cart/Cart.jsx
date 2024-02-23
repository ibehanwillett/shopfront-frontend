import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../styles/cart.css";
import { useCartContext } from "../../app-context/CartContext";

function Cart({ hideCheckoutButton }) {
  // Static data for the cart items
  // const cartItems = [
  //   { id: 1, name: 'Item Name', price: 41.00 },
  //   { id: 2, name: 'Item Name', price: 29.00 },
  //   { id: 3, name: 'Item Name', price: 13.00 },
  // ];

  const { cartItems, setCartItems, addToCart, removeFromCart, subtotal } =
    useCartContext();

  // const handleDelete = (id) => {
  //   const updatedCartItems = cartItems.filter((item) => item.id !== id);
  //   setCartItems(updatedCartItems);
  // };

  console.log(cartItems[0]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <CartItem
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
