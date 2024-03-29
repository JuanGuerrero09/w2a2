import { InferSchemaType, Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sharedWith:
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
  },

  { timestamps: true }
);

type Note = InferSchemaType<typeof noteSchema>;
export default model<Note>("Note", noteSchema);
