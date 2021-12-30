import axios from 'axios'

import { URL } from 'constants'

const url = `${URL}/posts`

export const fetchPosts = (page) => axios.get(`${url}?limit=5/${page ? `%2F&page=${page}` : ''}`)
