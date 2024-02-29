import React from 'react'

// Function for creating a new user. 
const NewUser =  async (submittedEmail, submittedFirstName, submittedLastName, submittedPassword) => {
  // credentials is an object with the values being passed in as arguments.
    const credentials = {
        email: submittedEmail,
        first: submittedFirstName,
        last: submittedLastName,
        password: submittedPassword
      }

      // A POST request is made to the /users/ endpoint of the API
    const response =  await fetch('https://shopfront-backend.onrender.com/users/', {

    method: 'POST',
    credentials: "include",
    headers: {
 
      'Content-Type': 'application/json'
 
    },
      // The body of the request is a string parsed from the credentials JSON.
    body: JSON.stringify(credentials)
 
  })
  // If the status code is 201 the response from the API (which will be the user object) will be converted into a JSON and returned. 
   if (response.status === 201) {
    const user = await response.json()
    return user
 }
}

export default NewUser