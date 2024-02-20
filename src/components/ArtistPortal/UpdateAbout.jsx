import react, { useState } from 'react'
import '../styles/artistportal-styles.css'
import '../../index.css'


const UpdateAbout = () => {

    const [title, setTitle] = useState("") 
    const [bio, setBio] = useState("")

    const handleSave = async () => {
        const userData = { title, bio }
        try {
            const res = await fetch("/placeholder-api/updateUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            })

            if (res.ok) {
                console.log("Update Successful")
            } else {
                console.log("Update Failed")
            }
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    return(
        <> 
            <div id="about">
                <h3>About</h3>
                <textarea 
                    name="title" 
                    placeholder="Title" 
                    id="title"
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                    ></textarea>
                <textarea 
                    name="bio" 
                    placeholder="Bio" 
                    id="bio"
                    value={ bio }
                    onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                <button id="save-button" onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default UpdateAbout