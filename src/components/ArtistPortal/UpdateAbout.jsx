import react from 'react'
import '../styles/artistportal-styles.css'
import '../../index.css'


const UpdateAbout = () => {
    return(
        <> 
            <div id="about">
                <h3>About</h3>
                <textarea name="title" placeholder="Title" id="title"></textarea>
                <textarea name="bio" placeholder="Bio" id="bio"></textarea>
                <button id="save-button">Save</button>
            </div>
        </>
    )
}

export default UpdateAbout