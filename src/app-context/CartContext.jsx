import { createContext, useContext, useState, useEffect } from "react"
import { useLocalStorage } from "react-use"

// Intializes the CartContext and CartContext provider. 
export const CartContext = createContext({})
export const CartContextProvider = CartContext.Provider
// Creates a shorthand way to use the CartContext context.
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    // Uses localStorage to store items in cart.
    const [storedItems, setStoredItems] = useLocalStorage("Items", [])
    // Creates a  state for items in cart. If nothing is in local storage use an empty array.
    const [cartItems, setCartItems] = useState(storedItems || [])
    // creates a state to store the subtotal of the items in the cart.
    const [subtotal, setSubtotal] = useState(0);

    // A function for updating the local storage
    const updateLocalStorage = () => {
        setStoredItems(cartItems)
    }
    // Whenever the cartItems change the local storage will be updated with the new cart items.
    useEffect(() => {
       updateLocalStorage()
        }, [cartItems]);

    // Whenever the cartItems change the subtotal will be updated. The price of the item is added to the current account. 
    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(newSubtotal);
    }, [cartItems]); 

    // Function to add another items to the cart. The item is added to the end of the array.
    function addToCart(item) {
        setCartItems(cartItems.concat(item));
    }

    // Function to remove an item from the cart.
    function removeFromCart(id) {
        // the index of the item to be removed is found. 
        const index = cartItems.findIndex(item => item.id === id);
        // if the index is a valid index then the item is removed from the array using splice.
        if (index !== -1) {
            cartItems.splice(index, 1);
        }
        // the cart items are reset by spreading the old array to the new array
        setCartItems([...cartItems]);
    }

    // the value variable holds the various functions and states defined in this module. This makes providing them to the context provider neater. 
    const value = { cartItems, setCartItems, addToCart, removeFromCart, subtotal };
        // Returns the CartContext components which provide all data stored in "value" to all it's children. 
        return (
            <CartContextProvider value={value}>
                {children}
            </CartContextProvider>
        )
}

 

export default CartContext;