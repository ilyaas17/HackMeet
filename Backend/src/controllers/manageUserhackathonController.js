import hackathonModel from "../models/hackathonModel.js";

export const getUserHackathons = async (req, res) => {
  const { email } = req.query;
  try {
    const hackathons = await hackathonModel.find({ email });
    if (hackathons.length === 0) {
      return res.status(404).json({ message: "You have not organised any hackathons." });
    }
    res.status(200).json(hackathons);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch hackathons", error: error.message });
  }
};


export const updateUserHackathon = async (req, res) => {
  const { id } = req.query;
  const hackathonData = req.body;

  try {
    const hackathon = await hackathonModel.findById(id);
    if (!hackathon) {
      return res.status(404).json({ message: "Hackathon not found." });
    }
    Object.assign(hackathon, hackathonData);
    await hackathon.save();
    res.status(200).json(hackathon);
  } catch (error) {
    res.status(500).json({ message: "Failed to update hackathon", error: error.message });
  }
};


export const deleteUserHackathon = async (req, res) => {
  console.log("id form backend ", id)
  try {
    const hackathon = await hackathonModel.findByIdAndDelete(id);
    if (!hackathon) {
      return res.status(404).json({ message: "Hackathon not found." });
    }

    res.status(200).json({ message: "Hackathon deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete hackathon", error: error.message });
  }
};
