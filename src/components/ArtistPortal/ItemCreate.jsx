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
    const [category, setCategory] = useState('Other')
    const [size, setSize] = useState('n/a')
    const [featured, setFeatured] = useState(false)
    const [image, setImage] = useState(defaultImage)
    const [price, setPrice] = useState(0)

    const [resetTrigger, setResetTrigger] = useState(false)

    const { addItem } = useItems()
    

    const handleSubmit = (event) => {
        event.preventDefault()

        // if (name === '' || description === '' || category === '' || size === '' || featured === '' || price === '') {
        //     alert('Please make sure to fill in all the fields.');
        //     return; // Stop the form from submitting
        // }

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
        setDescription('') // Reset the description field to empty string
        setCategory('disabled')
        setSize('disabled') // Reset the size
        setFeatured('disabled') // Reset the featured field to empty string
        setPrice('') // Reset the price field to empty string
        setImage('') // Reset the image field to empty string

        setResetTrigger(prev => !prev)
    }

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // };

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

                    <select name="category" id="drop-down" defaultValue="disabled" onChange={(e) => setCategory(e.target.value)}>
                        <option value="disabled" disabled>Item Category</option>
                        <option value="Tees">T-shirts</option>
                        <option value="Hats">Hats</option>
                        <option value="Art">Art</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Other">Other</option>
                    </select>

                    <select name="size" id="drop-down" defaultValue="disabled" onChange={(e) => setSize(e.target.value)}>
                        <option value="disabled" disabled>Item Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="OS">OS</option>
                        <option value="n/a">n/a</option>
                    </select>

                    <select name="featured" id="drop-down" defaultValue="disabled" onChange={(e) => setFeatured(e.target.value)}>
                        <option value="disabled" disabled>Featured</option>
                        <option value="true">Featured Item</option>
                        <option value="false">Not Featured</option>
                    </select>
                        
                    <div id="contain">

                        <TextAreaField 
                            id="price" 
                            type="number" 
                            placeholder="Price" 
                            onChange={setPrice} 
                            resetTrigger={resetTrigger}
                        ></TextAreaField>

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