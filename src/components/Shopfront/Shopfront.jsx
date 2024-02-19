import React, { useState } from 'react'
import '../styles/cartItem-styles.css'
import { useCartContext } from '../../app-context/CartContext'
import ShopfrontItem from './ShopfrontItem'



const ShopFront = ({ items }) => {

  const { addToCart } = useCartContext()
  const [buttonText, setButtonText] = useState("Add to cart")

  const handleClick = (item) => {
    setButtonText(buttonText === 'Add to cart' ? 'Added to cart!' : 'Add to cart')
    addToCart(item)
  }

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
          buttonText={buttonText}
          onAdd={()=> handleClick(item)}
          /> 
        )
        })
      }
    </div>
    </>
  )
}

export default ShopFront