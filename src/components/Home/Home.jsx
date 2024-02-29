import React, { useContext } from 'react'
import '../../index.css'
import { ItemsContext } from '../../app-context/ItemsContext'
import '../styles/shop-styles.css'
import '../styles/home-styles.css'
import picture from '../../assets/watercolour_square.png'
import ShopfrontItem from '../Shopfront/ShopfrontItem'

// Home.jsx renders the Home component which is one of the Routes in App.
const Home = () => {
  // ItemsContext provides the items stored in MongoDB.
  const { items } = useContext(ItemsContext)
  // items.filter() returns items with a true value for the "featured" prop
  const featuredItems = items.filter(item => item.featured)


  // Returns JSX with all content for the Home component.
  // featuredItems.map() maps over the array, with item.id as key.
  // This approach helps React maintain state and identity across
  // re-renders.Props for the item's are passed to the child 
  // Shopfront component.
  return (
    <>
    <div className="container">
      <div className="section">
        <div id="image-container">
          <img id="home-image" src={picture} alt="Nicole Nightmare Home Image" />
        </div>
        <div id="text-container">
          <h2 className="welcome">WELCOME</h2>
          <p className="body-text">
            Welcome to the official site of Nicole Nightmare.
            Dive into the vibrant world where Brisbane meets boundless 
            creativity. Here, you'll discover a collection of 
            artworks that celebrate the beauty of the 
            Sunshine State through Nicole's unique lense.
          </p>
        </div>
      </div>
      <div className="featured-items">
          <h1 id="items-heading">Featured</h1>
          <div className="items-grid">
            {featuredItems.map((item) => (
              <ShopfrontItem
                key={item._id}
                item={item}
                link={`/item/${item._id}`}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                disableLink={false}
              />
            ))}
          </div>
        </div>
    </div>
    </>
  )
}

export default Home