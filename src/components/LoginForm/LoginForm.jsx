import React, { useState } from 'react'
import TextAreaField from "../ArtistPortal/ItemComponents/TextAreaField.jsx"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [resetTrigger, setResetTrigger] = useState(false)

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <>
    <form>
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
        onChange={setEmail} 
        resetTrigger={resetTrigger} />
      </div>  
      <button type="submit" disabled={!validateForm()}>Log In</button>
  </form>
    </>
  )
}

export default LoginForm