import react, { useState, useContext } from 'react';
import '../../index.css'
import '../styles/artistportal-styles.css'
import { ItemsContext } from '../../app-context/ItemsContext'
import { storage } from '../../Firebase.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import defaultImage from '../../assets/no-image.png'

// UPDATE (PUT) item in MongoDB.
const ItemUpdate = () => {
    // Provide items and updateItem from ItemsContext.
    const { items, updateItem } = useContext(ItemsContext)
    // Create useStates for item properties with inital state.
    const [selectedItem, setSelectedItem] = useState("disabled")
    const [selectName, setSelectName] = useState('')
    const [selectCategory, setSelectCategory] = useState('disabled')
    const [selectPrice, setSelectPrice] = useState('')
    const [selectDescription, setSelectDescription] = useState('')
    const [selectSize, setSelectSize] = useState('disabled')
    const [selectFeatured, setSelectFeatured] = useState('disabled')
    const [selectImage, setSelectImage] = useState(null)
    const [isImageUpdated, setIsImageUpdated] = useState(false)
    const [initialImageUrl, setInitialImageUrl] = useState('');

   
    // Update selectedItem state on selection change
    const handleSelectionChange = (event) => {
        // Using the selected item's properties, the fields will be
        // updated with their value. This allows the user easier 
        // changes to existing data. All fields are required to
        // make an update. If all fields aren't filled, the setters
        // will update the state back to defaults.
        const newSelectedItemId = event.target.value;
        setSelectedItem(newSelectedItemId)
        const selectedItem = items.find(item => item._id === newSelectedItemId)
        console.log(selectedItem.image)
        if (selectedItem) {
            setSelectName(selectedItem.name)
            setSelectDescription(selectedItem.description)
            setInitialImageUrl(selectedItem.image)
            setIsImageUpdated(false)
            // setSelectImage(selectedItem.image)
            setSelectCategory(selectedItem.category)
            setSelectSize(selectedItem.size)
            setSelectFeatured(selectedItem.featured)
            setSelectPrice(selectedItem.price)
            
        } else {
            resetForm()
            alert('Failed to update item')
        }
    }

    // handleImageChange is passed to an onClick
    // event for the imgInput. It sets the selected image.
    const handleImageChange = (event) => {
        if (event.target.files[0]) {
            setSelectImage(event.target.files[0])
        } else {
            setSelectImage(null)
        }
    }

    // Checks are made to make sure there are no empty values
    // for all required fields.
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (
            selectName === '' ||
            selectDescription === '' ||
            selectCategory === '' ||
            selectSize === '' ||
            selectFeatured === '' ||
            selectPrice === ''
        ) {
            alert('Please make sure to fill in all the fields.')
            return;
        }

        // Images are given a unique identifier via the imported v4() function
        // THe imagesare stored in Firebase storage, the name of the image is
        // then assigned to downloadURL which is stored as  value for image
        // in the object.
        let imageUrl = initialImageUrl
        if (isImageUpdated && selectImage) { // Only update if a new image has been uploaded
            const imageRef = ref(storage, `images/${selectImage.name + v4()}`);
            const uploadResult = await uploadBytes(imageRef, selectImage);
            imageUrl = await getDownloadURL(uploadResult.ref); // Update the image URL if a new image has been uploaded
        }

            // Now, include the downloadURL in the updatedItem object
            const updatedItem = {
                _id: selectedItem,
                name: selectName,
                description: selectDescription,
                image: imageUrl,
                category: selectCategory,
                price: selectPrice,
                featured: selectFeatured,
                size: selectSize,
            };

            // Then, call the update function from your context
            updateItem(updatedItem)

            // Reset form fields after successful update
            resetForm()
    }

    const resetForm = () => {
        setSelectName('')
        setSelectDescription('')
        setSelectCategory('disabled')
        setSelectSize('disabled')
        setSelectFeatured('disabled')
        setSelectPrice('')
        setSelectImage(null)
        setSelectedItem('disabled')
        setIsImageUpdated(false)
        setInitialImageUrl('')
    }


    // There are multiple textareas, selects,
    // and inputs that display in the user interface. ALl of them 
    // provide a means to gather the user input which is gathered
    // to construct the object in MongoDB.
    return(
        <>  
            <form onSubmit={handleSubmit}>
                <div id="components">

                    <h3>Update Item</h3>

                    <select id="drop-down" value={selectedItem} onChange={handleSelectionChange}>
                        <option value="disabled">Select Item</option>
                        {items && items.map((item) => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                    </select>

                    <textarea 
                        name="name" 
                        placeholder="Name" 
                        id="name"
                        maxLength="18"
                        value={selectName}
                        onChange={(e) => setSelectName(e.target.value)}
                    ></textarea>

                    <textarea 
                        name="description" 
                        placeholder="Description" 
                        id="description"
                        maxLength="60"
                        value={selectDescription}
                        onChange={(e) => setSelectDescription(e.target.value)}
                    ></textarea>

                    <select 
                        name="category" 
                        id="drop-down" 
                        value={selectCategory} 
                        onChange={(e) => setSelectCategory(e.target.value)}>
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
                        value={selectSize}
                        onChange={(e) => setSelectSize(e.target.value)}>
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
                        value={selectFeatured}
                        onChange={(e) => setSelectFeatured(e.target.value)}>
                            <option value="disabled" disabled>Featured</option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                    </select>
                        
                    <div id="contain-price">  
                        <input 
                            id="price" 
                            type="number"
                            value={selectPrice}
                            placeholder="Price"
                            maxLength="5"
                            onChange={(e) => {
                                const value = e.target.value
                                if (value.length <= 5) {
                                    setSelectPrice(e.target.value ? parseFloat(e.target.value) : '')
                                }
                            }} 
                        />

                        <div id="inputContainer">
                            <label id="imgInputLabel" htmlFor="imgInput">Upload Image</label>
                            <input 
                                id="imgInput" 
                                type="file"
                                onChange={handleImageChange}
                            />
                        </div> 
                    </div>

                    <button id="submit-button">Update</button>

                </div>
            </form>
        </>
    )
}

export default ItemUpdate 