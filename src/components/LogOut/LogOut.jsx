import React, { useState } from 'react'
import EditForm from '../EditUser/EditForm'
import { useUserContext } from '../../app-context/UserContext'
import { useNavigate } from "react-router-dom"

const LogOut = () => {
  const navigate = useNavigate()
  const { setActiveUser, setIsAdmin, isAdmin } = useUserContext()
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
    <h3>You're logged in</h3>
    <button onClick={handleClick}>Log out?</button> 
    <button onClick={showEdit}>Account Settings</button>
    {show && <EditForm/>}
    {isAdmin && <DashboardBtn/>}
    </>
  )
}

export default LogOut
// add edit account w/  delete funtionality