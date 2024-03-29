import react, { useState, useContext } from 'react'
import '../../index.css'
import '../styles/artistportal-styles.css'
import { ItemsContext } from '../../app-context/ItemsContext'
import TextAreaField from './ItemComponents/TextAreaField'
import { storage } from '../../Firebase.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


// CREATE (POST) item to the DB
// Very Similar to ItemUpdate component, minus the drop-down 
// selector to choose an existing item in MongoDB.
const ItemCreate = () => {

    // initial states are set for each of the item props.
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('disabled')
    const [size, setSize] = useState('disabled')
    const [featured, setFeatured] = useState('disabled')
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState('')

    // Reset trigger is used to set the state of the TextAreaField
    const [resetTrigger, setResetTrigger] = useState(false)
    
    const { addItem } = useContext(ItemsContext)
    // handler for the image change onClick
    const handleImageChange = (event) => {
        setImage(event.target.files[0])
    }
    // A function handle to handle form submission.
    const handleSubmit = async (event) => {
        event.preventDefault()
        // Check are made to make sure all the fields have been filled 
        if (
            name === '' ||
            description === '' ||
            category === '' ||
            size === '' ||
            featured === '' ||
            price === '' ||
            image === null) {
            alert('Please make sure to fill in all the fields and include an image.')
            return;
        }
        // The uploaded image is given a unique id 
        const imageName = image.name + v4()
        const imageRef = ref(storage, `images/${imageName}`)
        uploadBytes(imageRef, image).then((uploadResult) => {
            // After successful upload, get the download URL
            return getDownloadURL(uploadResult.ref)
        }).then((downloadURL) => {
            alert('Upload successful')

        // Create newItem object with the download URL
        const newItem = {
            name,
            description,
            category,
            size,
            featured,
            price,
            image: downloadURL 
        }

        // Add the newItem to your database or state
        console.log(newItem)
        addItem(newItem)
        // The setters are all reset to their default values
        setName('')
        setDescription('')
        setCategory('disabled')
        setSize('disabled')
        setFeatured('disabled')
        setPrice('')
        setImage(null)
        setResetTrigger(prev => !prev)
        }).catch((error) => {
            // Handle any errors that occur during upload or URL retrieval
            console.error("Error uploading image: ", error)
            alert('Upload failed. Please try again.')
        });
};
    // There are multiple textareas, selects,
    // and inputs that display in the user interface. ALl of them 
    // provide a means to gather the user input which is gathered
    // to construct the object in MongoDB.
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div id="components">

                    <h3>Create Item</h3>

                    <TextAreaField 
                        id="name" 
                        placeholder="Name"
                        maxLength="18"
                        onChange={setName} 
                        resetTrigger={resetTrigger}
                    ></TextAreaField>

                    <TextAreaField 
                        id="description" 
                        placeholder="Description" 
                        onChange={setDescription} 
                        maxLength="60"
                        resetTrigger={resetTrigger}
                    ></TextAreaField>

                    <select 
                        name="category" 
                        id="drop-down" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}>
                            <option value="disabled" disabled>Item Category</option>
                            <option value="Tees">Tees</option>
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
                            <option value="true">true</option>
                            <option value="false">false</option>
                    </select>
                        
                    <div id="contain-price">
                        <input 
                            id="price" 
                            type="number"
                            value={price}
                            placeholder="Price"
                            maxLength="5"
                            onChange={(e) => {
                                const value = e.target.value
                                if (value.length <= 5) {
                                    setPrice(e.target.value ? parseFloat(e.target.value) : '')
                                }
                            }} 
                        />
                         <div id="inputContainer">
                            <label id="imgInputLabel" htmlFor="imgInput">Upload Image</label>
                            <input id="imgInput" type="file" onChange={handleImageChange}/>
                        </div>
                    </div>

                    <button id="submit-button" type="submit">Add</button>

                </div>
            </form>
        </>
    )
}

export default ItemCreate