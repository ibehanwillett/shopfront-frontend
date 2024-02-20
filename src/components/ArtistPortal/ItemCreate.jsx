import react from 'react'
import '../../index.css'
import '../styles/artistportal-styles.css'


// CREATE (POST) item to the DB
const AddItem = ({ setName, setPrice, setDescription,  }) => {
    return(
        <>
            <div id="components">
                <h3>Create Item</h3>
                <textarea 
                    name="name" 
                    placeholder="Name" 
                    id="name"
                ></textarea>
                <select name="category" id="drop-down">
                    <option selected disabled>Item Category</option>
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
                <button>Add</button>
            </div>
        </>
    )
}


export default AddItem