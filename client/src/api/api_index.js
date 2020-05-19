import axios from 'axios'
import backend_config from '../config/backend_config'

const api = axios.create({
    baseURL: backend_config.baseURL,
})

export const createUser = payload => api.post(`/user/create`, payload)
export const getAllUsers = () => api.get(`/user/all`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    createUser,
    getAllUsers,
}

export default apis