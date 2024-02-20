import React from 'react';

const DeleteItem = ({ items, onItemDeleted }) => {
    const handleDelete = () => {
        const selectedItem = document.getElementById("drop-down").value;
        if (selectedItem === "disabled") {
            alert("Please select an item to delete.");
            return;
        }

        fetch(`REPLACE-ME/${selectedItem}`, { 
            method: "DELETE",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete the item.');
            }
            onItemDeleted(selectedItem)
        })
        .catch(error => console.error("Error deleting item:", error));
    };

    return (
        <>
            <div id="components">
                <h3>Delete Item</h3>
                <select id="drop-down" defaultValue="disabled">
                    <option value="disabled">Select Item</option>
                    {items.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
                <button id="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </>
    );
};

export default DeleteItem;
