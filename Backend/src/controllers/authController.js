import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Assuming you have a User model for authentication
import UserProfile from "../models/UserProfile.js"; // Import the UserProfile model

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const existingUser2 = await User.findOne({ username });
    if (existingUser2) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user in the User model
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Create an empty profile for the new user in UserProfile
    const userProfile = new UserProfile({
      username,
      email,
      dob: null,
      college: "",
      degree: "",
      year: "",
      state: "",
      city: "",
      bio: "",
      contact: "",
      picture: "",
    });
    await userProfile.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with the new user data and token
    res.status(201).json({
      user: newUser, // Replace "data" with "user" or a more meaningful key
      token: token,
      message: "Welcome to HackMeet",
    });
    
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error in signup" });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      user: user,
      token: token,
      message: "Logged in Successfully",
    });
  } catch (error) {
    res.status(500).json({ message:  error.message });
  }
};