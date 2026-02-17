import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, default: "Real Estate" },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);