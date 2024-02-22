import { createContext, useContext, useState } from "react"

export const CartContext = createContext()
export const CartContextProvider = CartContext.Provider
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([])

    function addToCart(item) {
        setCartItems(cartItems.concat(item));
    }

    function removeFromCart(id) {
        const index = cartItems.findIndex(item => item.id === id);
        
        if (index !== -1) {
            cartItems.splice(index, 1);
        }
        
        setCartItems([...cartItems]);
    }

    const value = { cartItems, setCartItems, addToCart, removeFromCart };

        return (
            <CartContextProvider value={value}>
                {children}
            </CartContextProvider>
        )
}

 

export default CartContext;