import React from 'react'

const ShopfrontItem = ({name, price, description, image, onAdd}) => {
  return (
    <div>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <h6>{description}</h6>
        <img src={image}/>
        <button onClick={onAdd}>Add to cart</button>
    </div>
  )
}

export default ShopfrontItem