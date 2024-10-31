import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <Link to="/" className="text-lg font-bold">
        Blogger
      </Link>
      <div>
        <Link to="/" className="mr-4">
          All Blogs
        </Link>
        {user ? (
          <>
            <Link to="/dashboard" className="mr-4">
              Dashboard
            </Link>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/register" className="bg-green-500 px-4 py-2 rounded">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
