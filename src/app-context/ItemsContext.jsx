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

    const addItem = (newItem) => {
            fetch("http://localhost:4001/items/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newItem),
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to add new item")
                }
                return res.json()
            })
            .then(addedItem => {
                setItems(prevItems => [...prevItems, addedItem])
            })
            .catch(error => console.error("Error adding item: " + error))
    }

    useEffect(() => {
        fetch("http://localhost:4001/items") 
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch(error => console.error("Failed to load shop items", error))
    }, []);

    return (
        <ItemsContext.Provider value={{ items, handleItemDeleted, deleteItem, addItem }}>
            {children}
        </ItemsContext.Provider>
    )
}

