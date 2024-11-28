import React, { useEffect, useState } from 'react';
import { getHackathonsData } from '../Components/Services/Api.js';  
import logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';

const ViewHackathon = () => {
    const [hackathons, setHackathons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHackathons = async () => {
            try {
                const data = await getHackathonsData();
                setHackathons(data);  
                setLoading(false);  
            } catch (error) {
                console.error('Error fetching hackathons:', error);
                setLoading(false);  
            }
        };

        fetchHackathons();  
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-6">All Hackathons</h1>

                <div className="space-y-6">
                    {hackathons.map((hackathon) => (
                        <div
                            key={hackathon._id}
                            className="w-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={logo}
                                alt={hackathon.fullName}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-purple-600">{hackathon.fullName}</h2>
                                <p className="text-gray-600 mt-2">
                                    {`Deadline: ${new Date(hackathon.tentativeDate).toLocaleDateString()}`}
                                </p>
                                <p className="text-gray-600">
                                    {hackathon.natureOfHackathon === true ? 'Online' : 'Offline'}
                                </p>

                                <Link
                                    to={`/viewhackathon/${hackathon._id}`}
                                    className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-md text-center hover:bg-purple-500"
                                >
                                    Apply Now
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