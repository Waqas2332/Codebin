import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
});

const Document =
  mongoose.models.Document || mongoose.model("Document", documentSchema);

export default Document;
