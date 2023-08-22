import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/Models/Category";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

export default async function handler (req, res) {
    const { method } = req;
    await mongooseConnect()

    if (method === 'POST') {
        try {
          const { label,slug, images, parent } = req.body;
          const category = await Category.create({ 
            label,
            slug:label.toLowerCase().replace(/[ı]/g, 'i')
            .replace(/[ü]/g, 'u')
            .replace(/[ö]/g, 'o')
            .replace(/[ş]/g, 's')
            .replace(/[ğ]/g, 'g')
            .replace(/[ç]/g, 'c').replace(/\s+/g, '-'),
            images,
            parent
         });
          return res.status(201).json({success: 'OK', data: category});
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      } 


    if (method ==="GET") {
        try {
            const { label, slug, parent } = req.query;
            if(req.query.id) {
               return res.status(200).json({data:await Category.findById(req.query.id)})
            } else if(label) {
                const result = await Category.find({label: label})
               return res.status(200).json({ success:true, data: result})
            } else if (slug) {
                const result = await Category.find({slug: slug})
               return res.status(200).json({ success:true, data: result})
            } else if (parent) {
                const result = await Category.find({parent: parent})
               return res.status(200).json({ success:true, data: result})
            } else {
                const result = await Category.find()
               return res.status(200).json({ success:true, data: result})
            }
           
        } catch (error) {
           return res.status(400).json({message: error.message})
        }
    }

    if ( method === "PUT") {
      try {
        const {id} = req.query;
        const { label, parent} = req.body;

        if( id ) {
          await Category.updateOne({
            _id: id
          },
          {
            label,
            parent
          }
          ).then( upd => {
            res.status(200).json({success: true, message: "Updated category successfully", data: upd})
          })
         
        } else {
          throw new Error("Couldn't update category")
        }
      } catch (error) {
        res.status(400).json({message: error.message})
      }
    }

    if ( method === "DELETE") {
      try {
        const {id} = req.query;
        if( id ) {
          await Category.deleteOne({
            _id: id
          }
          ).then( upd => {
            res.status(200).json({success: true, message: "Category Delete successfully", data: upd})
          })
         
        } else {
          throw new Error("Couldn't update category")
        }
      } catch (error) {
        res.status(400).json({message: error.message})
      }
    }
}