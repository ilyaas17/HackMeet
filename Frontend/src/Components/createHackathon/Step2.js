import React from "react";

const Step2 = ({ formData, handleChange, handleNext, handleBack , err }) => {
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
            Location and Experience
          </h2>

          <div className="mb-5">
            <label
              htmlFor="collegeName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              College or Community Name
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="Enter your college or community name"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="collegeName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Tentative Date
            </label>
            <input
              type="date"
              id="tentativeDate"
              name="tentativeDate"
              value={formData.tentativeDate}
              onChange={handleChange}
              placeholder="Enter your college or community name"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="hasOrganizedBefore"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Have You Organized a Hackathon Before?
            </label>
            <div className="flex items-center space-x-6">
              <label
                htmlFor="organized-yes"
                className="flex items-center space-x-2"
              >
                <input
                  type="radio"
                  id="organized-yes"
                  name="hasOrganizedBefore"
                  value="true"
                  checked={formData.hasOrganizedBefore === true}
                  onChange={handleChange}
                  className="text-purple-500 focus:ring-2 focus:ring-purple-500"
                />
                <span>Yes</span>
              </label>
              <label
                htmlFor="organized-no"
                className="flex items-center space-x-2"
              >
                <input
                  type="radio"
                  id="organized-no"
                  name="hasOrganizedBefore"
                  value="false"
                  checked={formData.hasOrganizedBefore === false}
                  onChange={handleChange}
                  className="text-purple-500 focus:ring-2 focus:ring-purple-500"
                />
                <span>No</span>
              </label>
            </div>
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
              onClick={handleNext}
            >
              Next
            </button>
          </div>
          {err && <p className="text-red-500 mt-2">{err}</p>}
        </div>
      </div>
    </div>
  );
};

export default Step2;
