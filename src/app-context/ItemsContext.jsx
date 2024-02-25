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

    const updateItem = (itemToUpdate) => {
        
        if (!itemToUpdate._id) {
            console.error("Error updating item: missing item ID");
            return
        }
        fetch(`http://localhost:4001/items/${itemToUpdate._id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(itemToUpdate),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to update item")
            }
            return res.json()
        })
        .then(updatedItem => {
            setItems(prevItems => {
                return prevItems.map(item => {
                    if (item._id === updatedItem._id) {
                        return updatedItem; // Replace the old item with the updated one
                    }
                    return item; // Leave all other items unchanged
                });
            });
        })
        .catch(error => console.error("Error updating item: " + error));
    };
    

    useEffect(() => {
        fetch("http://localhost:4001/items") 
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch(error => console.error("Failed to load shop items", error))
    }, []);

    return (
        <ItemsContext.Provider value={{ items, handleItemDeleted, deleteItem, addItem, updateItem }}>
            {children}
        </ItemsContext.Provider>
    )
}

