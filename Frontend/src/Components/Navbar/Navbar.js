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

  //   return (
  //     <nav className={`purple-navbar fixed top-0 left-0 w-full z-50 px-6 py-0 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
  //       }`}>

  //       <div className='flex justify-between items-center py-4 px-8'>
  //         <Link to='/' className='flex items-center'>
  //           <img src={logo} alt="HackMeet Logo" className='rounded-3xl max-h-12 max-w-20' />
  //         </Link>

  //         {/* Navigation Links */}
  //         <div className="flex items-center space-x-6">
  //           <div className="hidden md:flex space-x-6">
  //             <Link to="/" className="text-white hover:text-purple-300">Home</Link>
  //             <Link to="/about" className="text-white hover:text-purple-300">About</Link>
  //             <Link to="/organizehack" className="text-white hover:text-purple-300">Organize Hackthon</Link>
  //             <Link to="/hackathon" className="text-white hover:text-purple-300">Hackathon</Link>
  //           </div>

  //           {/* User Authentication */}
  //           <div className="relative">
  //             <button
  //               className="flex items-center space-x-2 bg-purple-600 text-white rounded-full px-3 py-2 hover:bg-purple-500"
  //               onClick={toggleDropdown}
  //             >
  //               {isLoggedIn ? (
  //                 <img
  //                   src="user-profile.jpg"
  //                   alt="User"
  //                   className="h-8 w-8 rounded-full border-2 border-gray-300"
  //                 />
  //               ) : (
  //                 <span>Login</span>
  //               )}
  //             </button>

  //             {/* Dropdown */}
  //             {isDropdownOpen && (
  //               <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40 p-2 space-y-2">
  //                 {isLoggedIn ? (
  //                   <>
  //                     <Link to="/profile" className="text-gray-700 hover:text-purple-600 block">
  //                       Profile
  //                     </Link>
  //                     <button
  //                       onClick={handleLogout}
  //                       className="text-gray-700 hover:text-purple-600 block w-full text-left"
  //                     >
  //                       Logout
  //                     </button>
  //                   </>
  //                 ) : (
  //                   <Link to="/login" className="text-gray-700 hover:text-purple-600 block">
  //                     Login / SignIn
  //                   </Link>
  //                 )}
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // =======
  return (
    <nav className={`purple-navbar fixed top-0 left-0 w-full z-50 px-6 py-0 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
      }`}>
      <div className="flex justify-between items-center py-4 px-8">
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
            <Link to="/" className="text-white hover:text-purple-300">Home</Link>
            <Link to="/about" className="text-white hover:text-purple-300">About</Link>
            <Link to="/organizehack" className="text-white hover:text-purple-300">Organize Hackthon</Link>
            <Link to="/hackathon" className="text-white hover:text-purple-300">Hackathon</Link>
            <Link to="/viewprofile" className="text-white hover:text-purple-300 text-[30px]"></Link>
          </div>
          {localStorage.getItem("userEmail") === null ? <>  <div className="relative">
            <Link
              to="/login"
              className="text-gray-700 hover:text-purple-600 block"
            >
              Login / SignIn

            </Link>
          </div></> :
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

