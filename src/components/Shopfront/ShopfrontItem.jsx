import React, { useState } from 'react'
import AddToCartButton from './AddToCartButton'

const ShopfrontItem = ({item, name, price, description, image}) => {

  return (
    <div>
        <h4>{name}</h4>
        <img src={image} alt="No Image available"/>
        <h5>${price}</h5>
        <h6>{description}</h6>
        <AddToCartButton item={item}/>
    </div>
  )
}

export default ShopfrontItem