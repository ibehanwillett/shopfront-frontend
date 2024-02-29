import React, { useState } from 'react'
import EditForm from '../EditUser/EditForm'
import { useUserContext } from '../../app-context/UserContext'
import { useNavigate } from "react-router-dom"
import "../styles/logout-style.css"


const LogOut = () => {
  const navigate = useNavigate()
  const { setActiveUser, setIsAdmin, isAdmin } = useUserContext()
  const [ show, setShow ] = useState(false)

  const handleClick = async () => {
            const response = await fetch("https://shopfront-backend.onrender.com/users/logout", {
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

    const DashboardBtn = () => {
      const goToDashboard = () => {
        navigate("/artistportal")
      }
      return (
        <button onClick={goToDashboard}>Your Dashboard</button>
      )
  
    }
  return (
    <>
    <h3 id="log-title">You're logged in</h3>
    <div class="flex-container">
    <button onClick={handleClick}>Log out?</button> 
    <button onClick={showEdit}>Account Settings</button>
    {show && <EditForm/>}
    {isAdmin && <DashboardBtn/>}
    </div>
    </>
  )
}

export default LogOut
// add edit account w/  delete funtionality