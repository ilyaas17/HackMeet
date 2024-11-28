import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHackathonsData } from "../Services/Api";
import logo from "../../assets/logo.jpeg";

const HackathonsData = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const data = await getHackathonsData();
        setHackathons(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hackathons:", error);
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Show only the latest 5 hackathons
  const latestHackathons = hackathons.slice(-5);

  return (
    <div className=" bg-gray-100 py-8">
      <div className="container mx-2 ">
        <h1 className="text-5xl font-bold text-center mb-6 pl-48">Hackathons</h1>
        <div className="flex space-x-6 pb-6">
          {latestHackathons.map((hackathon) => (
            <div
              key={hackathon._id}
              className="flex-shrink-0 w-[265px] bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
            >
              {/* Hackathon Image */}
              <img
                src={logo}
                alt={hackathon.fullName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-purple-600">
                  {hackathon.fullName}
                </h2>
                <p className="text-gray-600 mt-2">{`Deadline: ${new Date(
                  hackathon.tentativeDate
                ).toLocaleDateString()}`}</p>
                <p className="text-gray-600">
                  {hackathon.natureOfHackathon === true ? "Online" : "Offline"}
                </p>

                <Link

                  to={`/registration/${hackathon._id}`}

                  to={`/hackathonpage/${hackathon._id}`}

                  className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-md text-center hover:bg-purple-500"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right ">
          <Link
            to="/hackathons"
            className="text-lg font-semibold text-purple-600 hover:text-purple-500 border-2 border-purple-600 rounded-md p-3"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HackathonsData;
