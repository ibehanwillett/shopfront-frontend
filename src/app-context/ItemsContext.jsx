import { createContext, useState, useEffect } from 'react'

// Create a context for items with a default empty object.
export const ItemsContext = createContext({})

// Define the ItemsProvider component, which will provide the context to its children.
export const ItemsProvider = ({ children }) => {
    // State hook to manage the items array.
    const [items, setItems] = useState([])
    // Function to handle the deletion of an item from the state.
    const handleItemDeleted = (deletedItemId) => {
        // Update items state to exclude the deleted item
        setItems(prevItems => prevItems.filter(item => item._id !== deletedItemId))
    };
    // Function to delete an item from the backend and then update the state.
    const deleteItem = (itemId) => {
        // Perform the DELETE request to the backend.
        fetch(`https://shopfront-backend.onrender.com/items/${itemId}`, {
            method: "DELETE",
        })
        .then(res => {
            if (!res.ok) {
                // If response is not ok, throw an error.
                throw new Error("Failed to delete the item")
            }
            // If delete is successful, remove the item from the state.
            handleItemDeleted(itemId)
        })
        .catch(error => console.error("Error deleting item: ", error))
    }
    
    // Function to add a new item to the backend and then update the state.
    const addItem = (newItem) => {
        // Perform the POST request to add a new item.
            fetch("https://shopfront-backend.onrender.com/items/", {
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
                // If add is successful, append the new item to the state.
                setItems(prevItems => [...prevItems, addedItem])
            })
            .catch(error => console.error("Error adding item: " + error))
    }

    // Function to update an existing item in the backend and then update the state.
    const updateItem = (itemToUpdate) => {
        
        if (!itemToUpdate._id) {
            console.error("Error updating item: missing item ID");
            return
        }
        // Perform the PUT request to update the item.
        fetch(`https://shopfront-backend.onrender.com/items/${itemToUpdate._id}`, {
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
            // If update is successful, replace the old item with the updated one in the state.
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
    // Use effect hook to fetch the initial list of items from the backend when the component mounts.
    useEffect(() => {
        fetch("https://shopfront-backend.onrender.com/items") 
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch(error => console.error("Failed to load shop items", error))
    }, [])

    // Provide the items and item manipulation functions to the children components.
    return (
        <ItemsContext.Provider value={{ items, handleItemDeleted, deleteItem, addItem, updateItem }}>
            {children}
        </ItemsContext.Provider>
    )
}

