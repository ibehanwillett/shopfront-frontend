import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { useEffect, useState, useContext } from 'react'
import ShopFront from './components/Shopfront/Shopfront'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Checkout from './components/Checkout/Checkout'; 
import Cart from './components/Cart/Cart'
import CartContext, { useShoppingCart } from "./app-context/CartContext"



function App() {
  class Item {
    constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image
    }
  }

  const items = [
  new Item("cool shirt", 28.00, "a real cool shirt", "https://placekitten.com/200/200"),
  new Item("weird shoes", 30.00, "very weird shoes", "https://placekitten.com/200/200"), 
  new Item("ugly earrings", 2.00, "terribly ugly earrings", "https://placekitten.com/200/200")]

  const cartItems= useContext(CartContext)

  return (
    <>
      <CartContext.Provider value={cartItems}>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopFront items={items} />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App