import { createContext, useContext, useState, useEffect } from 'react'

const ItemsContext = createContext()

export const useItems = () => useContext(ItemsContext)

export const ItemsProvider = ({ children }) => {
    
    const [items, setItems] = useState([])

    const handleItemDeleted = (deletedItemId) => {
        // Update items state to exclude the deleted item
        setItems(prevItems => prevItems.filter(item => item._id !== deletedItemId))
    };

    useEffect(() => {
        fetch("http://localhost:4001/items") 
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch(error => console.error("Failed to load shop items", error))
    }, []);

    return (
        <ItemsContext.Provider value={{ items, handleItemDeleted }}>
            {children}
        </ItemsContext.Provider>
    )
}

