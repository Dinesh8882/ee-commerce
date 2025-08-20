import axios from "./axiosInstance";

export const loginUser = (user) => {
    return axios.post('/user/login', user)
}

export const registerUser = (user) => {
    return axios.post('/user/register', user)
}

export const updateUser = (user, token) => {
    if (!user?._id) throw new Error("User ID is required for updating");
    return axios.put(`/user/update/${user._id}`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}