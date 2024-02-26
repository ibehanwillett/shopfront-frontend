import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../styles/cart.css";
import { useCartContext } from "../../app-context/CartContext";
import { useItems } from '../../app-context/ItemsContext';


function Cart({ hideCheckoutButton }) {
  // Static data for the cart items
  // const cartItems = [
  //   { id: 1, name: 'Item Name', price: 41.00 },
  //   { id: 2, name: 'Item Name', price: 29.00 },
  //   { id: 3, name: 'Item Name', price: 13.00 },
  // ];
  

  const { items } = useItems()
  const { cartItems, setCartItems, addToCart, removeFromCart, subtotal } =
    useCartContext();




  //Updates the cart items to reflect any updates made in teh ItemsContext.jsx
  // useEffect(() => {
  //   const updatedCartItems = cartItems.filter(cartItem => 
  //     items.some(item => item._id === cartItem._id))
  //   if (updatedCartItems.length !== cartItems.length) {
  //     setCartItems(updatedCartItems)
  //   }
  // }, [items, cartItems, setCartItems])


  // console.log(cartItems[0])

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
