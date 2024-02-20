import { createContext } from "react"

export const defaultItemContextData = {
    name: 'Cool Shirt',
    price: 28.00,
    description: 'A really cool shirt',
    image: 'https://placekitten.com/200/200'
}

const ItemContext = createContext(defaultItemContextData);

export default ItemContext;