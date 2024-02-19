import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import ShopFront from './components/Shopfront/Shopfront'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart/Cart';



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

  const[cartItems, setCartItems] = useState([])
  useEffect(() => {
    console.log("loaded")
    }, [cartItems]
  )

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopFront items={items} setCartItems= {setCartItems} />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/cart" element={<Cart cartItems={cartItems} />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App