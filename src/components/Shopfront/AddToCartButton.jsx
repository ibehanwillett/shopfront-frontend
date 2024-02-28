import React, { useState } from 'react'
import { useCartContext } from '../../app-context/CartContext'
import '../styles/shop-styles.css'


const AddToCartButton = ({ item }) => {
    const { addToCart } = useCartContext()
    const [buttonText, setButtonText] = useState("Add to cart")
    
    const handleClick = (item) => {
        setButtonText(buttonText === 'Add to cart' ? 'Added to cart!' : 'Add to cart')
        console.log(item)
        addToCart(item)
    }

  return (
    <button id="submit-button" onClick={()=>handleClick(item)}>{buttonText}</button>
  )
}

export default AddToCartButton