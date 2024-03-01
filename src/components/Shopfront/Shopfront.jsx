import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../styles/cartItem-styles.css'
import ShopfrontItem from './ShopfrontItem'
import { ItemsContext } from '../../app-context/ItemsContext'
import '../styles/shop-styles.css'


// Defines a functional component named ShopFront. This component is responsible for rendering the shop's main page.
const ShopFront = () => {
  
  // Destructures 'items' from the ItemsContext using the useContext hook. This allows access to the items data stored in the context.
  const { items } = useContext(ItemsContext)
  
  // Defines an array of categories to organize items into different sections on the shop front.
  const categories = ['Tees', 'Hats', 'Art', 'Accessories', 'Other']

  // The component returns JSX to render the shop front UI.
  return (
    // React fragment shorthand to return multiple elements without adding an extra node to the DOM.
    <>
    <main>
      {/* Heading for the shop page. */}
      <h1 className="page-title">SHOP</h1>
        {/* Container for the list of items, divided by category. */}
        <div id="items-list">
          {/* Maps over the 'categories' array to render each category section. */}
          {categories.map((category, idx) => (
            // Container for each category section. The 'key' prop is necessary when mapping to ensure React can track each element's identity over re-renders.
            <div key={idx} className="category-section">
              {/* Title for each category section. */}
              <h2 id="category-title">{category}</h2>
              {/* Container for the items belonging to the current category. */}
              <div id="category-items">
                {/* Filters 'items' by category, then maps over the filtered array to render each item. */}
                {items
                  .filter(item => item.category === category)
                  .map((item, index) => (
                      // ShopfrontItem component represents an individual item. Props are passed to configure each item component.
                      <ShopfrontItem
                        id={`shop-item-${category}-${index}`} // Unique ID for each item component, incorporating the category and index for specificity.
                        key={index} // React key for list elements, using index.
                        item={item} // Passing the entire item object as a prop.
                        name={item.name} // Item name.
                        price={item.price} // Item price.
                        description={item.description} // Item description.
                        image={item.image} // Item image URL.
                        link={`/item/${item._id}`} // Link to the item's detail page.
                        // disableLink={false} 
                      />
                  ))}
              </div>
            </div>
          ))}
        </div>
    </main>
    </>
  )
}

export default ShopFront