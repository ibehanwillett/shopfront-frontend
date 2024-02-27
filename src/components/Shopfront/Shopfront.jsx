import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../styles/cartItem-styles.css'
import ShopfrontItem from './ShopfrontItem'
import { ItemsContext } from '../../app-context/ItemsContext'
import '../styles/shop-styles.css'



const ShopFront = () => {
  
  const { items } = useContext(ItemsContext)
  const categories = ['Tees', 'Hats', 'Art', 'Accessories', 'Other']

  return (
    <>
    <main>
      <h1 id="page-title">SHOP</h1>
        <div id="items-list">
          {categories.map((category, idx) => (
            <div key={idx} className="category-section">
              <h2 id="category-title">{category}</h2> {/* Display the category name as h3 */}
              <div id="category-items">
                {items
                  .filter(item => item.category === category)
                  .map((item, index) => (
                      <ShopfrontItem
                        id={`shop-item-${category}-${index}`} // Ensuring unique id for each item
                        key={index}
                        item={item}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={item.image}
                        link={`/item/${item._id}`}
                      />
                  ))}
              </div>
            </div>
          ))}
        </div>
    </main>
    </>
  );
};

export default ShopFront