import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate("");

  const hanldeLogout = () => {
    localStorage.removeItem('userEmail');
    navigate("/")
  }
  const gotToProfile = () => {
    navigate("/viewprofile")

  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`purple-navbar fixed top-0 left-0 w-full z-50 px-6 py-0 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-xl" : " text-white"
      }`}>
      <div className="flex justify-between items-center py-4 px-8">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="HackMeet Logo"
            className="rounded-3xl max-h-12 max-w-20"
          />
          <span className="ml-2 text-4xl font-bold text-purple-700">
            HackMeet
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-purple-300">Home</Link>
            
            {localStorage.getItem("userEmail") === null ?
              <Link
              to="#"
              className="text-white hover:text-purple-300"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              About
            </Link> :
              <Link to="/about" className="text-white hover:text-purple-300">About</Link>
            }
            {localStorage.getItem("userEmail") === null ?
              <Link to="/login" className="text-gray-700 hover:text-purple-600 block" >View Hackathon </Link> :
              <Link to="/hackathons" className="text-white hover:text-purple-300">View Hackathon</Link>
            }
            {localStorage.getItem("userEmail") === null ?
              <Link to="/login" className="text-gray-700 hover:text-purple-600 block" >Organize Hackathon </Link> :
              <Link to="/organizehack" className="text-white hover:text-purple-300">Organize Hackathon</Link>
            }
            {localStorage.getItem("userEmail") === null ?
              <Link to="/login" className="text-gray-700 hover:text-purple-600 block" >Manage Hackathon </Link> :
              <Link to="/managehackathon" className="text-white hover:text-purple-300">Manage Hackathon</Link>
            }
            <Link to="/viewprofile" className="text-white hover:text-purple-300 text-[30px]"></Link>
          </div>
          {localStorage.getItem("userEmail") === null ? <>  <div className="relative">
            <Link to="/login" className="text-gray-700 hover:text-purple-600 block" >
              Login / SignIn
            </Link> </div></> :
            <>
              <div className="text-[30px] text-purple-800 hover:cursor-pointer flex gap-2">
                <div onClick={gotToProfile}>
                  <CgProfile />
                </div>
                <div onClick={hanldeLogout}>
                  <CiLogout />
                </div>
              </div>
            </>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

