import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import TextAreaField from "../ArtistPortal/ItemComponents/TextAreaField.jsx"
import NewUser from './NewUser.jsx'
import { useUserContext } from '../../app-context/UserContext.jsx'

//  A component for creating a new user
const RegisterUser = () => {
  // sets state to hold and update the email value
    const [email, setEmail] = useState('')
    // sets state to hold and update the firstName value
    const [firstName, setFirstName] = useState('')
    // sets state to hold and update the lastName value
    const [lastName, setLastName] = useState('')
    // sets state to hold and update the password value
    const [password, setPassword] = useState('')
    // sets state to clear the text area
    const [resetTrigger, setResetTrigger] = useState(false)
    // adminAndUserSet is a state changer managed by UserContext
    const { adminAndUserSet } = useUserContext()
    // Intializes a short hand for calling the useNavigate hook
    const navigate = useNavigate()

    // A function for validating the form. The function will return true if both the password, email  firstName and lastName have a length less than zero.
  const validateForm = () => {
    return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0
  }

  // Function to submit the form. Calls the NewUser function and supplies the values stored in the email, FirstName, LastName and password states.
  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = await NewUser(email, firstName, lastName, password)
    // if user is truthy, as in if there's value stored in the variable which means the function performed as expected,
    // the use the user object to set the activeUser and IsAdmin states.
    if (user) {
      adminAndUserSet(user)
      // mounts the home component
      navigate('/')
    }
  }

  // Creates a form with four areas of input. 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
      <input 
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextAreaField
        id="firstName" 
        placeholder="First Name" 
        onChange={setFirstName} 
        resetTrigger={resetTrigger} />
      </div>
      <div>
        <TextAreaField
        id="lastName" 
        placeholder="Last Name" 
        onChange={setLastName} 
        resetTrigger={resetTrigger} />
      </div>
      <div>
        <input 
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div> 
      <button type="submit" disabled={!validateForm()}>Make account</button>
  </form>
    </>
  )
}

export default RegisterUser