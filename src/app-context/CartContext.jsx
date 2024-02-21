import { createContext, useContext, useState } from "react"

export const CartContext = createContext()
export const CartContextProvider = CartContext.Provider
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([])

    function addToCart(item) {
        setCartItems(cartItems.concat(item));
    }

    function removeFromCart(id, index) {
        // if (cartItems[index.id] === id) {
        //    cartItems.splice(index, 1)
        // }
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
    }

    const value = { cartItems, setCartItems, addToCart, removeFromCart };

        return (
            <CartContextProvider value={value}>
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