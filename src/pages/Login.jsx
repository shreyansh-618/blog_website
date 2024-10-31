import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication (replace this with your actual authentication logic)
    const dummyUser = { username }; // Dummy user object
    login(dummyUser); // Call the login function
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
