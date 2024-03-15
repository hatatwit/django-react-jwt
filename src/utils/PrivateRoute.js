import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    let userId = localStorage.getItem("authTokens") == null ? false : true;

    return (
        <div>
            {userId ? <Outlet/> : <Navigate to="/login" />}
        </div>
    )
}

export default PrivateRoute;