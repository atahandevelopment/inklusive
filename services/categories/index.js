import api from "@/interceptor";


export const getCategories = async() => {
    return await api.get("/categories");
}

export const newCategory = async(data) => {
    return await api.post("/categories", data);
}

export const editCategory = async(id, data) => {
    return await api.put(`/categories?id=${id}`, data);
}

export const deleteCategory = async(id) => {
    return await api.delete(`/categories?id=${id}`);
}