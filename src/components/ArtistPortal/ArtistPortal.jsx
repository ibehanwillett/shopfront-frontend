import react, { useEffect, useState } from "react"
import UpdateAbout from "./AboutUpdate.jsx"
import ItemCreate from "./ItemCreate.jsx"
import ItemDelete from "./ItemDelete.jsx"
import ItemUpdate from "./ItemUpdate.jsx"


// Artist portal is made up of 4 main elements, title,
// item create, item update, item delete. It's one of
// provided in App.
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
