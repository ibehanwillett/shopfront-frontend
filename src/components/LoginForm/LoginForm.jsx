import React, { useState } from 'react'
import TextAreaField from "../ArtistPortal/ItemComponents/TextAreaField.jsx"
import userLogin from './UserLogin.jsx'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [resetTrigger, setResetTrigger] = useState(false)

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await userLogin(email, password)
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
        id="password" 
        placeholder="Password" 
        onChange={setPassword} 
        resetTrigger={resetTrigger} />
      </div>  
      <button type="submit" disabled={!validateForm()}>Log In</button>
  </form>
    </>
  )
}

export default LoginForm