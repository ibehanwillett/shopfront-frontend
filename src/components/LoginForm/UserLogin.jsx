import React from 'react'
import { useNavigate } from "react-router-dom"

const UserLogin = async (submittedEmail, submittedPassword, navigate) => {
    const credentials = {
        email: submittedEmail,
        password: submittedPassword
      }

    console.log(JSON.stringify(credentials))
// 'https://shopfront-backend.onrender.com/users/login'
    const response =  await fetch('http://localhost:4001/users/login', {

    method: 'POST',
    credentials: "include",
    headers: {
 
      'Content-Type': 'application/json'
 
    },
 
    body: JSON.stringify(credentials)
 
  })
 
   if (response.status === 200) {
    navigate("/")
    console.log("worked")
 }
}

export default UserLogin
//horse@jorsington.com
