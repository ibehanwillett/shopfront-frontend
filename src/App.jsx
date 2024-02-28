import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { useEffect, useState, useContext } from 'react'
import ShopFront from './components/Shopfront/Shopfront'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Checkout from './components/Checkout/Checkout'; 
import Cart from './components/Cart/Cart'
import LoginForm from "./components/LoginForm/LoginForm.jsx"
import LogOut from "./components/LogOut/LogOut.jsx"
import RegisterUser from "./components/RegisterUser/RegisterUser.jsx"
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import CartContext, { CartProvider } from "./app-context/CartContext"
import ArtistPortal from './components/ArtistPortal/ArtistPortal.jsx'
import Protected from "./components/Protected.jsx"
import { ItemsProvider } from './app-context/ItemsContext'
import UserProvider from './app-context/UserContext'
import ItemDetails from './components/Shopfront/ItemDetails.jsx'


function App() {

  return (
    <>
    <UserProvider>
      <ItemsProvider>
        <CartProvider>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<ShopFront/>}/>
                  <Route path="/item/:id" element={<ItemDetails/>}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/login" element={<LoginForm />}/>
                  <Route path="/logout" element={<LogOut />}/>
                  <Route path="/register" element={<RegisterUser />}/>
                  <Route path="/artistportal" element={
                    <Protected>
                      <ArtistPortal />
                  </Protected> 
                  }/>
                  <Route path="/checkout" element={<Checkout />}/>
                  <Route path="/cart" element={<Cart />}/>
                  <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
              </Routes>
          </BrowserRouter>
        </CartProvider>
      </ItemsProvider>
    </UserProvider>
    </>
  )
}

export default App