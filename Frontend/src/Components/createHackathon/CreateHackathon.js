import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { createHackathon } from "../Services/Api";

const CreateHackathonForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        designation: "",
        linkedinProfile: "",
        collegeOrCommunityName: "",
        city: "",
        hackathonCity: "",
        tentativeDate: "",
        hackathonName: "",
        natureOfHackathon: "",
        isOnline: false,
        brief: "",
        expectedRegistrations: "",
        teamSizeRange: "",
    });

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        // Basic validation
        const { fullName, email, contactNumber, hackathonName, brief } = formData;
        if (!fullName || !email || !contactNumber || !hackathonName || !brief) {
            alert("Please fill in all required fields!");
            return;
        }
    
        try {
            await createHackathon(formData);
            alert("Hackathon created successfully!");
        } catch (error) {
            console.error(error);
            alert("Error creating hackathon. Please try again.");
        }
    };

    return (
        <div>
            {step === 1 && <Step1 formData={formData} handleChange={handleChange} handleNext={handleNext} />}
            {step === 2 && <Step2 formData={formData} handleChange={handleChange} handleNext={handleNext} handleBack={handleBack} />}
            {step === 3 && <Step3 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} handleBack={handleBack} />}
        </div>
    );
};

export default CreateHackathonForm;

