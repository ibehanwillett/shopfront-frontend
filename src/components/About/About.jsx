import React from 'react'
import '../styles/shop-styles.css'
import '../styles/home-styles.css'
import '../styles/about-styles.css'


// Main component for the About page. Basic layout with the artist
// title and a description of their work. All element are layed out 
// with display flex and text is styled accordingly.
const About = () => {
  return (
    <>
    <main>
      <div className="about-text">
        <div>
          <h2 id="about-title" className="welcome">The Artistic Journey of Nicole Nightmare</h2>
          <p className="body-text" id='about-body-text'>
              Nicole Nightmare is an emerging artist from Brisbane, 
              making waves with her distinctive creations. Her artwork 
              serves as a mirror to her experiences growing up in Queensland's 
              vibrant Sunshine State. Unmistakably Brisbane, Nicole's 
              work delves into the exploration of form and function within the city's 
              evolving landscape.
          </p>
          <p className="body-text" id='about-body-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
              id est laborum.
          </p>
        </div>
        <div id="color-container">
          <div className="color-block"/>
        </div>
      </div>
    </main>
    </>
  )
}

export default About