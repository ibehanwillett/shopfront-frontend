import react from 'react'
import UpdateAbout from './UpdateAbout'
import AddItem from './AddItem.jsx'

const ArtistPortal = ({ artist }) => {
    
   return (
        <>
            <main>
                <h2>Hi, Nicole{/*artist.fname*/}.</h2>
                <UpdateAbout />
                <AddItem />
            </main>
        </>
    )
}

export default ArtistPortal
