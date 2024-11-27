import mongoose from "mongoose"

const UserProfileSchema = new mongoose.Schema({
  picture: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  dob: { type: Date },
  college: { type: String },
  degree: { type: String },
  year: { type: String},
  state: { type: String },
  city: { type: String},
  bio: { type: String, default: "" },
  contact: { type: String },
});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);
export default UserProfile;