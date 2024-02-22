import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../styles/cart.css";
import { useCartContext } from "../../app-context/CartContext";

function Cart() {
  
  const { cartItems, setCartItems, addToCart, removeFromCart } = useCartContext()


  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  console.log(cartItems[0])

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <CartItem
          key={`${item.id}`+`${index}`}
          name={item.name}
          price={item.price}
          image={item.image}
          onDelete={()=>removeFromCart(item.id, index)}
          // onDelete={() => handleDelete(item.id)}
        />
      ))}
      <div className="cart-subtotal">
        <p>Subtotal:</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      {/* <Link> Below breaks formatting for some reason */}
      <Link to="/checkout">
        <button className="checkout-button">Check Out</button>
      </Link>
    </div>
  );
}

export default Cart;
