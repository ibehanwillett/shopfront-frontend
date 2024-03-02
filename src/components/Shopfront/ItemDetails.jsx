import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ItemsContext } from '../../app-context/ItemsContext'
import AddToCartButton from './AddToCartButton'
import '../styles/shop-styles.css'
import '../styles/itemdetails-styles.css'

// Component for rendering items
const ItemDetails = () => {
    // Retrieves the 'items' array from the ItemsContext using the useContext hook.
    const { items } = useContext(ItemsContext)
    // Uses the useParams hook from React Router to extract the 'id' parameter from the URL.
    const { id } = useParams()

     // Finds the item in the 'items' array that matches the 'id' retrieved from the URL parameters.
    const item = items.find(item => item._id === id)

    // Checks if the item was not found in the array.
    if (!item) {
        return <div>Item not found</div>
    }

    // If the item is found, renders the item's details.
    return (
        <div id="item-details">
            {/* Image of the item. The 'src' is dynamically set to the item's image URL, and 'alt' is set to the item's name. */}
            <img id="item-details-image" src={item.image} alt={item.name} />
            <div className="item-info">
                {/* Section containing the item's name and price. */}
                <div className="section01">
                    <h2 id="details-name">{item.name}</h2>
                    <p id="item-price">${item.price}</p>
                </div>
                
                {/* Paragraph displaying the item's description. */}
                <p id="item-details-description">{item.description}</p>
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