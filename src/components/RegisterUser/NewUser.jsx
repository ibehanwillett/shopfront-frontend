import React from 'react'

const NewUser =  async (submittedEmail, submittedFirstName, submittedLastName, submittedPassword) => {
    const credentials = {
        email: submittedEmail,
        first: submittedFirstName,
        last: submittedLastName,
        password: submittedPassword
      }

    console.log(JSON.stringify(credentials))
// 'https://shopfront-backend.onrender.com/users/'
    const response =  await fetch('https://shopfront-backend.onrender.com/users/', {

    method: 'POST',
    credentials: "include",
    headers: {
 
      'Content-Type': 'application/json'
 
    },
 
    body: JSON.stringify(credentials)
 
  })
 
   if (response.status === 201) {
    const user = await response.json()
    return user
 }
}

export default NewUser