import React, { useState } from 'react'
import AddToCartButton from './AddToCartButton'

const ShopfrontItem = ({item, name, price, description, image}) => {

  return (
    <div>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <h6>{description}</h6>
        <img src={image}/>
        <AddToCartButton item={item}/>
    </div>
  )
}

export default ShopfrontItem