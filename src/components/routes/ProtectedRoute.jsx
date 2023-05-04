import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useSelector(state => state.authState)
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    if (isAuthenticated) {
        return children;
    }
}

export default ProtectedRoute;