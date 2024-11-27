import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
// import bgImage from '../../assets/bg_herosection.jpeg';

function HeroSection() {
    return (
        <div className="hero-section" >
            <h1>Welcome to Virtual Hackathon 2024</h1>
            <p>Innovate, Build, and Compete from Anywhere!</p>
            <div className="button-container">
                <Link to="/hackthon" className="text-white hover:text-purple-300">
                    <button className="explore-btn">Explore Hackathon</button>
                </Link>
                <Link to="/organizehack" className="text-white hover:text-purple-300">
                    <button className="organise-btn">Organize Hackathon</button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;

