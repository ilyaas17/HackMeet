import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {

    return (
        <div className="hero-sectio flex flex-col items-center justify-center text-center h-screen bg-cover bg-center text-white" >
            <h1 className='text-5xl mb-4 text-[#b19cd9] shadow-2xl font-serif'>Welcome to Virtual Hackathon 2024</h1>
            <p className='text-xl mb-8 text-[#dcd6f7]'>Innovate, Build, and Compete from Anywhere!</p>
            <div className=" flex gap-8  ">

                {localStorage.getItem("userEmail") === null ?
                    <Link to="/login" className="text-white hover:text-purple-300">
                        <button className="py-3 px-6 border-none rounded-md cursor-pointer text-white bg-[#6a0dad] font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg">Explore Hackathon</button>
                    </Link> :
                    <Link to="/hackathons" className="text-white hover:text-purple-300">
                        <button className="py-3 px-6 border-none rounded-md cursor-pointer text-white bg-[#6a0dad] font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg">Explore Hackathon</button>
                    </Link>
                }

                {localStorage.getItem("userEmail") === null ?
                    <Link to="/login" className="text-white hover:text-purple-300">
                        <button className="py-3 px-6 border-none rounded-md cursor-pointer text-white bg-[#8a2be2] font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg">Organize Hackathon</button>
                    </Link> :
                    <Link to="/organizehack" className="text-white hover:text-purple-300">
                        <button className="py-3 px-6 border-none rounded-md cursor-pointer text-white bg-[#8a2be2] font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg">Organize Hackathon</button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default HeroSection;

