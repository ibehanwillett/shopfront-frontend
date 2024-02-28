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
    const response =  await fetch('http://localhost:4001/users/', {

    method: 'POST',
    credentials: "include",
    headers: {
 
      'Content-Type': 'application/json'
 
    },
 
    body: JSON.stringify(credentials)
 
  })
 
   if (response.status === 201) {
    navigate("/")
    console.log("worked")
 }
}

export default NewUser