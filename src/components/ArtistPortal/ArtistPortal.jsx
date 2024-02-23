import react, { useEffect, useState } from "react"
import UpdateAbout from "./AboutUpdate.jsx"
import CreateItem from "./ItemCreate.jsx"
import DeleteItem from "./ItemDelete.jsx"
import UpdateItem from "./ItemUpdate.jsx"



const ArtistPortal = () => {

    return (
        <>
            <main>
                <h2 id="page-title">Hi, Nicole.</h2>
                <CreateItem />
                <UpdateItem />
                <DeleteItem />
            </main>
        </>
    );
};

export default ArtistPortal;
