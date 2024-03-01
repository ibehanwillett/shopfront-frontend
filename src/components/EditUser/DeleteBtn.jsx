import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useUserContext } from '../../app-context/UserContext'

// Returns a button component for deleting a user
const DeleteBtn = () => {
    // set a state for showing/hiding the confirmation button
    const [ show, setShow ] = useState(false)
    // for calling Navigate function
    const navigate = useNavigate()
    // the activeUser data is managed by the UserContext
    const { activeUser } = useUserContext()

      // Switches the show value
    const showDelete = () => {
        setShow((show)=>!show)
      }

        // Sends a delete request to the users/:id backend endpoint. the :id is the _id of the active user.
      const handleDelete = async () => {
        const response =  await fetch(`https://shopfront-backend.onrender.com/users/${activeUser._id}`, {
    
        method: 'DELETE',
        credentials: "include",
        headers: {
     
          'Content-Type': 'application/json'
     
        },
     
      })
      // If the response indicates a successful deletation, navigate back to home
       if (response.status === 204) {
        navigate('/')
     }
    }

    // Renders another button to reconfirm the user wants to delete their account to prevent accidental deletion.
    const DoubleCheck = () => {
        return ( <div>
            <h4>Are you sure?</h4>
            <button onClick={handleDelete}>Yes</button>
            </div>
        )
    }

    // the DoubleCheck component doesn't render until the show value is true
  return (
    <>
    <button onClick={showDelete}>Delete Account</button>
    {show && <DoubleCheck/>}
    </>
  )
}

export default DeleteBtn