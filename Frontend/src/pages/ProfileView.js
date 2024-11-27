import React, { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "../Components/Services/Api";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import profilePicBg from "../assets/profilePicBg.jpg"

const ProfileView = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const data = await getUserProfile(email);
        setProfile(data);
        setFormData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const updatedProfile = await updateUserProfile(email, formData);
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="bg-gradient-to-b from-purple-500 via-purple-300 to-purple-100 min-h-screen text-white">
      <div className="w-full h-[33vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${profilePicBg})` }}>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-12">
          <img
            src={formData.picture || profile.picture || "https://via.placeholder.com/150"}
            alt="User Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
      
      <div className="flex justify-center p-8 space-x-8">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-1/2">
          {!isEditing ? (
            <>
              <h1 className="text-3xl font-semibold text-center text-purple-700 mb-4">{profile.username}</h1>
              <p className="text-center text-gray-600 mb-6">{profile.bio}</p>
              <div className="space-y-4 text-gray-800">
                {[
                  { label: "Email", value: profile.email },
                  { label: "Date of Birth", value: profile.dob },
                  { label: "Contact", value: profile.contact },
                  { label: "State", value: profile.state },
                  { label: "City", value: profile.city },
                  { label: "College", value: profile.college },
                  { label: "Degree", value: profile.degree },
                  { label: "Year", value: profile.year },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between hover:bg-purple-100 p-2 rounded">
                    <span className="font-medium text-purple-600">{item.label}:</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 mt-6 flex items-center justify-center gap-2"
              >
                <FaEdit />
                Edit Profile
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-center mb-4 text-purple-700">Edit Profile</h1>
              <form className="space-y-4">
                {[
                  { name: "username", label: "Username" },
                  { name: "bio", label: "Bio" },
                  { name: "dob", label: "Date of Birth", type: "date" },
                  { name: "contact", label: "Contact" },
                  { name: "state", label: "State" },
                  { name: "city", label: "City" },
                  { name: "college", label: "College" },
                  { name: "degree", label: "Degree" },
                  { name: "year", label: "Year" },
                ].map(({ name, label, type = "text" }) => (
                  <div key={name}>
                    <label className="block text-gray-700 font-medium mb-1">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-black p-2"
                    />
                  </div>
                ))}
              </form>
              <div className="mt-6 flex space-x-4">
                <button
                  onClick={handleUpdate}
                  className="flex-1 bg-purple-700 text-white py-2 rounded hover:bg-green-600 flex items-center justify-center gap-2"
                >
                  <FaSave />
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600 flex items-center justify-center gap-2"
                >
                  <FaTimes />
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;


