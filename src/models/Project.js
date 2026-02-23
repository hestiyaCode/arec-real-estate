import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Commercial Retail"
  tag: { type: String }, // e.g., "Filling Fast", "New Launch"
  targetYield: { type: String, required: true },
  tokenPrice: { type: String, required: true },
  availableTokens: { type: String, required: true },
  totalValue: { type: String, required: true },
  imageUrl: { type: String, required: true }, // URL from Vercel Blob
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);