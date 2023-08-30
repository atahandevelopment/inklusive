import api from "@/interceptor"

export const getUsers = async() => {
    return await api.get('/users')
}