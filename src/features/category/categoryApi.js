import axios from 'axios'

import { URL } from 'constants'

const url = `${URL}/categories`

export const fetchCategories = () => axios.get(url)

export const fetchCategory = (id) => axios.get(`${url}/${id}`)

export const createCategory = (category) => axios.post(url, category)

export const updateCategory = (id, category) => axios.put(`${url}/${id}`, category)

export const deleteCategory = (id) => axios.delete(`${url}/${id}`)
