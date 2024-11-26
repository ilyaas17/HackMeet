import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg';
import './Navbar.css'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsDropdownOpen(false);
    };

    return (
        <nav className='purple-navbar fixed w-full top-0 left-0 z-50'>
            <div className='flex justify-between items-center py-4 px-8'>
                {/* Logo */}
                <Link to='/' className='flex items-center'>
                    <img src={logo} alt="HackMeet Logo" className='rounded-3xl max-h-12 max-w-20' />
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center space-x-6">
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-white hover:text-purple-300">Home</Link>
                        <Link to="/about" className="text-white hover:text-purple-300">About</Link>
                        <Link to="/community" className="text-white hover:text-purple-300">Community</Link>
                        <Link to="/hackathon" className="text-white hover:text-purple-300">Hackathon</Link>
                    </div>

                    {/* User Authentication */}
                    <div className="relative">
                        <button
                            className="flex items-center space-x-2 bg-purple-600 text-white rounded-full px-3 py-2 hover:bg-purple-500"
                            onClick={toggleDropdown}
                        >
                            {isLoggedIn ? (
                                <img
                                    src="user-profile.jpg"
                                    alt="User"
                                    className="h-8 w-8 rounded-full border-2 border-gray-300"
                                />
                            ) : (
                                <span>Login</span>
                            )}
                        </button>

                        {/* Dropdown */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40 p-2 space-y-2">
                                {isLoggedIn ? (
                                    <>
                                        <Link to="/profile" className="text-gray-700 hover:text-purple-600 block">
                                            Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="text-gray-700 hover:text-purple-600 block w-full text-left"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <Link to="/login" className="text-gray-700 hover:text-purple-600 block">
                                        Login / SignIn
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
