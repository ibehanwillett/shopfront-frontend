import React, { useState, useEffect } from 'react'
import DeleteBtn from './DeleteBtn.jsx'
import { useNavigate, Link } from "react-router-dom"
import TextAreaField from "../ArtistPortal/ItemComponents/TextAreaField.jsx"
import { useUserContext } from '../../app-context/UserContext.jsx'


const EditForm = () => {
    const [password, setPassword] = useState('')
    const [resetTrigger, setResetTrigger] = useState(false)
    const { UserEdit  } = useUserContext()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const worked = await UserEdit(password)
        if (worked) {
          navigate("/")
        }
      }

    const handleDelete = async (event) => {
        event.preventDefault()
    }

  return (
    <>
        <h3> Change password</h3>
        <form onSubmit={handleSubmit}>
            <div>
        <TextAreaField
        id="password" 
        placeholder="Password" 
        onChange={setPassword} 
        resetTrigger={resetTrigger} />
        </div> 
        <button>Submit</button>
      </form>
    
        <DeleteBtn />
    </>
  )
}

export default EditForm