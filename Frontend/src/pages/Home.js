import React from 'react';
import HeroSection from '../Components/home/HeroSection';
import AboutSection from '../Components/home/AboutSection';
import FAQ from '../Components/home/FAQ';
import SponsorsSection from '../Components/home/SponsorsSection';
import bgImage from '../assets/bg_herosection.jpeg';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import HackathonsData from '../Components/home/HackathonsData';


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
            <SponsorsSection />
            <AboutSection />
            <FAQ />
            <Footer/>
        </div>
    );
}

export default Home;
