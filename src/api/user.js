import axios from 'axios'
import { URL } from 'constants'
const url = URL + '/accounts'

export const logIn = ({ username, password }) => axios.post(`${url}/user_login/`, { username, password })

export const register = ({ username, email, password }) =>
  axios.post(`${url}/user_register/`, { username, email, password })

export const refresh = (tokenR) => axios.post(`${url}/user_refresh_token/`, { refresh: tokenR })

export const logOut = () => axios.post(`${url}/user_logout`)

export const user = (id) => axios.get(`${url}/users/${id}/`)

export const profile = () => axios.get(`${url}/me/profile/`)
export const updateUser = (id, details, config) => axios.put(`${url}/users/${id}/`, details, config)

export const updateProfile = (id, formData, config) => axios.put(`${url}/users/${id}/profile/`, formData, config)

// api not working ...
export const changePw = () => axios.post(`${url}/me/change_password/`)
