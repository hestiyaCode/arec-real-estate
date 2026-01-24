import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
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
  { timestamps: true } // Ye automatically createdAt aur updatedAt add karega
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);