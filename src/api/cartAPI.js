import axios from './axiosInstance'

export const getProduct = async (token) => {
    return await axios.get('/cart-products', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const addToCart = async (item, token) => {
    return await axios.post('/cart', item, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteProduct = async (productId, token) => {
    return await axios.delete(`/delete/${productId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const increaseQuantity = async (id, token) => {
    return await axios.patch(`/cart/inscreas/${id}`,{}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const decreaseQuantity = async (id, token) => {
    return await axios.patch(`/cart/decrease/${id}`,{}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}