import React, { useState } from 'react'
import EditForm from '../EditUser/EditForm'
import { useUserContext } from '../../app-context/UserContext'
import { useNavigate } from "react-router-dom"
import "../styles/logout-style.css"


const LogOut = () => {
  // Intializes a short hand for calling the useNavigate hook
  const navigate = useNavigate()
   // setIsActiveUser, setIsAdmin, isAdmin are states and state changers managed by UserContext
  const { setActiveUser, setIsAdmin, isAdmin } = useUserContext()
  // Sets state to hold Boolean value used to determine if the DashboardBtn component should be displayed.
  const [ show, setShow ] = useState(false)

  // Function that send a GET request to the users/logout endpoint of the API.
  // If the status code indicates it was a successful request the activeUser is set to an empty string and the IsAdmin state is set to false.
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

    // Switches the show state to whatever opposite Boolean value of what is currently stored. 
    const showEdit = () => {
      setShow((show)=>!show)
    }
    
    // A button component that navigates to the artist dashboard
    const DashboardBtn = () => {
      const goToDashboard = () => {
        navigate("/artistportal")
      }
      return (
        <button onClick={goToDashboard}>Your Dashboard</button>
      )
  
    }

    // Renders a collection of buttons. 
    // If the "Account Settings" button is clicked then the EditForm component is rendered.
    // If isAdmin is true then the the DashboardBtn is rendered.
  return (
    <>
    <h3 id="log-title">You're logged in</h3>
    <div className="flex-container">
    <button onClick={handleClick}>Log out?</button> 
    <button onClick={showEdit}>Account Settings</button>
    {show && <EditForm/>}
    {isAdmin && <DashboardBtn/>}
    </div>
    </>
  )
}

export default LogOut
