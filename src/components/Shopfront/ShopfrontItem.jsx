import React, { useState } from 'react'

const ShopfrontItem = ({name, price, description, image, buttonText, onAdd}) => {

  return (
    <div>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <h6>{description}</h6>
        <img src={image}/>
        <button onClick={onAdd}>{buttonText}</button>
    </div>
  )
}

export default ShopfrontItem