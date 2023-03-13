import { InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  partner: { type: Schema.Types.ObjectId, ref: "User" },
});

type User = InferSchemaType<typeof userSchema>
export default model<User>('User', userSchema)
