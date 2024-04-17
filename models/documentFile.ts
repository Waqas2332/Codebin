import mongoose from "mongoose";

const documentFileSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, "Please Enter Code"],
  },
  description: {
    type: String,
    required: [true, "Please Enter File Description"],
  },
  programmingLanguage: {
    type: String,
    required: [true, "Please Specify Programming Language"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const DocumentFile =
  mongoose.models.DocumentFile ||
  mongoose.model("DocumentFile", documentFileSchema);

export default DocumentFile;
