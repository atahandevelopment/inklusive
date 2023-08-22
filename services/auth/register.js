import api from "@/interceptor";


export const registerApi = async (data) => {
    return await api.post('/users', data);
}

export const getMe = async (id) => {
    return await api.get('/users?id=' + id);
}