import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import TextAreaField from "../ArtistPortal/ItemComponents/TextAreaField.jsx"
import NewUser from './NewUser.jsx'

const RegisterUser = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [resetTrigger, setResetTrigger] = useState(false)
    const navigate = useNavigate()

  const validateForm = () => {
    return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await NewUser(email, firstName, lastName, password, navigate)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <TextAreaField
        id="email" 
        placeholder="Email" 
        onChange={setEmail} 
        resetTrigger={resetTrigger} />
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
        <TextAreaField
        id="password" 
        placeholder="Password" 
        onChange={setPassword} 
        resetTrigger={resetTrigger} />
      </div>  
      <button type="submit" disabled={!validateForm()}>Make account</button>
  </form>
    </>
  )
}

export default RegisterUser