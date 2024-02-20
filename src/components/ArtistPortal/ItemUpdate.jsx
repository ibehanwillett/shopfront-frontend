import react from 'react';
import '../../index.css'
import '../styles/artistportal-styles.css'
import AddItem from './ItemCreate';

// UPDATE (PUT) item in DB
const UpdateItem = ({ }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        AddItem({})
    }

    return(
        <>  
            <form onSubmit={handleSubmit}>
                <div id="components">
                    <h3>Update Item</h3>
                    <select name="category" id="drop-down">
                        <option selected disabled>Select Item</option>
                    </select>
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
                    {/* <div id="contain"> */}
                        <textarea 
                            name="price" 
                            placeholder="Price" 
                            id="price"
                        ></textarea>
                        {/* <textarea 
                            name="image-url" 
                            placeholder="Image URL" 
                            id="image"
                        ></textarea> */}
                        
                        {/* <button id="update-button">Upload Image</button> */}
                    {/* </div> */}
                    <input id="imgInput" type="file"/>
                    <button >Update</button>
                </div>
            </form>
        </>
    )
}

export default UpdateItem 