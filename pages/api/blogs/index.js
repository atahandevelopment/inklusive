import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "@/Models/Blog";
import { verifyJwtToken } from "@/lib/jwt";

export default async function handler(req, res) {
    const { method } = req
    await mongooseConnect()

    const accessToken = req.headers.authorization;
    const token = accessToken?.split(" ")[1];

    const decodedToken = verifyJwtToken(token);


    if( method === "POST") {
        const { title, slug, description, images, category, properties, author} = req.body
        try {
            if (!accessToken || !decodedToken) {
                return res.status(401).json({ message: "Unauthorized" });
            } else {
                const newBlog = await Blog.create({
                    title,
                    slug: title.toLowerCase().replace(/[ı]/g, 'i')
                    .replace(/[ü]/g, 'u')
                    .replace(/[:]/g, '-')
                    .replace(/[ö]/g, 'o')
                    .replace(/[ş]/g, 's')
                    .replace(/[ğ]/g, 'g')
                    .replace(/[ç]/g, 'c').replace(/\s+/g, '-'),
                    description,
                    images,
                    category,
                    author,
                    properties
                })
                res.status(200).json({ success: true, message: "New blog created successfully", data: newBlog})
            }
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }


    if (method ==="GET") {
        try {
            const { id, title, description } = req.query;
            if(id) {
                res.status(200).json({data:await Blog.findById(id)})
            } else if(title) {
                const result = await Blog.find({title: title})
                res.status(200).json({ success:true, data: result})
            } else if (description) {
                const result = await Blog.find({category: description})
                res.status(200).json({ success:true, data: result})
            }  else {
                const result = await Blog.find()
                res.status(200).json({ success:true, data: result})
            }
           
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    if (method ==="PUT") {
        try {
            const {id} = req.query
            const {title, slug, images, category, description, properties } = req.body;

            if(!accessToken || !decodedToken) {
                return res.status(401).json({ message: "Unauthorized" });
            } else {
                const updateBlog = await Blog.updateOne(
                    {_id: id},
                    {
                    title,
                    slug:title.toLowerCase().replace(/[ı]/g, 'i')
                    .replace(/[ü]/g, 'u')
                    .replace(/[:]/g, '')
                    .replace(/[ö]/g, 'o')
                    .replace(/[ş]/g, 's')
                    .replace(/[ğ]/g, 'g')
                    .replace(/[ç]/g, 'c').replace(/\s+/g, '-'),
                    description,
                    images,
                    category,
                    properties
                })
               return res.status(200).json({ success: true, message: "Blog updated successfully", data: updateBlog})
            }
           
        } catch (error) {
          return  res.status(400).json({message: error.message})
        }
    }

    if (method ==="DELETE") {
        try {
            const {id} = req.query
            if(!accessToken || !decodedToken) {
                return res.status(401).json({ message: "Unauthorized" });
            } else {
                const deletedBlog = await Blog.updateOne(
                    {_id: id},
                 )
               return res.status(200).json({ success: true, message: "Blog deleted successfully", data: deletedBlog})
            }
           
        } catch (error) {
          return  res.status(400).json({message: error.message})
        }
    }
}