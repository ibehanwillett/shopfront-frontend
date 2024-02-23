import { createContext, useContext, useState, useEffect } from 'react'

const ItemsContext = createContext()

export const useItems = () => useContext(ItemsContext)

export const ItemsProvider = ({ children }) => {
    
    const [items, setItems] = useState([])

    const handleItemDeleted = (deletedItemId) => {
        // Update items state to exclude the deleted item
        setItems(prevItems => prevItems.filter(item => item._id !== deletedItemId))
    };

    const deleteItem = (itemId) => {
        fetch(`http://localhost:4001/items/${itemId}`, {
            method: "DELETE",
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to delete the item")
            }
            handleItemDeleted(itemId)
        })
        .catch(error => console.error("Error deleting item: ", error))
    }

    useEffect(() => {
        fetch("http://localhost:4001/items") 
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch(error => console.error("Failed to load shop items", error))
    }, []);

    return (
        <ItemsContext.Provider value={{ items, handleItemDeleted, deleteItem }}>
            {children}
        </ItemsContext.Provider>
    )
}

