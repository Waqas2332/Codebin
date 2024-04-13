import mongoose from "mongoose";

const documentFileSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  programmingLanguage: {
    type: String,
    required: true,
  },
});

const DocumentFile =
  mongoose.models.DocumentFile ||
  mongoose.model("DocumentFile", documentFileSchema);

export default DocumentFile;
