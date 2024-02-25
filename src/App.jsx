import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { useEffect, useState, useContext } from 'react'
import ShopFront from './components/Shopfront/Shopfront'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Checkout from './components/Checkout/Checkout'; 
import Cart from './components/Cart/Cart'
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import CartContext, { CartProvider } from "./app-context/CartContext"
import ArtistPortal from './components/ArtistPortal/ArtistPortal.jsx'
import { useItems, ItemsProvider } from './app-context/ItemsContext'


function App() {

  return (
    <>
      <ItemsProvider>
        <CartProvider>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<ShopFront/>}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/artistportal" element={<ArtistPortal />}/>
                  <Route path="/checkout" element={<Checkout />}/>
                  <Route path="/cart" element={<Cart />}/>
                  <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
              </Routes>
          </BrowserRouter>
        </CartProvider>
      </ItemsProvider>
    </>
  )
}

export default App