import React from 'react'
import '../styles/cartItem-styles.css'
import ShopfrontItem from './ShopfrontItem'
import { useItems } from '../../app-context/ItemsContext'



const ShopFront = () => {
  
  const { items } = useItems()

  return (
    <>
    <h3>BROWSE ITEMS</h3>
    <div>
      {
      items.map((item, index) => {
        return (
          <ShopfrontItem
            key={index}
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