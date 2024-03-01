import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { useUserContext } from '../../app-context/UserContext.jsx'
import "../styles/login-style.css"

//  Renders the login form component
const LoginForm = () => {
  // Sets an state to hold the email
  const [email, setEmail] = useState('')
  // Sets a state to hold the password
  const [password, setPassword] = useState('')
  //  Sets a state to hold the error message
  const [errorMessage, setErrorMessage] = useState('')
    // UserLogin and adminAndUserSet are defined and managed by UserContext
  const { UserLogin, adminAndUserSet, isAdmin } = useUserContext()
  const navigate = useNavigate()

  // When the LoginForm  component is mounted, this function automatically sends a request to the autoLogin API endpoint.

  useEffect(() => {
    async function autoLogin() {
      const response = await fetch("https://shopfront-backend.onrender.com/users/autoLogin", {
        method: "GET",
        credentials: "include",
      });
      // credentials: "include" means that the browser's cookies are sent. if there is a valid JWT in that cookie the API will respond with the status code 200.

      if (response.status === 200) {
        // The response, which will be the user object, is converted into a JSON.
        const user = await response.json()
        // This JSON is used to set the active user state and change the admin state if the user is an admin.
        adminAndUserSet(user)
        // the page will redirect to the Logout component
        navigate("/logout");

      } else {
        // If the API did not return 200, the user continues on to the Login component. This does not trigger a rerender.
        navigate("/login");
      }
    }
    autoLogin();
  }, []); // This will only execute once upon mounting.

// A function for validating the form. The function will return true if both the password and the email have a length less than zero.
  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }
// A function to handle when the user submits. 
  const handleSubmit = async (event) => {
    event.preventDefault()
    // Calls the UserLogin function passing the values stored in the email and password states.
    const worked = await UserLogin(email, password)
    // If worked evaluates to true then navigate to the home page.
    if (worked) {
      navigate("/");
    } else {
      setErrorMessage("Email or password incorrect. Please try again.");
    }
  }

  
// There are two input areas, the email and the password field. Upon them being changed, their corresponding state will be updated.
// The submit button is disabled unless the email & the password are more than 0 charaters in length. 
// At the bottom there's a link to the RegisterUser component.
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