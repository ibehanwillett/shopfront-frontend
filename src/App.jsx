import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import ShopFront from './components/Shopfront'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart/Cart'; 

class Item {
  constructor(name, price, description, image) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.image = image;
  }
}

shirt = new Item("Fun shirt", 28, "Sure is a fun shirt", "https://placekitten.com/200/300")



function App() {

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopFront item={shirt} />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App