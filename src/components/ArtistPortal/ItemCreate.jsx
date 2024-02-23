import react, { useState } from 'react'
import '../../index.css'
import '../styles/artistportal-styles.css'
import { useItems } from '../../app-context/ItemsContext'
import TextAreaField from './ItemComponents/TextAreaField'
import defaultImage from '../../assets/no-image.png'


// CREATE (POST) item to the DB
const CreateItem = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('Tees')
    const [size, setSize] = useState('')
    const [featured, setFeatured] = useState(false)
    const [image, setImage] = useState(defaultImage)
    const [price, setPrice] = useState(0)

    const { addItem } = useItems()
    

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name === '') {
            alert('Please provide a name for the item.');
            return; // Stop the form from submitting
        }

        const newItem = {
            name,
            description,
            category,
            size,
            featured,
            price,
            image
            
        }
        console.log(newItem)
        addItem(newItem)
        setName('') // Reset the name field to empty string
    }

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // };

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <div id="components">
                    <h3>Create Item</h3>
                    <TextAreaField id="name" placeholder="Name" onChange={setName}></TextAreaField>
                    {/* <textarea 
                        name="name" 
                        placeholder="Name" 
                        id="name"
                        onSubmit={handleNameChange}
                    ></textarea> */}
                    <TextAreaField id="description" placeholder="Description" onChange={setDescription}></TextAreaField>
                    {/* <textarea 
                        name="description" 
                        placeholder="Description" 
                        id="description"
                    ></textarea> */}
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
                        <TextAreaField id="price" placeholder="Price" onChange={setPrice}></TextAreaField>
                        {/* <textarea 
                            name="price" 
                            placeholder="Price" 
                            id="price"
                        ></textarea> */}
                         <div id="inputContainer">
                            <label id="imgInputLabel">Upload Image</label>
                            <input id="imgInput" type="file"/>
                        </div>
                    </div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    )
}

export default CreateItem