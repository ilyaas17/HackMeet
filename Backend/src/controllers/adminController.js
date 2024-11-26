import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Admin registration
export const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });
        if(existingAdmin){
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
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

    try {
        const admin = await Admin.findOne({ email });
        if(!admin){
            return res.status(400).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.passwordHash);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create hackathon function  
export const createHackathon = async (req, res) => {
    const { name, startDate, endDate, prizes } = req.body;

    try {
        const newHackathon = await Hackathon.create({
            name,
            startDate,
            endDate,
            prizes,
        });

        res.status(201).json(newHackathon);
    } catch (err) {
        res.status(500).json({ message: 'Error creating hackathon' });
    }
};
