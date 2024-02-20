import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { useEffect, useState, useContext } from 'react'
import ShopFront from './components/Shopfront/Shopfront'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Checkout from './components/Checkout/Checkout'; 
import Cart from './components/Cart/Cart'
import CartContext, { CartProvider } from "./app-context/CartContext"
import ArtistPortal from './components/ArtistPortal/ArtistPortal.jsx'


function App() {

  const items = [
  {id:1, name:"cool shirt", price:28.00, description:"a real cool shirt", image:"https://placekitten.com/200/200"},
  {id:2, name:"weird shoes", price: 30.00, description: "very weird shoes", image: "https://placekitten.com/200/200"}, 
  {id:3, name:"ugly earrings", price: 2.00, description: "terribly ugly earrings", image: "https://placekitten.com/200/200"}
  ]


  return (
    <>
      <CartProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopFront items={items} />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/artistportal" element={<ArtistPortal />}/>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App