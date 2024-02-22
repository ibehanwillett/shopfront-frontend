import react from 'react'
import '../../index.css'
import '../styles/artistportal-styles.css'


// CREATE (POST) item to the DB
const CreateItem = () => {

    return(
        <>
            <form action="">
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
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="OS">OS</option>
                        <option value="n/a">n/a</option>
                    </select>
                    <select name="featured" id="drop-down" defaultValue="disabled">
                        <option value="disabled" disabled>Featured</option>
                        <option value="true">Featured Item</option>
                        <option value="false">Not Featured</option>
                    </select>
                        
                    <div id="contain">
                        <textarea 
                            name="price" 
                            placeholder="Price" 
                            id="price"
                        ></textarea>
                         <div id="inputContainer">
                            <label id="imgInputLabel">Upload Image</label>
                            <input id="imgInput" type="file"/>
                        </div>
                    </div>
                    <button>Add</button>
                </div>
            </form>
        </>
    )
}


export default CreateItem