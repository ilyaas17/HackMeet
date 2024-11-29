import UserProfile from "../models/userProfile.js";


export const getUserProfile = async (req, res) => {
  try {
    const { email } = req.params;
    const userProfile = await UserProfile.findOne({ email });
    if (!userProfile) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { email } = req.params; 
    const updatedData = req.body;

    const updatedProfile = await UserProfile.findOneAndUpdate(
      { email },
      updatedData,
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
