import react from 'react';
import '../../index.css'
import '../styles/artistportal-styles.css'

// UPDATE (PUT) item in DB
const UpdateItem = () => {
    return(
        <>
            <div id="components">
                <h3>Update Item</h3>
                <textarea 
                    name="name" 
                    placeholder="Name" 
                    id="name"
                ></textarea>
                <select name="category" id="drop-down">
                    <option value="tees">T-shirts</option>
                    <option value="hats">Hats</option>
                    <option value="art">Art</option>
                    <option value="accessories">Accessories</option>
                </select>
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    id="description"
                ></textarea>
                <div id="contain">
                    <textarea 
                        name="price" 
                        placeholder="Price" 
                        id="price"
                    ></textarea>
                    <button id="update-button">Upload Image</button>
                </div>
                <button >Update</button>
            </div>
        </>
    )
}

export default UpdateItem 