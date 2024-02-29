import React, { useState, useContext } from 'react';
import { ItemsContext } from '../../app-context/ItemsContext'

const ItemDelete = () => {

    const [selectedItem, setSelectedItem] = useState("disabled")
    const { items, deleteItem } = useContext(ItemsContext)

    const handleDelete = () => {

        if (selectedItem === "disabled") {
            alert("Please select an item to delete.")
            return;
        }
        deleteItem(selectedItem)
        setSelectedItem("disabled")
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
                <select     
                    data-testid="drop-down" 
                    id="drop-down" 
                    value={selectedItem} 
                    onChange={handleSelectionChange}
                >
                    <option value="disabled">Select Item</option>
                    {items && items.map((item) => (
                        <option key={item._id} value={item._id}>{item.name}</option>
                    ))}
                </select>
                <button id="submit-button" onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default ItemDelete
