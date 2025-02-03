import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if (!loggedIn) {
        return <Navigate to="/login" />;
    }
    return children
}
export default ProtectedRoutes;