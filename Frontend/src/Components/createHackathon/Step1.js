import React from "react";

const Step1 = ({ formData, handleChange, handleNext, err }) => {
    const handleSubmit = (e) => {
        e.preventDefault();  
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
                        Fill Your Information
                    </h2>

                    {/* Full Name */}
                    <div className="mb-5">
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Contact Number */}
                    <div className="mb-5">
                        <label
                            htmlFor="contactNumber"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Designation */}
                    <div className="mb-5">
                        <label
                            htmlFor="designation"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Designation
                        </label>
                        <input
                            type="text"
                            id="designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder="Enter your designation"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800"
                    >
                        Next
                    </button>

                    {/* Error Message */}
                    {err && <p className="text-red-500 mt-2">{err}</p>}
                </form>
            </div>
        </div>
    );
};

export default Step1;
