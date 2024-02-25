import react, { useState } from 'react';
import '../../index.css'
import '../styles/artistportal-styles.css'
import { useItems } from '../../app-context/ItemsContext'


// UPDATE (PUT) item in DB
const ItemUpdate = () => {

    const [selectedItem, setSelectedItem] = useState("disabled")
    const { items, setItems } = useItems()
    const [selectName, setSelectName] = useState('')
    const [selectCategory, setSelectCategory] = useState('disabled')
    const [selectPrice, setSelectPrice] = useState('')
    const [selectDescription, setSelectDescription] = useState('')
    const [selectSize, setSelectSize] = useState('disabled')
    const [selectFeatured, setSelectFeatured] = useState('disabled')
    const [selectImage, setSelectImage] = useState(null)

    const { updateItem } = useItems()

   
    // Update selectedItem state on selection change
    const handleSelectionChange = (event) => {

        const newSelectedItemId = event.target.value;
        setSelectedItem(event.target.value)
        const selectedItem = items.find(item => item._id === newSelectedItemId)
        if (selectedItem) {
            setSelectName(selectedItem.name)
            setSelectDescription(selectedItem.description)
            setSelectImage(selectedItem.image)
            setSelectCategory(selectedItem.category)
            setSelectSize(selectedItem.size)
            setSelectFeatured(selectedItem.featured)
            setSelectPrice(selectedItem.price)
        } else {
            setSelectName('')
            setSelectDescription('')
            setSelectCategory('disabled')
            setSelectImage(null)
            setSelectSize('disabled')
            setSelectFeatured('disabled')
            setSelectPrice('')

            alert('Failed to update item')
        }
    }

    const handleImageChange = (event) => {
        if (event.target.files[0]) {
            setSelectImage(event.target.files[0])
        } else {
            setSelectImage(null)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (selectName === '') {
            alert('Please make sure all fields are filled in.')
        }
        const updatedItem = {
            _id: selectedItem,
            name: selectName,
            description: selectDescription,
            image: selectImage,
            category: selectCategory,
            price: selectPrice,
            featured: selectFeatured,
            size: selectSize,
        }

        console.log(updatedItem)

        updateItem(updatedItem)

        setSelectName('')
        setSelectDescription('')
        setSelectCategory('disabled')
        setSelectSize('disabled')
        setSelectFeatured('disabled')
        setSelectPrice('')
        setSelectImage(null)
    }

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
                        value={selectName}
                        onChange={(e) => setSelectName(e.target.value)}
                    ></textarea>

                    <textarea 
                        name="description" 
                        placeholder="Description" 
                        id="description"
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
                        
                    <div id="contain">
                        <textarea 
                            name="price" 
                            placeholder="Price" 
                            id="price"
                            value={selectPrice}
                            onChange={(e) => setSelectPrice(e.target.value ? parseFloat(e.target.value) : '')}
                        ></textarea>

                        <div id="inputContainer">
                            <label id="imgInputLabel">Upload Image</label>
                            <input 
                                id="imgInput" 
                                type="file"
                                onChange={handleImageChange}
                            />
                        </div> 
                    </div>

                    <button >Update</button>

                </div>
            </form>
        </>
    )
}

export default ItemUpdate 