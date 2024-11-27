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
        hackathonName: "",
        isOnline: false,
        brief: "",
        expectedRegistrations: "",
        teamSizeRange: "",
        tentativeDate: null,
    });

    const [err, setError] = useState("");

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const parsedValue = type === "radio" && (value === "true" || value === "false") 
            ? value === "true" 
            : value;
        setFormData({ ...formData, [name]: parsedValue });
    };

    const handleSubmit = async () => {
        const { fullName, email, contactNumber, hackathonName, brief } = formData;
        if (!fullName || !email || !contactNumber || !hackathonName || !brief) {
            setError("Please fill in all required fields!");
            return;
        }
        setError(""); // Clear any previous errors
        try {
            await createHackathon(formData);
            alert("Hackathon created successfully!");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            {step === 1 && (
                <div>
                    <Step1 formData={formData} handleChange={handleChange} handleNext={handleNext} err={err}/>
                   
                </div>
            )}
            {step === 2 && (
                <div>
                    <Step2 formData={formData} handleChange={handleChange} handleNext={handleNext} handleBack={handleBack}  err={err}/>
                   
                </div>
            )}
            {step === 3 && (
                <div>
                    <Step3 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} handleBack={handleBack} err={err} />
                   
                </div>
            )}
        </div>
    );
};

export default CreateHackathonForm;
