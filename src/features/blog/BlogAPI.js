import axios from 'axios'

import { URL } from 'constants'
import { getConfig } from 'api'

const url = `${URL}/posts`

export const fetchPosts = (page) => axios.get(`${url}?limit=5/${page ? `%2F&page=${page}` : ''}`)

export const deletePost = (id) => axios.delete(`${url}/${id}/`, getConfig())
