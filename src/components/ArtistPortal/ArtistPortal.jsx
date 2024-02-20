import react, { useState } from 'react'
import UpdateAbout from './AboutUpdate.jsx'
import AddItem from './ItemCreate.jsx'
import DeleteItem from './ItemDelete.jsx'
import UpdateItem from './ItemUpdate.jsx'


const ArtistPortal = () => {

    const [itemName, setName] = useState("")
    const [itemPrice, setPrice] = useState(0)
    const [category, setCategory] = useState("")
    const [itemDescription, setDescription] = useState("")
    const [itemImage, setImage] = useState("")
    
    return (
        <>
            <main>
                <h2 id="page-title">Hi, Nicole{/*artist.fname*/}.</h2>
                {/* <UpdateAbout /> */}
                <AddItem 
                    setName={setName}
                    setPrice={setPrice}
                    setCategory={setCategory}
                    setDescription={setDescription}
                    setImage={setImage}
                />
                <UpdateItem />
                <DeleteItem />
            </main>
        </>
    )
}

export default ArtistPortal
