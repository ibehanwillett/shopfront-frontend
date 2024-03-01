import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import TextAreaField from "../ArtistPortal/ItemComponents/TextAreaField.jsx"
import { useUserContext } from '../../app-context/UserContext.jsx'
import "../styles/login-style.css"


const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { UserLogin, adminAndUserSet, isAdmin } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    async function autoLogin() {
      const response = await fetch("https://shopfront-backend.onrender.com/users/autoLogin", {
        method: "GET",
        credentials: "include",
      });
      if (response.status === 200) {
        const user = await response.json()
        adminAndUserSet(user)
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
    const worked = await UserLogin(email, password)
    if (worked) {
      navigate("/");
    } else {
      setErrorMessage("Email or password incorrect. Please try again.");
    }
  }

  

  return (
    <>
    <form id="login-form" onSubmit={handleSubmit}>
      <div>
      <input 
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input 
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div> 
      {errorMessage && <div className="error-message">{errorMessage}</div>} 
      <button id="login-btn" type="submit" disabled={!validateForm()}>Log In</button>
      <Link to='/register' id="new-account-link">Make new account</Link>
  </form>
  
    </>
  )
}

export default LoginForm