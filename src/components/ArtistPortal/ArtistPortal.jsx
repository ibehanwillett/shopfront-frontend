import react from 'react'
import UpdateAbout from './AboutUpdate.jsx'
import AddItem from './ItemAdd.jsx'
import DeleteItem from './ItemDelete.jsx'
import UpdateItem from './ItemUpdate.jsx'

const ArtistPortal = ({ artist }) => {
    
   return (
        <>
            <main>
                <h2>Hi, Nicole{/*artist.fname*/}.</h2>
                {/* <UpdateAbout /> */}
                <AddItem />
                <DeleteItem />
                <UpdateItem />
            </main>
        </>
    )
}

export default ArtistPortal
