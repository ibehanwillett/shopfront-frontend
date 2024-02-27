import React, { useState } from 'react'
import AddToCartButton from './AddToCartButton'
import '../styles/shop-styles.css'


const ShopfrontItem = ({item, name, price, description, image}) => {

  return (
    <>
    <div id="shop-items">
        <img id="item-image" src={image} alt="No Image available"/>
        <div id="item-info">
          <div>
            <h3 id="item-name">{name}</h3>
            <h2 id="item-price">${price}</h2>
          </div>
          {/* <h6>{description}</h6> */}
          <AddToCartButton item={item}/>
        </div>
    </div>
        
    </>
  )
}

export default ShopfrontItem