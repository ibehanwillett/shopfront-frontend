import React, { useContext } from 'react'
import '../../index.css'
import { ItemsContext } from '../../app-context/ItemsContext'
// import '../styles/shop-styles.css'
import '../styles/home-styles.css'
import picture from '../../assets/watercolour_square.png'


const Home = () => {

  const { items } = useContext(ItemsContext)

  return (
    <>
    <div className="container">
      <div className="section">
        <div id="image-container">
          <img id="home-image" src={picture} alt="Nicole Nightmare Home Image" />
        </div>
        <div id="text-container">
          <h2 id="welcome">WELCOME</h2>
          <p id="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
      </div>
    </div>
      
    
    </>
  )
}

export default Home