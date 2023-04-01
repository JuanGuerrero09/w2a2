import { InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  partnername: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  partnerId: { type: Schema.Types.ObjectId, ref: "User" },
  partnerPartnername: { type: String },
});

type User = InferSchemaType<typeof userSchema>
export default model<User>('User', userSchema)
