import moongose, { Document, Schema } from "mongoose";

type Tag = Document & {};

const TagSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default moongose.model<Tag>("Tag", TagSchema);
