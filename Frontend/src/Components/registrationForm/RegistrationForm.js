import React, { useState } from 'react';
import { userRegistration } from "../Services/Api";
import {useNavigate} from "react-router-dom"

// Step 1: Personal Information Form
const Step1 = ({ formData, handleChange, nextStep }) => {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">Personal Information</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">City</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="text-center">
                <button
                    onClick={nextStep}
                    className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

// Step 2: Education Form
const Step2 = ({ formData, handleChange, nextStep, prevStep, err }) => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">Education Information</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Educational Institution</label>
                <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Enter your educational institution"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Field of Study</label>
                <input
                    type="text"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    placeholder="Enter your field of study"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Graduation Month & Year</label>
                <input
                    type="month"
                    name="graduationDate"
                    value={formData.graduationDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="flex justify-between">
                <button
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 transition"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition"
                >
                    Continue
                </button>
            </div>
            {err && <p className='text-red-500'>{err}</p>}
        </div>
    );
};

// Step 3: Experience Form
const Step3 = ({ formData, handleChange, nextStep, prevStep, err }) => {

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">Experience Information</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Domain Expertise</label>
                <input
                    type="text"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    placeholder="Enter your domain expertise"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Skills</label>
                <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Enter your skills"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="flex justify-between">
                <button
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 transition"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition"
                >
                    Continue
                </button>
            </div>
            {err && <p className='text-red-500'>{err}</p>}
        </div>
    );
};

// Step 4: Links Form
const Step4 = ({ formData, handleChange, handleSubmit, prevStep, err }) => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">Links</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">GitHub Profile Link</label>
                <input
                    type="url"
                    name="githubLink"
                    value={formData.githubLink}
                    onChange={handleChange}
                    placeholder="Enter your GitHub profile link"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            <div className="flex justify-between">
                <button
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 transition"
                >
                    Back
                </button>
                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition"
                >
                    Submit
                </button>
            </div>
            {err && <p className='text-red-500'>{err}</p>}
        </div>
    );
};

const RegistrationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        city: '',
        email: '',
        phone: '',
        institution: '',
        fieldOfStudy: '',
        graduationDate: '',
        expertise: '',
        skills: '',
        githubLink: '',
    });
    const [err, setError] = useState("");
    const navigate =useNavigate("")
    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { username, city, email, phone, institution, fieldOfStudy, graduationDate, expertise, skills, githubLink } = formData;
        if (!username.trim() || !city.trim() || !email.trim() || !phone.trim() ||
            !institution.trim() || !fieldOfStudy.trim() || !graduationDate.trim() || 
            !expertise.trim() || !skills.trim() || !githubLink.trim()) {
            setError("Please fill in all required fields!");
            return;
        }
    
        setError(""); // Clear any previous errors
        try {
            await userRegistration(formData); // Call API
            alert("Registration successful!"); // Show success message
            navigate("/hackathons")
        } catch (error) {
            // Capture and display API errors
            setError("Failed to submit. Please try again.");
            console.error("Submission Error:", error);
        }
    };
    
    

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg">
                {currentStep === 1 && <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />}
                {currentStep === 2 && (
                    <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} err={err}/>
                )}
                {currentStep === 3 && (
                    <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} err={err}/>
                )}
                {currentStep === 4 && (
                    <Step4 formData={formData} handleChange={handleChange} prevStep={prevStep}  handleSubmit={handleSubmit} err ={err}/>
                )} 
            </div>
        </div>
    );
};

export default RegistrationForm;


