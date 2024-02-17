import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import ShopFront from './components/Shopfront'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'


import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopFront />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App