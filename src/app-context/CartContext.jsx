import { createContext, useContext, useState, useEffect } from "react"
import { useLocalStorage } from "react-use"


export const CartContext = createContext({})
export const CartContextProvider = CartContext.Provider
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    
    const [storedItems, setStoredItems] = useLocalStorage("Items", [])
    const [cartItems, setCartItems] = useState(storedItems || [])
    const [subtotal, setSubtotal] = useState(0);

    
    const updateLocalStorage = () => {
        setStoredItems(cartItems)
    }

    useEffect(() => {
       updateLocalStorage()
        }, [cartItems]);

    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(newSubtotal);
    }, [cartItems]); 

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

    const value = { cartItems, setCartItems, addToCart, removeFromCart, subtotal };

        return (
            <CartContextProvider value={value}>
                {children}
            </CartContextProvider>
        )
}

 

export default CartContext;