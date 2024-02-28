import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ItemsContext } from '../../app-context/ItemsContext'
import AddToCartButton from './AddToCartButton'
import '../styles/shop-styles.css'
import '../styles/itemdetails-styles.css'


const ItemDetails = () => {
    const { items } = useContext(ItemsContext)
    const { id } = useParams()

    const item = items.find(item => item._id === id)

    if (!item) {
        return <div>Item not found</div>
    }

    return (
        <div id="item-details">

            <img id="item-details-image" src={item.image} alt={item.name} />
            <div className="item-info">
                <div className="section01">
                    <h2 id="details-name">{item.name}</h2>
                    <p id="item-price">${item.price}</p>
                </div>
                
                <p>{item.description}</p>
                <div className="price-add">
                    <div>
                        <p>Size</p>
                        <div className="item-size">
                            <p id="size">{item.size}</p>
                        </div>
                    </div>
                    <AddToCartButton item={item}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default ItemDetails