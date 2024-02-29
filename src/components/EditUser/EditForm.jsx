import React, { useState, useEffect } from 'react'
import DeleteBtn from './DeleteBtn.jsx'
import { useNavigate, Link } from "react-router-dom"
import { useUserContext } from '../../app-context/UserContext.jsx'


const EditForm = () => {
  // sets state to hold and update the password value
    const [password, setPassword] = useState('')
  // UserEdit is managed by UserContext
    const { UserEdit  } = useUserContext()
  // Intializes a short hand for calling the useNavigate hook
    const navigate = useNavigate()

    // Calls the UserEdit function, supplying the value stored in the password state. 
    const handleSubmit = async (event) => {
        event.preventDefault()
        const worked = await UserEdit(password)
        if (worked) {
          // if the function return true then the page navigates to home
          navigate("/")
        }

      }
      // Function used to validate the form. If the password is less 0 characters it'll return true.
      const validateForm = () => {
        return password.length > 0;
      }
// The button to submit will be disabled if the password is less than 0 characters.
  return (
    <>
        <h3> Change password</h3>
        {/* when the form is submitted the handleSubmit function is executed */}
        <form onSubmit={handleSubmit}>
            <div>
        <input 
        type="password"
        placeholder="Password"
        value={password}
        // When the input is changed the new value of the input is stored in the password state
        onChange={(e) => setPassword(e.target.value)}
        />
        </div> 
        <button disabled={!validateForm()}>Submit</button>
      </form>
    
        <DeleteBtn />
    </>
  )
}

export default EditForm