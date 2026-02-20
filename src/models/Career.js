import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  reason: { type: String, required: true },
  resumeUrl: { type: String }, // Store the path or base64 string
  appliedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Career || mongoose.model('Career', CareerSchema);