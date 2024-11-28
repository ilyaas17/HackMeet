import React from "react";

const Step2 = ({ formData, handleChange, handleNext, handleBack, err }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check required fields
    if (
      !formData.collegeName ||
      !formData.tentativeDate ||
      !formData.city ||
      formData.hasOrganizedBefore === undefined ||
      (formData.hasOrganizedBefore === true && !formData.previousHackathonLink)
    ) {
      alert("Please fill all required fields.");
      return;
    }

    handleNext();
  };

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
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl"
        >
          <h2 className="text-center text-2xl text-purple-800 mb-5">
            Location and Experience
          </h2>

          {/* College Name */}
          <div className="mb-5">
            <label
              htmlFor="collegeName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              College Name
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="Enter your college or community name"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* Tentative Date */}
          <div className="mb-5">
            <label
              htmlFor="tentativeDate"
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
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* City */}
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
              required
            />
          </div>

          {/* Have You Organized Before? */}
          <div className="mb-5">
            <label
              htmlFor="hasOrganizedBefore"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Have You Organized a Hackathon Before?
            </label>
            <div className="flex items-center space-x-6">
              <label htmlFor="organized-yes" className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="organized-yes"
                  name="hasOrganizedBefore"
                  value={true}
                  checked={formData.hasOrganizedBefore === true}
                  onChange={() => handleChange({ target: { name: "hasOrganizedBefore", value: true } })}
                  className="text-purple-500 focus:ring-2 focus:ring-purple-500"
                />
                <span>Yes</span>
              </label>
              <label htmlFor="organized-no" className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="organized-no"
                  name="hasOrganizedBefore"
                  value={false}
                  checked={formData.hasOrganizedBefore === false}
                  onChange={() => handleChange({ target: { name: "hasOrganizedBefore", value: false } })}
                  className="text-purple-500 focus:ring-2 focus:ring-purple-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Previous Hackathon Link */}
          {formData.hasOrganizedBefore === true && (
            <div className="mb-5">
              <label
                htmlFor="previousHackathonLink"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Link to Previous Hackathon (if any)
              </label>
              <input
                type="url"
                id="previousHackathonLink"
                name="previousHackathonLink"
                value={formData.previousHackathonLink}
                onChange={handleChange}
                placeholder="Enter the URL of your previous hackathon"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-5">
            <button
              type="button"
              className="w-40 p-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-40 p-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800"
            >
              Next
            </button>
          </div>
          {err && <p className="text-red-500 mt-2">{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default Step2;
