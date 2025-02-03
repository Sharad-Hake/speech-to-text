import { Navigate } from "react-router-dom";
const PublicRoutes = ({ children }) => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedIn) {
       return <Navigate to='/' />
    }
    return children;
}
export default PublicRoutes;