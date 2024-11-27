import React from "react";

const Step3 = ({ formData, handleChange, handleSubmit, handleBack, err }) => {
  return (
    <div className="flex justify-between h-screen font-sans">
      <div className="flex-1 h-3/5 ml-48 mt-44 rounded-l-lg">
        <img
          src="https://i.pinimg.com/736x/43/76/23/437623bf1ec84771f957bd1b6c87b07f.jpg"
          alt="Placeholder"
          className="w-3/4 h-full object-cover rounded-l-lg"
        />
      </div>

      <div className="flex-1 flex justify-center items-center p-5 bg-white rounded-r-lg">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-center text-2xl text-purple-800 mb-5">
            Hackathon Details
          </h2>

          <div className="mb-5">
            <label
              htmlFor="hackathonName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Hackathon Name
            </label>
            <input
              type="text"
              id="hackathonName"
              name="hackathonName"
              value={formData.hackathonName}
              onChange={handleChange}
              placeholder="Enter hackathon name"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Nature of Hackathon
            </label>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Nature of Hackathon
              </label>
              <div className="flex items-center space-x-6">
                <label htmlFor="online" className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="online"
                    name="isOnline"
                    value="true"
                    checked={formData.isOnline === true}
                    onChange={handleChange}
                    className="text-purple-500 focus:ring-2 focus:ring-purple-500"
                  />
                  <span>Online</span>
                </label>
                <label
                  htmlFor="offline"
                  className="flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    id="offline"
                    name="isOnline"
                    value="false"
                    checked={formData.isOnline === false}
                    onChange={handleChange}
                    className="text-purple-500 focus:ring-2 focus:ring-purple-500"
                  />
                  <span>Offline</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="brief"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Brief Description
            </label>
            <textarea
              id="brief"
              name="brief"
              value={formData.brief}
              onChange={handleChange}
              placeholder="Enter a brief description"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="expectedRegistrations"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Expected Registrations
            </label>
            <input
              type="number"
              id="expectedRegistrations"
              name="expectedRegistrations"
              value={formData.expectedRegistrations}
              onChange={handleChange}
              placeholder="Enter expected registrations"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="teamSizeRange"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Team Size Range
            </label>
            <input
              type="text"
              id="teamSizeRange"
              name="teamSizeRange"
              value={formData.teamSizeRange}
              onChange={handleChange}
              placeholder="e.g., 2-5"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-between mt-5">
            <button
              className="w-40 p-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="w-40 p-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
           {err && <p className="text-red-500 mt-2">{err}</p>}
        </div>
      </div>
    </div>
  );
};

export default Step3;
