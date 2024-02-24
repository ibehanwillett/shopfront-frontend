import React, { useState } from 'react';
import { useItems } from '../../app-context/ItemsContext'

const DeleteItem = () => {

    const [selectedItem, setSelectedItem] = useState("disabled")
    const { items, deleteItem } = useItems()

    const handleDelete = () => {

        if (selectedItem === "disabled") {
            alert("Please select an item to delete.");
            return;
        }
        deleteItem(selectedItem)

        alert("Item deleted!")
    }

    // Update selectedItem state on selection change
    const handleSelectionChange = (event) => {
        setSelectedItem(event.target.value)
    }

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
    )
}

export default DeleteItem;
