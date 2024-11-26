import React from 'react';
import './ScheduleSection.css';

function ScheduleSection() {
    return (
        <div className="schedule-section">
            <h2>Event Schedule</h2>
            <ul>
                <li><strong>Day 1:</strong> Kickoff & Team Formation</li>
                <li><strong>Day 2:</strong> Development & Mentorship</li>
                <li><strong>Day 3:</strong> Final Presentations & Prizes</li>
            </ul>
        </div>
    );
}

export default ScheduleSection;
