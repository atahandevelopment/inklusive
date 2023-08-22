import mongoose, {Schema, models, model} from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}
,{timestamps: true, unique: true}
);


export const User = models.User || model("User", userSchema);