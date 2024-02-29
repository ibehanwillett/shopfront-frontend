import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const DeleteBtn = () => {
    const [ show, setShow ] = useState(false)
    const navigate = useNavigate()

    const showDelete = () => {
        setShow((show)=>!show)
      }

      const handleDelete = async () => {
        const credentials = {
            password: submittedPassword
          }
    
        console.log(JSON.stringify(credentials))
    // 'https://shopfront-backend.onrender.com/users/login'
        const response =  await fetch(`https://shopfront-backend.onrender.com/users/${activeUser._id}`, {
    
        method: 'DELETE',
        credentials: "include",
        headers: {
     
          'Content-Type': 'application/json'
     
        },
     
        body: JSON.stringify(credentials)
     
      })
     
       if (response.status === 204) {
        navigate('/')
     }
    }

    const DoubleCheck = () => {
        return ( <div>
            <h4>Are you sure?</h4>
            <button onClick={handleDelete}>Yes</button>
            </div>
        )
    }

    
  return (
    <>
    <button onClick={showDelete}>Delete Account</button>
    {show && <DoubleCheck/>}
    </>
  )
}

export default DeleteBtn