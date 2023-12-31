import mongoose, { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
  label: { type: String, required: true },
  slug: { type: String},
  images: [{ type: String }],
  parent: { type: mongoose.Types.ObjectId, ref: "Category" },
},{timestamps:true});
export const Category = models.Category || model("Category", CategorySchema);
