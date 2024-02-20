import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../styles/cart.css";
import { useContext } from "react";
import { useCartContext } from "../../app-context/CartContext";

function Cart() {
  // Static data for the cart items
  // const cartItems = [
  //   { id: 1, name: 'Item Name', price: 41.00 },
  //   { id: 2, name: 'Item Name', price: 29.00 },
  //   { id: 3, name: 'Item Name', price: 13.00 },
  // ];
  
  const { cartItems, setCartItems, addToCart, removeFromCart } = useCartContext()

  
  // const handleDelete = (id) => {
  //   const updatedCartItems = cartItems.filter((item) => item.id !== id);
  //   setCartItems(updatedCartItems);
  // };


  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  console.log(cartItems[0])

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          onDelete={()=>removeFromCart(item.id)}
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
