import React from 'react';
import HeroSection from '../Components/home/HeroSection.js';
import AboutSection from '../Components/home/AboutSection.js';
import FAQ from '../Components/home/FAQ.js';
import SponsorsSection from '../Components/home/SponsorsSection.js';
import bgImage from '../assets/bg_herosection.jpeg';
import Navbar from '../Components/Navbar/Navbar.js';
import HackathonsData from '../Components/home/HackathonsData.js';


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

                <Navbar className='fixed'/>
                <HeroSection />
                {localStorage.getItem("userEmail") === null ? <></> : <HackathonsData/> }
            </div>
          <div className='pt-96 mt-36'>  <SponsorsSection /></div>
            <AboutSection />
            <FAQ />
          
        </div>
    );
}

export default Home;
