import react, { useState } from 'react'
import '../../index.css'
import '../styles/artistportal-styles.css'
import { useItems } from '../../app-context/ItemsContext'
import TextAreaField from './ItemComponents/TextAreaField'
import defaultImage from '../../assets/no-image.png'
import axios from 'axios'


// CREATE (POST) item to the DB
const CreateItem = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('disabled')
    const [size, setSize] = useState('disabled')
    const [featured, setFeatured] = useState('disabled')
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState('')

    const [resetTrigger, setResetTrigger] = useState(false)

    const { addItem } = useItems()

    const handleImageChange = (event) => {
        const imageURL = 'https://example.com/path/to/image.jpg' // Replace this with the actual URL 
        setImage(imageURL)
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (name === '' || description === '' || category === '' || size === '' || featured === '' || price === '') {
            alert('Please make sure to fill in all the fields.')
            return;
        }

        const newItem = {
            name,
            description,
            category,
            size,
            featured,
            price,
            image  // This is now just a string, the file name
        };

        try {
            const response = await axios.post('http://localhost:4001/items/', newItem, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            addItem(response.data)
            alert("Item created successfully!")
        } catch (error) {
            console.error('Error uploading item: ', error);
            alert("There was a problem creating the item.")
        }

        // Reset form fields
        setName('')
        setDescription('')
        setCategory('disabled')
        setSize('disabled')
        setFeatured('disabled')
        setPrice('')
        setImage(null)
        setResetTrigger(prev => !prev)
    };

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <div id="components">

                    <h3>Create Item</h3>

                    <TextAreaField 
                        id="name" 
                        placeholder="Name" 
                        onChange={setName} 
                        resetTrigger={resetTrigger}
                    ></TextAreaField>

                    <TextAreaField 
                        id="description" 
                        placeholder="Description" 
                        onChange={setDescription} 
                        resetTrigger={resetTrigger}
                    ></TextAreaField>

                    <select 
                        name="category" 
                        id="drop-down" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}>
                            <option value="disabled" disabled>Item Category</option>
                            <option value="Tees">T-shirts</option>
                            <option value="Hats">Hats</option>
                            <option value="Art">Art</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Other">Other</option>
                    </select>

                    <select 
                        name="size" 
                        id="drop-down" 
                        value={size}
                        onChange={(e) => setSize(e.target.value)}>
                            <option value="disabled" disabled>Item Size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="OS">OS</option>
                            <option value="n/a">n/a</option>
                    </select>

                    <select 
                        name="featured" 
                        id="drop-down" 
                        value={featured} 
                        onChange={(e) => setFeatured(e.target.value)}>
                            <option value="disabled" disabled>Featured</option>
                            <option value="true">Featured Item</option>
                            <option value="false">Not Featured</option>
                    </select>
                        
                    <div id="contain">
                        <input 
                            id="price" 
                            type="number"
                            value={price}
                            placeholder="Price" 
                            onChange={(event) => setPrice(event.target.value ? parseFloat(event.target.value) : '')} 
                        />
                         <div id="inputContainer">
                            <label id="imgInputLabel">Upload Image</label>
                            <input id="imgInput" type="file" onChange={handleImageChange}/>
                        </div>

                    </div>

                    <button type="submit">Add</button>

                </div>
            </form>
        </>
    )
}

export default CreateItem