import React, { useState } from 'react';
import { useItems } from './ItemsContext'

const DeleteItem = () => {

    const [selectedItem, setSelectedItem] = useState("disabled")
    const { items, handleItemDeleted } = useItems()

    const handleDelete = () => {

        if (selectedItem === "disabled") {
            alert("Please select an item to delete.");
            return;
        }
        fetch(`http://localhost:4001/items/${selectedItem}`, {
            method: "DELETE",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete the item.')
            }
            handleItemDeleted(selectedItem); 
        })
        .catch(error => console.error("Error deleting item:", error))
    };

    // Update selectedItem state on selection change
    const handleSelectionChange = (event) => {
        setSelectedItem(event.target.value)
    };

    return (
        <>
            <div id="components">
                <h3>Delete Item</h3>
                <select id="drop-down" value={selectedItem} onChange={handleSelectionChange}>
                    <option value="disabled">Select Item</option>
                    {items && items.map((item) => (
                        <option key={item._id} value={item._id}>{item.name}</option>
                    ))}
                </select>
                <button id="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </>
    );
};

export default DeleteItem;
