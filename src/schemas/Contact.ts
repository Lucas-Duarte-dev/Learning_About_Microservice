import moongose, { Document, Schema } from "mongoose";

type Contact = Document & {};

const ContactSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  },
  { timestamps: true }
);

export default moongose.model<Contact>("Contact", ContactSchema);
