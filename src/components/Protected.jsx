import { Navigate } from "react-router-dom"
import { useUserContext } from "../app-context/UserContext.jsx"

const Protected = ({ children }) => {
    
    const { isAdmin } = useUserContext()

    if (!isAdmin) {
        return <Navigate to="/" replace />
    }
    return children;
  };
  export default Protected