import react from 'react'
import '../../index.css'
import '../styles/artistportal-styles.css'


// DELETE item from the DB
const DeleteItem = () => {
    return(
        <>
        <div id="components">
            <h3>Delete Item</h3>
            <select name="category" id="drop-down">
                    <option value="tees">T-shirts</option>
            </select>
            <button id="delete-button">Delete</button>
        </div>
        </>
    )
}

export default DeleteItem