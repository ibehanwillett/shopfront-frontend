import React from 'react'
import '../styles/cartItem-styles.css'
import ShopfrontItem from './ShopfrontItem'



const ShopFront = ({ items }) => {

  return (
    <>
    <h3>BROWSE ITEMS</h3>
    <div>
      {
      items.map((item, index) => {
        return (
          <ShopfrontItem
          key={item.id}
          item={item}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
          /> 
        )
        })
      }
    </div>
    </>
  )
}

export default ShopFront