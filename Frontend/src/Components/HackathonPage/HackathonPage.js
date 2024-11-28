import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar.js"
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.js';
import { getHackathon } from '../Services/Api.js';

export default function HackathonPage({hackathonId}) {
  
  const toApplicationForm = useNavigate();

  const [hackthonDetails, setHackathonDetails] = useState();
  const [error, setError] = useState();


  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const data = await getHackathon(hackathonId);
      } catch (err) {
        setError(err.message);
      } finally {
        // setLoading(false);
      }
    };});
  
    return (
        <div class="flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="bg-gray-800 text-white p-4">
            <h1 class="text-xl font-bold">Hackathon Page</h1>
        </div>
    
        {/* <!-- Main Content --> */}
        <div class="flex h-screen">
            {/* <!-- Left Column (Scrollable) --> */}
            <div class="flex-1 overflow-y-auto p-6 bg-gray-100">
                <h1 class="text-3xl font-bold mb-4">Hackathon Name</h1>
                <h2 class="text-lg font-semibold mb-2">Mode of Hackathon:</h2>
                <p class="text-sm mb-4">College Name, City</p>
                <p class="text-base leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, animi magnam...
                </p>
            </div>
    
            {/* <!-- Right Column (Static) --> */}
            <div class="w-1/3 p-6 bg-white shadow-lg sticky top-0 h-screen">
                <button class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Apply
                </button>
    
                <div class="applicationStatus mt-6 space-y-2">
                    <p class="text-gray-800 font-medium">Registered:</p>
                    <p class="text-gray-800 font-medium">Team Size:</p>
                    <p class="text-gray-800 font-medium">Updated On:</p>
                </div>
    
                <div class="hostDetails mt-8 space-y-2">
                    <p class="text-gray-800 font-medium">Contact Us via:</p>
                    <p class="text-gray-600">Host Name</p>
                    <p class="text-gray-600">Email</p>
                    <p class="text-gray-600">Contact Us</p>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}
