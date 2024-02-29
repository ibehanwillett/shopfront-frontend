import { createContext, useContext, useState } from "react"

// Intializes the UserContext and UserContext providers. Creates a shorthand way to use the UserContext context particularly.
export const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)
const UserContextProvider = UserContext.Provider


const UserProvider = ({children}) => {
  // Creates a state to hold the user object of who is currently logged in, and a state to hold a Boolean value indicating whether that user is an admin.
    const [activeUser, setActiveUser] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

  // A function for setting the active user. If that user is an admin it also updates the isAdmin state to true from the default false.
    const adminAndUserSet = (dbUser) => {
        setActiveUser(dbUser)
        if (dbUser.admin) {
            setIsAdmin(true)
        }
    }
  // A function for logging in a user
    const UserLogin = async (submittedEmail, submittedPassword) => {
      // creates an object supplying the email and password provided as props as values assigned to the email and password keys.
        const credentials = {
            email: submittedEmail,
            password: submittedPassword
          }
    
        // Sends a post request to the /users/login endpoint on the backend
        const response =  await fetch('https://shopfront-backend.onrender.com/users/login', {
    
        method: 'POST',
        credentials: "include",
        headers: {
     
          'Content-Type': 'application/json'
     
        },
        // The body of the request is the credential object stringified
        body: JSON.stringify(credentials)
     
      })
       // if the response from the backend has the 200 status the response body (which will be the user object) is converted into a json stored under the variable name user.
       if (response.status === 200) {
        const user = await response.json()
        // the user object updates the activeUser state and the isAdmin state if applicable.
        adminAndUserSet(user)
        // the function returns true
        return true
        // if the response status is 401 an alert is shown to the user
     } else if (response.status === 401) {
        alert("Incorrect username or password")
        // the function returns false
        return false
     } else {
      // if the function hasn't returned an error is printed to the console.
      console.error("Unknown error")
     }
    }

    // A function for editing a user's password
    const UserEdit = async(submittedPassword) => {
      // an credentials object is made with the password passed in from props providing the value for the password key.
        const credentials = {
            password: submittedPassword
          }
    
        // a patch request is sent to the user/:id endpoint. the id is the _id value of the active user
        const response =  await fetch(`https://shopfront-backend.onrender.com/users/${activeUser._id}`, {
    
        method: 'PATCH',
        credentials: "include",
        headers: {
     
          'Content-Type': 'application/json'
     
        },
        // The body of the request is the credential object stringified
        body: JSON.stringify(credentials)
     
      })
        // If the response.status of the response is 200 the function returns true
       if (response.status === 201) {
        return true
     }
     
}
 // the value variable holds the various functions and states defined in this module. This makes providing them to the context provider neater. 
    const value = { activeUser, isAdmin, adminAndUserSet, UserLogin, UserEdit, setActiveUser, setIsAdmin }
    // Returns the UserContext components which provide all data stored in "value" to all it's children. 
  return (
    <UserContextProvider value={value}>
                {children}
    </UserContextProvider>
  )
}

export default UserProvider