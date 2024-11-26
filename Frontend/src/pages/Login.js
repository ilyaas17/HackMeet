import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../../src/Components/Services/Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate= useNavigate("")

  const handleSubmit= async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      console.log("Login successful:", data);
      navigate("/home")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="relative">
            <input
              type="email"
              className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUserAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        
          <div className="relative">
            <input
              type="password"
              className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md mt-6 hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
        {error&& <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
