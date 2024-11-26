import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ScheduleSection from '../components/home/ScheduleSection';
import SponsorsSection from '../components/home/SponsorsSection';
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
