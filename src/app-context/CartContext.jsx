import { createContext, useContext } from "react"

export const defaultCartContextData = 
[
    { id: 1, name: 'Item Name', price: 41.00 },
    { id: 2, name: 'Item Name', price: 29.00 },
    { id: 3, name: 'Item Name', price: 13.00 },
]

const CartContext = createContext(defaultCartContextData);

export function useShoppingCart() {
    return useContext(CartContext)
} 

export default CartContext;