import React from 'react';
import CartItem from './CartItem';
import '../styles/cart.css'; 

function Cart({ cartItems }) {
  // Static data for the cart items
  // const cartItems = [
  //   { id: 1, name: 'Item Name', price: 41.00 },
  //   { id: 2, name: 'Item Name', price: 29.00 },
  //   { id: 3, name: 'Item Name', price: 13.00 },
  // ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} name={item.name} price={item.price} />
      ))}
      <div className="cart-subtotal">
        <p>Subtotal:</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <button className="checkout-button">Check Out</button>
    </div>
  );
}

export default Cart;
