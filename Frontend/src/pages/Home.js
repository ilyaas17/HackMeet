import React from 'react';
import HeroSection from '../components/home/HeroSection.js';
import AboutSection from '../components/home/AboutSection.js';
import FAQ from '../components/home/FAQ.js';
import SponsorsSection from '../components/home/SponsorsSection.js';
import bgImage from '../assets/bg_herosection.jpeg';
import Navbar from '../components/Navbar/Navbar.js';
import HackathonsData from '../components/home/HackathonsData.js';


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
