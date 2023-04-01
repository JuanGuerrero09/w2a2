import {InferSchemaType, Schema, model} from 'mongoose'

const drawSchema = new Schema(
    {
      img: { type: String, required: true },
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
  
  type Draw = InferSchemaType<typeof drawSchema>;
  export default model<Draw>("draw", drawSchema);