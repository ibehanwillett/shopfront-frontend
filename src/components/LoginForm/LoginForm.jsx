import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import TextAreaField from "../ArtistPortal/ItemComponents/TextAreaField.jsx"
import userLogin from './UserLogin.jsx'
import { Link } from "react-router-dom"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [resetTrigger, setResetTrigger] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function autoLogin() {
      const response = await fetch("http://localhost:4001/users/autoLogin", {
        method: "GET",
        credentials: "include",
      });
      if (response.status === 200) {
        navigate("/logout");

      } else {
        navigate("/login");
      }
    }
    autoLogin();
  }, []);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await userLogin(email, password, navigate)
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
  <Link to='/register'>Make new account</Link>
    </>
  )
}

export default LoginForm