import { Navigate } from "react-router-dom"
import { useUserContext } from "../app-context/UserContext.jsx"


// Component to secure routes
const Protected = ({ children }) => {
    
    // Destructures the isAdmin property from the context provided by useUserContext.
    const { isAdmin } = useUserContext()

    // Checks if the isAdmin flag is false (indicating the user is not an admin).
    if (!isAdmin) {
        // If the user is not an admin, redirect them to the home page ('/').
        // The <Navigate> component from react-router-dom is used to redirect the user.
        // The 'replace' prop replaces the current entry in the history stack, preventing the user from navigating back to the protected page.
        return <Navigate to="/" replace />
    }
    // If the user is an admin, render the children components passed to Protected.
    // This allows the content within <Protected> tags to be conditionally displayed based on the user's admin status.
    return children;
  };
  export default Protected