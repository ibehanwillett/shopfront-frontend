import React from 'react'
import '../styles/cartItem-styles.css'

const ShopFront = ({ items }) => {

  
  
//   const shirt = {
//     name: "Fun shirt",
//     price: 28,
//     description: "Sure is a fun shirt",
//     image: 
//     "https://placekitten.com/200/200" 
// }

// const things = [new Item("cool shirt", 28, "a real cool shirt", "https://placekitten.com/200/200"),
//  new Item("weird shoes", 30, "very weird shoes", "https://placekitten.com/200/200"), 
//  new Item("ugly earrings", 2, "terribly ugly earrings", "https://placekitten.com/200/200")]

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
        <button>Add to cart</button>
      </div>)
        })
      }
    </div>
    </>
  )
}

export default ShopFront