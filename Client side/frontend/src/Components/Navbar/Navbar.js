import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dprofilef from '../../Asserts/default-profile.webp'; 
import logo from '../../Asserts/logo.jpg';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Handle toggling the authentication state
    const handleAuthToggle = () => {
        setIsLoggedIn((prevState) => !prevState);
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    // Handle logout functionality
    const handleLogout = () => {
        setIsLoggedIn(false);  // Set logged-in state to false
        setIsDropdownOpen(false);  // Close dropdown on logout
    };

    return (
        <nav className='bg-stone-200 shadow-md fixed w-full top-0 left-0 z-50'>
            <div className='max-w-screen-xl mx-10 mr-0 px-1 py-1 flex justify-between items-center'>
                {/* App logo on left */}
                <Link to='/' className='text-2xl font-bold text-blue-600 flex items-center'>
                    <img src={logo} alt="HackMeet Logo" className='rounded-3xl max-h-20 max-w-40' />
                </Link>

                {/* Right: Navigation Links */}
                <div className="flex items-center space-x-6">
                    {/* Navbar Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                        <Link to="/community" className="text-gray-700 hover:text-blue-600">Community</Link>
                        <Link to="/hackathon" className="text-gray-700 hover:text-blue-600">Hackathon</Link>
                    </div>

                    {/* User Profile/Authentication */}
                    <div className="relative">
                        <button
                            className="flex items-center space-x-2 bg-gray-300 rounded-full px-2 py-2"
                            onClick={toggleDropdown} 
                        >
                            {isLoggedIn ? (
                                <img
                                    src="user-profile.jpg" 
                                    alt="User"
                                    className="h-10 w-10 rounded-full border-2 border-gray-300"
                                />
                            ) : (
                                <span className="text-gray-700">Login / SignIn</span> 
                            )}
                        </button>

                        {/* Dropdown for Auth options */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40 p-2 space-y-2">
                                {isLoggedIn ? (
                                    <>
                                        <Link to="/profile" className="text-gray-700 hover:text-blue-600 block">
                                            Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout} 
                                            className="text-gray-700 hover:text-blue-600 block w-full text-left"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <Link to="/login" className="text-gray-700 hover:text-blue-600 block">
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


