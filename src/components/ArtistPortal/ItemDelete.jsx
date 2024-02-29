import React, { useState, useContext } from 'react';
import { ItemsContext } from '../../app-context/ItemsContext'


// This function is responsible for deleting an item from
// MongoDB. useState is used to select the item for deletion.
// All items are provided with useContext(ItemsContext),
// as well as deleteItem() funtion.
// A separate function, handleDelete makes sure the selection
// isn't the disabled option, if the selection is not disabled,
// deleteItem() removes the item. setSelectedItem then resets
// to disabled.
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
    /// Inside the return statement, the `items` array, provided 
    // by the ItemsContext through useContext, is dynamically mapped 
    // to dropdown options within a select element. This mapping 
    // transforms each item in the array into a selectable HTML option, 
    // making them visible and selectable to the user in the UI. The 
    // value of each option is set to the unique `_id` of each item, 
    // adhering to MongoDB's identifier conventions, while the displayed 
    // text of each option is the `name` property of the item, making it 
    // intuitive for users as they select items by name rather than ID.
 
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
