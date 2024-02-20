import react from 'react'
import '../../index.css'
import '../styles/artistportal-styles.css'

const AddItem = () => {
    return(
        <>
            <div id="add-item">
                <h3>Add Item</h3>
                <textarea 
                    name="title" 
                    placeholder="Title" 
                    id="title"
                ></textarea>
                <select name="category" id="drop-down">
                    <option value="tees">t-shirts</option>
                    <option value="hats">hats</option>
                    <option value="art">art</option>
                    <option value="accessories">accessories</option>
                </select>
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    id="description"
                ></textarea>
            </div>
            
        </>
    )
}


export default AddItem