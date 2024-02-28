import { createContext, useContext, useState } from "react"


export const UserContext = createContext()
export const UserContextProvider = UserContext.Provider
export const useUserContext = () => useContext(UserContext)

const UserProvider = ({children}) => {
    const [activeUser, setActiveUser] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

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
        const user = await response.json()
        console.log(user)
        console.log(user.admin)
        adminAndUserSet(user)
        return true
     } else {
        return false
     }
    }

    const value = { activeUser, isAdmin, adminAndUserSet, UserLogin, setActiveUser, setIsAdmin }
  return (
    <UserContextProvider value={value}>
                {children}
    </UserContextProvider>
  )
}

export default UserProvider