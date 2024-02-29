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
            console.log('admin')
            setIsAdmin(true)
        }
    }

    const UserLogin = async (submittedEmail, submittedPassword) => {
        const credentials = {
            email: submittedEmail,
            password: submittedPassword
          }
    
        console.log(JSON.stringify(credentials))
        const response =  await fetch('https://shopfront-backend.onrender.com/users/login', {
    
        method: 'POST',
        credentials: "include",
        headers: {
     
          'Content-Type': 'application/json'
     
        },
     
        body: JSON.stringify(credentials)
     
      })
     
       if (response.status === 200) {
        const user = await response.json()
        console.log(user)
        console.log(user.admin)
        adminAndUserSet(user)
        return true
     } else if (response.status === 401) {
        alert("Incorrect username or password")
        return false
     } else {
      console.error("Unknown error")
     }
    }

    const UserEdit = async(submittedPassword) => {
        const credentials = {
            password: submittedPassword
          }
    
        console.log(JSON.stringify(credentials))
        const response =  await fetch(`https://shopfront-backend.onrender.com/users/${activeUser._id}`, {
    
        method: 'PATCH',
        credentials: "include",
        headers: {
     
          'Content-Type': 'application/json'
     
        },
     
        body: JSON.stringify(credentials)
     
      })
     
       if (response.status === 200) {
        return true
     }
     
}

    const value = { activeUser, isAdmin, adminAndUserSet, UserLogin, UserEdit, setActiveUser, setIsAdmin }
  return (
    <UserContextProvider value={value}>
                {children}
    </UserContextProvider>
  )
}

export default UserProvider