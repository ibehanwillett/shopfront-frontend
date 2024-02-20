import react, { useEffect, useState } from "react"
import UpdateAbout from "./AboutUpdate.jsx"
import CreateItem from "./ItemCreate.jsx"
import DeleteItem from "./ItemDelete.jsx"
import UpdateItem from "./ItemUpdate.jsx"

// [
//     {
//         id: "ObjectId",
//         category: "Tees",
//         name: "Another Tee Name",
//         price: 39.00,
//         description: "Item description",
//         image: "url_to_image", 
//         stock: 40
//     },
//     {
//         id: "ObjectId",
//         category: "Tees",
//         name: "Another Tee Name",
//         price: 39.00,
//         description: "Item description",
//         image: "url_to_image", 
//         stock: 40
//     },
// ]


const ArtistPortal = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("url") 
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch(error => console.error("Failed to load shop items", error))
    }, []);

    const handleItemDeleted = (deletedItemId) => {
        setItems(prevItems => prevItems.filter(item => item.id !== deletedItemId));
    };

    return (
        <>
            <main>
                <h2 id="page-title">Hi, Nicole.</h2>
                <CreateItem />
                <UpdateItem />
                <DeleteItem items={items} onItemDeleted={handleItemDeleted} />
            </main>
        </>
    );
};

export default ArtistPortal;
