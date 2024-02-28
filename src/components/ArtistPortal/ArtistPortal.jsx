import react, { useEffect, useState } from "react"
import UpdateAbout from "./AboutUpdate.jsx"
import ItemCreate from "./ItemCreate.jsx"
import ItemDelete from "./ItemDelete.jsx"
import ItemUpdate from "./ItemUpdate.jsx"



const ArtistPortal = () => {
    return (
        <>
            <main>
                <h2 id="page-title">Hi, Nicole.</h2>
                <ItemCreate />
                <ItemUpdate />
                <ItemDelete />
            </main>
        </>
    );
};

export default ArtistPortal;
