import React, {useState} from 'react';
import axios from 'axios';

export async function getServerSideProps(context) {
let blogs = await axios.get(`http://localhost:3000/api/blogs?id=` + context.query.id)
        blogs = JSON.parse(JSON.stringify(blogs.data))

   return {
        props:{
            blogs,
        }
    }
}

export default function BlogDetail(props) {
    const [blogData, setBlogData] = useState(props.blogs ? props.blogs?.data : "")

    return (
        <div className='w-500 h-screen'>
            <h1 className='fw-bold'>{blogData.title}</h1>
            <div>{blogData.description}</div>
        </div>
    )
}