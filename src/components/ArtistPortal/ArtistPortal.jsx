import react, { useEffect, useState } from 'react'
import UpdateAbout from './AboutUpdate.jsx'
import CreateItem from './ItemCreate.jsx'
import DeleteItem from './ItemDelete.jsx'
import UpdateItem from './ItemUpdate.jsx'


const ArtistPortal = () => {

    
    const [categories, setCategories] = useState([])
    const [items, setItem] = useState([])
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => res.json())
        .then((data) => setCategories(data))

        fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
            .then((res) => res.json())
            .then((data) => setItem(data))
    }, [])
    
    // function not in use atm
    async function addItem(cat_id, content) {

        const newId = items.length
        const newEntry = {
            category: categories[cat_id]._id,
            content: content,
        }
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEntry)
        })
        const data = await res.json()
        setItem([...items, data])
        return newId
    }

    return (
        <>
            <main>
                <h2 id="page-title">Hi, Nicole.</h2>
                <AddItem />
                <UpdateItem 
                    item={items[name]} />
                <DeleteItem />
            </main>
        </>
    )
}

export default ArtistPortal
