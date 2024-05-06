import { Schema, model, models } from "mongoose";

const StarFileSchema = new Schema(
  {
    file: {
      type: Schema.Types.ObjectId,
      ref: "DocumentFile",
    },
    users: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
  },
  { timestamps: true }
);

const StarFile = models.StarFile || model("StarFile", StarFileSchema);

export default StarFile;
