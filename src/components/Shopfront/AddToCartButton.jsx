import React, { useState } from 'react'
import { useCartContext } from '../../app-context/CartContext'
import '../styles/shop-styles.css'


// This component is responsible for adding the given item to the shopping cart.
const AddToCartButton = ({ item }) => {
  // Destructures addToCart function from the context provided by useCartContext hook.
    const { addToCart } = useCartContext()
    const [buttonText, setButtonText] = useState("Add to cart")
    
    // handleClick function is called when the button is clicked. It takes the item as an argument.
    const handleClick = (item) => {
        // Toggles the buttonText state between "Add to cart" and "Added to cart!" upon each click.
        setButtonText(buttonText === 'Add to cart' ? 'Added to cart!' : 'Add to cart')
        console.log(item)
        addToCart(item)
    }

  return (
    <button id="submit-button" onClick={()=>handleClick(item)}>{buttonText}</button>
  )
}

export default AddToCartButton