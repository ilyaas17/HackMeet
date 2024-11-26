import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/home/HeroSection';
import AboutSection from '../Components/home/AboutSection';
import ScheduleSection from '../Components/home/ScheduleSection';
import SponsorsSection from '../Components/home/SponsorsSection';
import bgImage from '../assets/bg_herosection.jpeg';
// import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <div 
                className="home-nav-hero" 
                style={{ 
                    backgroundImage: `url(${bgImage})`, 
                    backgroundSize: 'cover',  
                    backgroundPosition: 'center center', 
                    backgroundRepeat: 'no-repeat',  
                    height: '100vh'  
                }}
            >
                <Navbar />
                <HeroSection />
            </div>
            <AboutSection />
            <ScheduleSection />
            <SponsorsSection />
        </div>
    );
}

export default Home;
