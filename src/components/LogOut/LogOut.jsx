import React, { useState } from 'react'
import EditForm from '../EditUser/EditForm'
import { useUserContext } from '../../app-context/UserContext'
import { useNavigate } from "react-router-dom"

const LogOut = () => {
  const navigate = useNavigate()
  const { setActiveUser, setIsAdmin } = useUserContext()
  const [ show, setShow ] = useState(false)

  const handleClick = async () => {
            const response = await fetch("http://localhost:4001/users/logout", {
                method: "GET",
                credentials: "include",
            });
                if (response.status === 200) {
                  setActiveUser('')
                  setIsAdmin(false)
                  navigate("/")
                }
    }

    const showEdit = () => {
      setShow((show)=>!show)
    }
  return (
    <>
    <h3>You're logged in</h3>
    <button onClick={handleClick}>Log out?</button> 
    <button onClick={showEdit}>Account Settings</button>
    {show && <EditForm/>}
    </>
  )
}

export default LogOut
// add edit account w/  delete funtionality