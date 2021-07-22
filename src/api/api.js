import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const getProductsByPage = async (page=1, limit=9) => {
    const res = await instance.get(`/products?page=${page}&limit=${limit}`)
        .then(res => res.data)
        .catch(err => alert(err.response.data.message))

    return res
}

export const getProductsByCategory = async (category=null) => {
    const res = await instance.get(`/products?category=${category}`)
        .then(res => res.data)
        .catch(err => alert(err.response.data.message))

    return res
}

export const getProductsWithSearch = async (text=null) => {
    const res = await instance.get(`/products?text=${text}`)
        .then(res => res.data)
        .catch(err => alert(err.response.data.message))

    return res
}

export const userRegister = async ({username, password}) => {
    const res = await instance.post('/register', {username, password}).then(res => res.data).catch(err => alert(err.response.data.message))
    return res;
}

export const userLogin = async ({username, password}) => {
    const res = await instance.post('/login', {username, password}).then(res => res.data).catch(err => alert(err.response.data.message))
    return res;
}

export const userAuth = async (token) => {
    const res = await instance.get('/auth', {headers: {Authorization: 'Bearer ' + token}}).then(res => {
        localStorage.setItem('token', res.data.token)
        return res.data
    }).catch(err => alert(err.message))
    return res
}
