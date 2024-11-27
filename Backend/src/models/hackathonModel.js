import mongoose from 'mongoose';

const hackathonModel = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    contactNumber: { 
        type: String, 
        required: true 
    },
    designation: { 
        type: String, 
        required: true 
    },
    linkedinProfile: { 
        type: String 
    },
    collegeName: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    hasOrganizedBefore: { 
        type: Boolean, 
        required: true 
    },
    previousHackathonLink: { 
        type: String 
    },
    hackathonName: { 
        type: String, 
        required: true 
    },
    natureOfHackathon: { 
        type: Boolean,
        required: true 
    },
    brief: { 
        type: String, 
        required: true, 
        minlength: 100 

    },
    expectedRegistrations: { 
        type: Number, 
        required: true 

    },
    teamSizeRange: { 
        type: String, 
        required: true 
        
    },
    tentativeDate: { 
        type: Date, 
        required: true 
        
    }
}, { timestamps: true });

export default mongoose.model('Hackathon', hackathonModel);