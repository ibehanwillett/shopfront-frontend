import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { useEffect, useState, useContext } from 'react'
import ShopFront from './components/Shopfront/Shopfront'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
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
          <BrowserRouter> {/* Enables navigation and URL management. */}
              <Navbar /> {/* Renders the navigation bar. */}
              <Routes> {/* Container for all the route definitions within the application. */}
                  {/* Defining routes for the application. Each Route associates a path with a component. */}
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<ShopFront/>}/>
                  <Route path="/item/:id" element={<ItemDetails/>}/> {/* Dynamic route for item details, using URL params. */}
                  <Route path="/about" element={<About />}/>
                  <Route path="/login" element={<LoginForm />}/>
                  <Route path="/logout" element={<LogOut />}/>
                  <Route path="/register" element={<RegisterUser />}/>
                  {/* Protected route wrapping the ArtistPortal component, restricting access based on wether or not the user is an admin. */}
                  <Route path="/artistportal" element={<Protected><ArtistPortal /></Protected>}/>
                  <Route path="/checkout" element={<Checkout />}/>
                  <Route path="/cart" element={<Cart />}/>
                  {/* Route for order confirmation, utilizing dynamic URL params for orderId. */}
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