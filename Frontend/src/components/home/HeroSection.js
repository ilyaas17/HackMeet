import React from 'react';
import './HeroSection.css';
// import bgImage from '../../assets/bg_herosection.jpeg';

function HeroSection() {
    return (
        <div className="hero-section" >
            <h1>Welcome to Virtual Hackathon 2024</h1>
            <p>Innovate, Build, and Compete from Anywhere!</p>
            <div className="button-container">
                <button className="explore-btn">Explore Hackathon</button>
                <button className="organise-btn">Organise Hackathon</button>
            </div>
        </div>
    );
}

export default HeroSection;

