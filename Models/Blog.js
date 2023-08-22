import mongoose, { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String},
  description: { type: String, required: true },
  images: [{ type: String }],
  category: { type: mongoose.Types.ObjectId, ref: "Category" },
  author: { type: mongoose.Types.ObjectId, ref: "User" },
  properties: [{ type: Object }],
},{timestamps: true});
export const Blog = models.Blog || model("Blog", BlogSchema);
