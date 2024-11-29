import registrationModel from '../models/registrationModel.js'; 

export const registerUser = async (req, res) => {
    try {
        const { username, city, email, phone, institution, fieldOfStudy, graduationDate, expertise, skills, githubLink } = req.body;

        const newUser = new registrationModel({
            username,
            city,
            email,
            phone,
            institution,
            fieldOfStudy,
            graduationDate,
            expertise,
            skills,
            githubLink,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully!', registereduser: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error });
    }
};
