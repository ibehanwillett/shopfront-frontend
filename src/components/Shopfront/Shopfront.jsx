import React from 'react'
import '../styles/cartItem-styles.css'
import { useCartContext } from '../../app-context/CartContext'

const ShopFront = ({ items }) => {
  const { addToCart } = useCartContext()
  return (
    <>
    <h3>BROWSE ITEMS</h3>
    <div>
      {
      items.map((item, index) => {
        return (
      <div key={index} className="cart-item">
        <h4>{item.name}</h4>
        <h5>${item.price}</h5>
        <h6>{item.description}</h6>
        <img className="cart-item-image" src={item.image}/>
        <button onClick={addToCart(item)}>Add to cart</button>
      </div>)
        })
      }
    </div>
    </>
  )
}

export default ShopFront