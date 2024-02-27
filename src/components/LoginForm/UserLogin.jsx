import React from 'react'

const UserLogin = async (submittedEmail, submittedPassword) => {
    const credentials = {
        email: submittedEmail,
        password: submittedPassword
      }

    console.log(JSON.stringify(credentials))
// 'https://shopfront-backend.onrender.com/users/login'
    return fetch('http://localhost:4001/users/login', {

    method: 'POST',
 
    headers: {
 
      'Content-Type': 'application/json'
 
    },
 
    body: JSON.stringify(credentials)
 
  })
 
    .then(data => data.json())
}

export default UserLogin
//horse@jorsington.com
