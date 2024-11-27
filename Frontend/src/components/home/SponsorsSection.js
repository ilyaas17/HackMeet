import React from 'react';
import './SponsorsSection.css';

function SponsorsSection() {
    return (
        <div className="sponsors-section">
            <h2>Our Sponsors</h2>
            <div className="sponsors-logos">
                <img src="sponsor1.png" alt="Sponsor 1" />
                <img src="sponsor2.png" alt="Sponsor 2" />
                <img src="sponsor3.png" alt="Sponsor 3" />
            </div>
        </div>
    );
}

export default SponsorsSection;
