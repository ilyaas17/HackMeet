// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getHackathon } from "../Services/Api.js";
// import "./HackathonPage.css";
// import { Link } from "react-router-dom";

// export default function HackathonPage() {
//   const hackathonId = localStorage.getItem("hackId")
//   const navigate = useNavigate(); // Corrected the navigate hook usage
//   const [hackathonDetails, setHackathonDetails] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHackathons = async () => {
//       try {
//         const data = await getHackathon(hackathonId);
//         setHackathonDetails(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchHackathons();
//   }, [hackathonId]);

//   if (isLoading) {
//     return (
//       <div className="hackathonPageLoading">
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="hackathonPageError">
//         <h2>Error: {error}</h2>
//       </div>
//     );
//   }

//   if (!hackathonDetails) {
//     return (
//       <div className="hackathonPageNotFound">
//         <h2 className="hackathonTitle">Hackathon not available</h2>
//       </div>
//     );
//   }
//   function getDate(type) {
//     const datetime = hackathonDetails[type];
//     const date = new Date(datetime);
//     const formattedDate = date.toLocaleDateString();
//     return formattedDate;
//   }


//   return (
//     <div className="hackathonPageContainer">
//       <div className="hackathonDetails1">
//         <h1 className="hackathonPageTitle">{hackathonDetails.hackathonName}</h1>
//         <p className="hackathonMode">
//           Mode of Hackathon: {hackathonDetails.natureOfHackathon}
//         </p>
//         <p className="hackathonDetails">
//           {hackathonDetails.collegeName}, {hackathonDetails.city}
//         </p>
//         <p className="hackathonDescription">{hackathonDetails.brief}</p>
//       </div>
//       <div className="hackathonDetails2">
//         <Link to={`/registration/${hackathonId}`}>
//           <button className="applyButton">Apply Now</button>
//         </Link>

//         <div className="applicationStatus">
//           <p>Max. Seats: {hackathonDetails.expectedRegistrations}</p>
//           <p>Team Size: {hackathonDetails.teamSizeRange}</p>
//           <p>Updated On: {getDate("updatedAt")}</p>
//         </div>
//         <div className="hostDetails">
//           <p>Contact Us</p>
//           <p>{hackathonDetails.fullName}</p>
//           <p>{hackathonDetails.email}</p>
//           <p>{getDate("createdAt")}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getHackathon } from "../Services/Api.js";
import logo from "../../assets/logo.jpeg"

export default function HackathonPage() {
  const hackathonId = localStorage.getItem("hackId");
  const navigate = useNavigate();
  const [hackathonDetails, setHackathonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const data = await getHackathon(hackathonId);
        setHackathonDetails(data.data);
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
        <h2 className="text-center text-purple-600 text-xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hackathonPageError">
        <h2 className="text-center text-red-600 text-xl font-bold">
          Error: {error}
        </h2>
      </div>
    );
  }

  if (!hackathonDetails) {
    return (
      <div className="hackathonPageNotFound">
        <h2 className="text-center text-purple-600 text-xl font-bold">
          Hackathon not available
        </h2>
      </div>
    );
  }

  const getDate = (type) => {
    const datetime = hackathonDetails[type];
    const date = new Date(datetime);
    return date.toLocaleDateString();
  };

  return (
    <div className="hackathonPageContainer bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg mt-20">
        {/* Hackathon Header */}
        <div className="bg-purple-700 text-white p-6 rounded-t-lg flex justify-between">
          <h1 className="font-bold mb-2 mt-10 text-[100px]">{hackathonDetails?.hackathonName}</h1>
         <img src ={logo}  alt ="hackMeetLogo" className="w-[200px] "/>
        </div>

        {/* Hackathon Details */}
        <div className="p-6">
        <h2 className="text-xl font-semibold text-purple-700"> Description</h2>
        <p className="text-lg font-medium">{hackathonDetails.brief}</p>
          <div className="mb-4">

            <h2 className="text-xl font-semibold text-purple-700">General Details</h2>
            <p className="text-gray-700">
              Mode:{" "}
              <span className="font-medium">
                {hackathonDetails.natureOfHackathon ? "Online" : "Offline"}
              </span>
            </p>
            <p className="text-gray-700">
              Location:{" "}
              <span className="font-medium">
                {hackathonDetails?.collegeName}, {hackathonDetails?.city}
              </span>
            </p>
            <p className="text-gray-700">
              Tentative Date:{" "}
              {hackathonDetails.tentaiveDate}
              <span className="font-medium">{getDate("tentativeDate")}</span>
            </p>
          </div>

          {/* Registration Details */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-purple-700">Registration</h2>
            <p className="text-gray-700">
              Max Seats:{" "}
              <span className="font-medium">
                {hackathonDetails.expectedRegistrations}
              </span>
            </p>
            <p className="text-gray-700">
              Team Size:{" "}
              <span className="font-medium">{hackathonDetails?.teamSizeRange}</span>
            </p>
          </div>

          {/* Organizer Contact */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-purple-700">
              Organizer Contact
            </h2>
            <p className="text-gray-700">
              Name:{" "}
              <span className="font-medium">{hackathonDetails.fullName}</span>
            </p>
            <p className="text-gray-700">
              Email:{" "}
              <span className="font-medium">{hackathonDetails.email}</span>
            </p>
            <p className="text-gray-700">
              Contact Number:{" "}
              <span className="font-medium">
                {hackathonDetails.contactNumber}
              </span>
            </p>
            {hackathonDetails.linkedinProfile && (
              <p className="text-gray-700">
                LinkedIn:{" "}
                <a
                  href={hackathonDetails.linkedinProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  View Profile
                </a>
              </p>
            )}
          </div>

          {/* Previous Hackathon */}
          {hackathonDetails.hasOrganizedBefore && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-purple-700">
                Previous Hackathon
              </h2>
              <a
                href={hackathonDetails.previousHackathonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                Previous Event
              </a>
            </div>
          )}

          {/* Apply Now Button */}
          <div className="text-center mt-6">
            <Link to={`/registration/${hackathonId}`}>
              <button className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
