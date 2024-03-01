import React, { useState } from 'react'
import AddToCartButton from './AddToCartButton'
import { Link } from 'react-router-dom'
import '../styles/shop-styles.css'


// Component to render items on the shopfront.
const ShopfrontItem = ({link, item, name, price, description, image, disableLink}) => {

  return (
    <>
    <div id="shop-items">
        <Link id="image-link" to={link}>
          <img id="item-image" src={image} alt="No Image available"/>
        </Link>   
        <div id="item-info">
          <div>
            <h3 id="item-name">{name}</h3>
            <h2 id="item-price">${price}</h2>
          </div>
          <AddToCartButton item={item}/>
        </div>
    </div>
    </>
  )
}

export default ShopfrontItem