import React from 'react';
import '../styles/cartItem-styles.css'; 

function CartItem({ name, price }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image"></div> {/* Placeholder for the image */}
      <div className="cart-item-info">
        <p>{name}</p>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;
