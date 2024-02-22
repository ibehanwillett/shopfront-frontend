import react, { useEffect, useState } from "react"
import UpdateAbout from "./AboutUpdate.jsx"
import CreateItem from "./ItemCreate.jsx"
import DeleteItem from "./ItemDelete.jsx"
import UpdateItem from "./ItemUpdate.jsx"
import { ItemsProvider } from './ItemsContext'


const ArtistPortal = () => {

    return (
        <ItemsProvider>
            <>
                <main>
                    <h2 id="page-title">Hi, Nicole.</h2>
                    <CreateItem />
                    <UpdateItem />
                    <DeleteItem />
                </main>
            </>
        </ItemsProvider>
    );
};

export default ArtistPortal;
