import react from 'react'
import '../../index.css'
import '../styles/artistportal-styles.css'


// CREATE (POST) item to the DB
const CreateItem = () => {
    return(
        <>
            <div id="components">
                <h3>Create Item</h3>
                <textarea 
                    name="name" 
                    placeholder="Name" 
                    id="name"
                ></textarea>
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    id="description"
                ></textarea>
                <select name="category" id="drop-down" defaultValue="disabled">
                    <option value="disabled" disabled>Item Category</option>
                    <option value="tees">T-shirts</option>
                    <option value="hats">Hats</option>
                    <option value="art">Art</option>
                    <option value="accessories">Accessories</option>
                </select>
                <select name="size" id="drop-down" defaultValue="disabled">
                    <option value="disabled" disabled>Item Size</option>
                    <option value="S">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="M">XL</option>
                    <option value="L">OS</option>
                    <option value="M">n/a</option>
                </select>
                <select name="featured" id="drop-down" defaultValue="disabled">
                    <option value="disabled" disabled>Featured</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                    
                <div id="contain">
                    <textarea 
                        name="price" 
                        placeholder="Price" 
                        id="price"
                    ></textarea>
                    <label for="imgInput" id="fileInputLabel">Upload Image</label>
                    <input id="imgInput" type="file"/>
                </div>
                
                <button>Add</button>
            </div>
        </>
    )
}


export default CreateItem