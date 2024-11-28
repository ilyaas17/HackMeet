import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const EditModal = ({ show, hackathon, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    hackathonName: "",
    fullName: "",
    city: "",
    tentativeDate: "",
    expectedRegistrations: "",
    brief: "",
    image: "",
    teamSizeRange: "",
    previousHackathonLink: "",
  });
  useEffect(() => {
    if (hackathon) {
      setFormData({
        hackathonName: hackathon.hackathonName,
        fullName: hackathon.fullName,
        city: hackathon.city,
        tentativeDate: hackathon.tentativeDate,
        expectedRegistrations: hackathon.expectedRegistrations,
        brief: hackathon.brief,
        image: hackathon.image,
        teamSizeRange: hackathon.teamSizeRange,
        previousHackathonLink: hackathon.previousHackathonLink || "",
      });
    }
  }, [hackathon]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };
if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2 h-[600px] overflow-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-purple-600 mb-4">Edit Hackathon</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="hackathonName" className="block text-lg font-semibold">
              Hackathon Name
            </label>
            <input
              type="text"
              id="hackathonName"
              name="hackathonName"
              value={formData.hackathonName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fullName" className="block text-lg font-semibold">
              Organizer Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-lg font-semibold">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tentativeDate" className="block text-lg font-semibold">
              Tentative Date
            </label>
            <input
              type="date"
              id="tentativeDate"
              name="tentativeDate"
              value={formData.tentativeDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expectedRegistrations" className="block text-lg font-semibold">
              Expected Registrations
            </label>
            <input
              type="number"
              id="expectedRegistrations"
              name="expectedRegistrations"
              value={formData.expectedRegistrations}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="brief" className="block text-lg font-semibold">
              Brief
            </label>
            <textarea
              id="brief"
              name="brief"
              value={formData.brief}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-lg font-semibold">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="teamSizeRange" className="block text-lg font-semibold">
              Team Size Range
            </label>
            <input
              type="text"
              id="teamSizeRange"
              name="teamSizeRange"
              value={formData.teamSizeRange}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="previousHackathonLink" className="block text-lg font-semibold">
              Previous Hackathon Link
            </label>
            <input
              type="url"
              id="previousHackathonLink"
              name="previousHackathonLink"
              value={formData.previousHackathonLink}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
