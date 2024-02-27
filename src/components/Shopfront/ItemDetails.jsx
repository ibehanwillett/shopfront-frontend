import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ItemsContext } from '../../app-context/ItemsContext'
import AddToCartButton from './AddToCartButton'
import '../styles/shop-styles.css'


const ItemDetails = () => {
    const { items } = useContext(ItemsContext)
    const { id } = useParams()

    const item = items.find(item => item._id === id)

    if (!item) {
        return <div>Item not found</div>
    }

    return (
        <div id="item-details">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <AddToCartButton item={item}/>
        </div>
    )
}

export default ItemDetails