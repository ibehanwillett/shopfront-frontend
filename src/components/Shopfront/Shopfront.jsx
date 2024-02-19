import React, { useEffect } from 'react'
import '../styles/cartItem-styles.css'
import { useCartContext } from '../../app-context/CartContext'
import ShopfrontItem from './ShopfrontItem'



const ShopFront = ({ items }) => {
  // useEffect(() => {
  //   const { addToCart } = useCartContext()
  // },[])
  const { addToCart } = useCartContext()

  return (
    <>
    <h3>BROWSE ITEMS</h3>
    <div>
      {
      items.map((item, index) => {
        return (
          <ShopfrontItem
          key={index}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
          onAdd={()=>addToCart(item)}
          /> 
        )
      // <div key={index} className="cart-item">
      //   <h4>{item.name}</h4>
      //   <h5>${item.price}</h5>
      //   <h6>{item.description}</h6>
      //   <img className="cart-item-image" src={item.image}/>
      //   <button onClick={console.log("clicked")}>Add to cart</button>
      // </div>)
        })
      }
    </div>
    </>
  )
}

export default ShopFront