/* import React from 'react'

const UserEdit = async(submittedPassword) => {
        const credentials = {
            password: submittedPassword
          }
    
        console.log(JSON.stringify(credentials))
    // 'https://shopfront-backend.onrender.com/users/login'
        const response =  await fetch('http://localhost:4001/users/login', {
    
        method: 'PATCH',
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

export default UserEdit */