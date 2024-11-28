import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
        
    },
    email: { 
        type: String, 
        required: true 
        
    },
    phone: { 
        type: String, 
        required: true 
        
    },
    institution: { 
        type: String, 
        required: true 
        
    },
    fieldOfStudy: { 
        type: String, 
        required: true 
        
    },
    graduationDate: { 
        type: String, 
        required: true 
        
    },
    expertise: { 
        type: String, 
        required: true 
        
    },
    skills: { 
        type: String, 
        required: true 
        
    },
    githubLink: { 
        type: String, 
        required: true 
        
    },
});

export default mongoose.model('registrationModel', registrationSchema);