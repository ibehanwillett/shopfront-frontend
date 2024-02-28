import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import TextAreaField from "../ArtistPortal/ItemComponents/TextAreaField.jsx"


const EditForm = () => {
    const [password, setPassword] = useState('')
    const [resetTrigger, setResetTrigger] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        await userEdit( password, navigate)
      }

    const handleDelete = async (event) => {
        event.preventDefault()
    }

  return (
    <>
        <h3> Change password</h3>
        <form>
            <div>
        <TextAreaField
        id="password" 
        placeholder="Password" 
        onChange={setPassword} 
        resetTrigger={resetTrigger} />
        </div> 
        <button>Submit</button>
      </form>
    
        <button>Delete Account</button>
    </>
  )
}

export default EditForm