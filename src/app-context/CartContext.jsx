import { createContext, useContext, useState } from "react"

export const CartContext = createContext()
export const CartContextProvider = CartContext.Provider
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    function addToCart(item) {
        setCartItems(cartItems.concat(item));
    }

    function removeFromCart(item) {
        const index = cartItems.indexOf(item);
        setCartItems(cartItems.splice(index, 1));
    }

    const value = { cartItems, setCartItems, addToCart, removeFromCart };

        return (
            <CartContextProvider value={value}
            >
                {children}
            </CartContextProvider>
        )
}

export const defaultCartContextData = 
[
    { id: 1, name: 'Item Name', price: 41.00 },
    { id: 2, name: 'Item Name', price: 29.00 },
    { id: 3, name: 'Item Name', price: 13.00 },
]
 

export default CartContext;