import React, { useEffect, useState } from "react";
import { getHackathonsData } from "../components/Services/Api.js";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const ViewHackathon = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredHackathons = hackathons.filter((hackathon) =>
    hackathon.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="bg-gray-100 py-8 mt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 ">
          All Hackathons
        </h1>

        {/* Search Bar with Button */}
        <div className="mb-6 flex p-10 justify-center">
          <input
            type="text"
            placeholder="Search Hackathons..."
            className="p-2 w-1/2 md:w-1/3 border border-gray-300 rounded-l-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
            onKeyDown={handleKeyDown} // Trigger search on Enter key
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-500"
          >
            Search
          </button>
        </div>

        {/* Display message when no hackathons match the search query */}
        {filteredHackathons.length === 0 && searchQuery !== "" && (
          <p className="text-center text-4xl font-bold p-40 text-red-500">
            No hackathons found matching your search.
          </p>
        )}

        {/* Grid Layout for Hackathon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map over the filteredHackathons if a search query is entered */}
          {(searchQuery ? filteredHackathons : hackathons).map((hackathon) => (
            <div
              key={hackathon._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
            >
              {/* Hackathon Image */}
              <img
                src={logo}
                alt={hackathon.hackathonName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-purple-600">
                  {hackathon.hackathonName}
                </h2>
                <p className="text-gray-600 mt-2">
                  {`Deadline: ${new Date(
                    hackathon.tentativeDate
                  ).toLocaleDateString()}`}
                </p>
                <p className="text-gray-600">
                  {hackathon.natureOfHackathon === true ? "Online" : "Offline"}
                </p>
                <Link
                  to={`/hackathonpage/${hackathon._id}`}
                  className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-md text-center hover:bg-purple-500"
                  onClick={() => localStorage.setItem("hackId", hackathon._id)}
                >
                  View Hackathon
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewHackathon;
