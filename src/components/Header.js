import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      {user ? <p onClick={logoutUser}>Logout</p> : <Link to="/login">Login</Link>}

      {user && (
        <div>
          <span> | </span> 
          <span>{user.username}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
