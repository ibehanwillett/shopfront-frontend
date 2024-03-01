import React from 'react';
import '../styles/cartItem-styles.css'; 

// Function component CartItem defined with destructuring assignment to directly access the props.
function CartItem({ name, price, image, onDelete }) {
  return (
    <div className="cart-item">
      <img src={image} className="cart-item-image"/> {/* Placeholder for the image */}
      {/* Image tag displays the item's image. The src attribute is dynamically set to the image prop passed to the component.
          The className "cart-item-image" is used to apply specific styles to the image. */}
      <div className="cart-item-info">
        <p>{name}</p>
        {/* Paragraph tag displays the price of the item. The content is dynamically set to the price prop,
            formatted to two decimal places to represent a monetary value. */}
        <p>${price.toFixed(2)}</p>
      </div>
      <button onClick={onDelete} className="cart-item-delete">✕</button>
    </div>
  );
}


export default CartItem;
