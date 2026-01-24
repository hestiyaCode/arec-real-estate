import mongoose from "mongoose";

const HeroContactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a name"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    occupation: {
      type: String,
      required: [true, "Please provide an occupation"],
    },
  },
  { timestamps: true }
);

// Fix: "hero-Contact" ki jagah "HeroContact" use kiya hai taaki hyphen error na aaye
export default mongoose.models.HeroContact || mongoose.model("HeroContact", HeroContactSchema);