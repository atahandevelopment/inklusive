import api from "@/interceptor";

export const newBlog = async (data) => {
    return await api.post('/blogs', data);
}


export const updateBlog = async (id,data) => {
    return await api.put(`/blogs/${id}`, data);
}


export const getBlogs = async () => {
    return await api.get(`/blogs`);
}

export const getBlogsByquery = async (id, title, slug, author, categories) => {
    let url = `/blogs`

    if(id) {
        url += `?id=${id}`
    }
    if(title) {
        url += `&title=${title}`
    }
    if(slug) {
        url += `&slug=${slug}`
    }
    if(author) {
        url += `&author=${author}`
    }
    if(categories) {
        url += `&categories=${categories}`
    }
    
    return await api.get(url);
}


export const deleteBlog = async (id) => {
    return await api.delete(`/blogs/${id}`);
}