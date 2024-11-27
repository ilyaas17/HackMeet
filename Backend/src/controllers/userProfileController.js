import UserProfile from "../models/UserProfile.js";

// Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const { email } = req.params; // Assuming email is passed in the route
    const userProfile = await UserProfile.findOne({ email });
    if (!userProfile) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const { email } = req.params; // Assuming email is passed in the route
    const updatedData = req.body;

    const updatedProfile = await UserProfile.findOneAndUpdate(
      { email },
      updatedData,
      { new: true } // Returns the updated document
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
