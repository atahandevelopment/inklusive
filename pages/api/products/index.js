// pages/api/products.js
import { Product } from "@/Models/Product";
import { mongooseConnect } from "@/lib/mongoose";


export default async function handler(req, res) {

    const { method } = req
    await mongooseConnect()

  if (method === 'POST') {
    try {
      const { title, description,price, images, category, properties } = req.body;
      const product = await Product.create({ title, description,price, images, category, properties });
      return res.status(201).json({success: 'OK', data: product});
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } 

  if (method === 'GET') {
    try {
      const { title, price, category } = req.query;
      if(title) {
        const product = await Product.find({ title: title });
        return res.status(200).json({success: 'OK', data: product});
      } else if (price){
        const product = await Product.find({ price: price });
        return res.status(200).json({success: 'OK', data: product});
      }else if (category){
        const product = await Product.find({ price: category });
        return res.status(200).json({success: 'OK', data: product});
      }
      
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } 
}

