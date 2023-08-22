// pages/api/users.js

import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/Models/User";
import bcrypt from "bcrypt"

export default async function handler(req, res) {

 await mongooseConnect()
  const { method } = req


  if (method === 'POST') {
    try {
      const { fullname, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ 
          fullname, 
          email, 
          password:hashedPassword,
          role:role
        });
        return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } 

  const { fullname, email } = req.query;
  if (method === "GET") {
    try {
      if(req.query.id) {
        res.status(200).json(await User.findById(req.query.id));
      } else if (fullname) {
        const findItem = await User.find({fullname: fullname});
        res.status(200).json({success: 'OK', data: findItem});
      } else if (email) {
        const findItem = await User.find({email: email});
        res.status(200).json({success: 'OK', data: findItem});
      } else {
        res.status(200).json({success:'OK', data: await User.find()})
      }
   
    } catch (error) {
      res.status(400).json({ message: error.message });
    } 
  }

  if( method === "PUT") {
    try {
      const {id} = req.query;
      const {fullname, email, password}= req.body
      const hashedPassword = await bcrypt.hash(password, 10)
      const updatedUser = await User.updateOne(
        {_id: id},
        {
        fullname,
        email,
        password: hashedPassword
      }
        )
        res.status(200).json({success: true, message: "User updated successfully", data: updatedUser})
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  if (method === "DELETE") {
    try {
      if(req.query.id) {
       const deletedUser = await User.deleteOne({_id: req.query.id })
        res.status(200).json({ success: true, message:"Deleted successfully", data: deletedUser})
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

