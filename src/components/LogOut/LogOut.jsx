import React from 'react'
import { useUserContext } from '../../app-context/UserContext'
import { useNavigate } from "react-router-dom"

const LogOut = () => {
    const navigate = useNavigate()
    const { setActiveUser, setIsAdmin } = useUserContext()
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

  return (
    <>
    <h3>You're logged in</h3>
    <button onClick={handleClick}>Log out?</button> 
    </>
  )
}

export default LogOut
// add edit account w/  delete funtionality