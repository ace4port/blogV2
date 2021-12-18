import axios from "axios"

const url = "https://blog-api7991.herokuapp.com/blog-api"

// Home page
export const fetchPosts = (page) => axios.get(`${url}/posts?limit=5/${page ? `%2F&page=${page}` : ""}`)

// Single post crud
export const fetchOne = (id) => axios.get(`${url}/posts/${id}/`)
export const createPost = (newPost, config) => axios.post(`${url}/posts/`, newPost, config)
export const updatePost = (id, updatedPost, config) => axios.patch(`${url}/posts/${id}/`, updatedPost, config)
export const deletePost = (id, config) => axios.delete(`${url}/posts/${id}/`, config)

// Like and unlike post
export const likePost = (id, config) => axios.put(`${url}/posts/${id}/likes/`, {}, config)

// Follow unfollow user
export const follow = (id, config) => axios.put(`${url}/users/${id}/followers/`, {}, config)

// c-ud restricted to admin only
export const getCategories = () => axios.get(`${url}/categories/`)
