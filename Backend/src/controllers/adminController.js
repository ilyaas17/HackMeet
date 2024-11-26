import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Hackathon from '../models/hackathonModel.js';
import AdminModel from '../models/adminModel.js';

// Admin registration
export const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Request body:', req.body); 
    console.log('Name:', name);             
    console.log('Email:', email);           
    console.log('Password:', password);  

    try {
        const existingAdmin = await AdminModel.findOne({ email });
        if(existingAdmin){
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newAdmin = new AdminModel({
            name,
            email,
            passwordHash 
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Admin login
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    console.log('Request body:', req.body); 

    try {
        const admin = await AdminModel.findOne({ email });
        if(!admin){
            return res.status(400).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.passwordHash);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log(token);
        console.log('Admin ID:', admin._id);  

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create hackathon function  
export const createHackathon = async (req, res) => {
    const {
        fullName,
        email,
        contactNumber,
        designation,
        linkedinProfile,
        collegeOrCommunityName,
        city,
        hasOrganizedBefore,
        previousHackathonLink,
        hackathonName,
        natureOfHackathon,
        isOnline,
        brief,
        expectedRegistrations,
        teamSizeRange,
        organizationName,
        hackathonCity,
        tentativeDate,
    } = req.body;

    try {
        if (!brief || brief.length < 100) {
            return res.status(400).json({ message: 'Brief about the hackathon must be at least 100 characters long.' });
        }

        const newHackathon = await Hackathon.create({
            fullName,
            email,
            contactNumber,
            designation,
            linkedinProfile,
            collegeOrCommunityName,
            city,
            hasOrganizedBefore,
            previousHackathonLink,
            hackathonName,
            natureOfHackathon,
            isOnline,
            brief,
            expectedRegistrations,
            teamSizeRange,
            organizationName,
            hackathonCity,
            tentativeDate,
        });

        res.status(201).json({
            message: 'Hackathon created successfully',
            hackathon: newHackathon,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating hackathon' });
    }
};
