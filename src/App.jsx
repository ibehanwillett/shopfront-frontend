import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import ShopFront from './components/Shopfront'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart/Cart'; 





function App() {

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopFront />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App