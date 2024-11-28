import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHackathon } from "../Services/Api.js";
import "./HackathonPage.css";

export default function HackathonPage() {
    
    const { hackathonId } = useParams();
    const navigate = useNavigate();  // Corrected the navigate hook usage
    const [hackathonDetails, setHackathonDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchHackathons = async () => {
            try {
                const data = await getHackathon(hackathonId);
                setHackathonDetails(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHackathons();
    }, [hackathonId]);

    if (isLoading) {
        return (
            <div className="hackathonPageLoading">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="hackathonPageError">
                <h2>Error: {error}</h2>
            </div>
        );
    }

    if (!hackathonDetails) {
        return (
            <div className="hackathonPageNotFound">
                <h2 className="hackathonTitle">Hackathon not available</h2>
            </div>
        );
    }
    function getDate(type){
        const datetime = hackathonDetails[type];
        const date = new Date(datetime);
        const formattedDate = date.toLocaleDateString();
        return formattedDate;
    }

    return (
        <div className="hackathonPageContainer">
            <div className="hackathonDetails1">
                <h1 className="hackathonPageTitle">{hackathonDetails.hackathonName}</h1>
                <p className="hackathonMode">Mode of Hackathon: {hackathonDetails.natureOfHackathon}</p>
                <p className="hackathonDetails">{hackathonDetails.collegeName}, {hackathonDetails.city}</p>
                <p className="hackathonDescription">{hackathonDetails.brief}</p>
            </div>
            <div className="hackathonDetails2">
                <button
                    className="applyButton"
                    onClick={() => navigate(`/applicationform/${hackathonId}`)}
                >
                    Apply Now
                </button>
                <div className="applicationStatus">
                    <p>Max. Seats: {hackathonDetails.expectedRegistrations}</p>
                    <p>Team Size: {hackathonDetails.teamSizeRange}</p>
                    <p>Updated On: {getDate("updatedAt")}</p>
                </div>
                <div className="hostDetails">
                    <p>Contact Us</p>
                    <p>{hackathonDetails.fullName}</p>
                    <p>{hackathonDetails.email}</p>
                    <p>{getDate("createdAt")}</p>
                </div>
            </div>
        </div>
    );
}
