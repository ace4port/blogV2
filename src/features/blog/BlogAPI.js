import axios from 'axios'

import { URL } from 'constants'
import { getConfig } from 'api'

const url = `${URL}/posts`

export const fetchOne = (id) => axios.get(`${url}/${id}/`)
export const fetchTopPosts = () => axios.get(`${url}/top_posts`)
// export const fetchPosts = (page) => axios.get(`${url}?limit=5/${page ? `%2F&page=${page}` : ''}`)
export const fetchPosts = () => axios.get(`${url}`)

export const createPost = (newPost) => axios.post(`${url}/`, newPost, getConfig())

export const editPost = (id, updatedPost) => axios.patch(`${url}/${id}/`, updatedPost, getConfig())

export const deletePost = (id) => axios.delete(`${url}/${id}/`, getConfig())

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// fetch all comments of a post
// export const fetchComments = (id) => axios.get(`${url}/${id}/comments/`)
// Like and unlike post
export const likePost = (id, config) => axios.put(`${url}/${id}/likes/`, {}, config)
// Follow unfollow user
export const follow = (id, config) => axios.put(`${url}/users/${id}/followers/`, {}, config)
