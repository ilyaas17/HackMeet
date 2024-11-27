import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate("");

const hanldeLogout = ()=>{
    localStorage.removeItem('userEmail');
    navigate("/")
}

  return (
    <nav className="purple-navbar fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="HackMeet Logo"
            className="rounded-3xl max-h-12 max-w-20"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <Link to="/home" className="text-white hover:text-purple-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300">
              About
            </Link>
            <Link to="/community" className="text-white hover:text-purple-300">
              Community
            </Link>
            <Link to="/hackathon" className="text-white hover:text-purple-300">
              Hackathon
            </Link>
            <Link
              to="/viewprofile"
              className="text-white hover:text-purple-300 text-[30px]"
            >
              <CgProfile />
            </Link>
          </div>
        {localStorage.getItem("userEmail")===null?<>  <div className="relative">
            <Link
              to="/login"
              className="text-gray-700 hover:text-purple-600 block"
            >
              Login / SignIn
              
            </Link>
          </div></>:
          <>
          <div className="text-[30px] text-purple-800 hover:cursor-pointer" onClick={hanldeLogout}>
          <CiLogout />
          </div>
          </>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
