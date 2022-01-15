import { getConfig } from 'api'
import axios from 'axios'
import { URL } from 'constants'

const url = URL + '/comments'

// comment crud
export const fetchComments = (id) => axios.get(url + '/?post=' + id)
export const getMyComments = () => axios.get(url + '/?post=')

export const postComment = (comment) => axios.post(`${url}/comments/`, comment, getConfig())
export const postCommentNotLogged = (comment) => axios.post(url + '/', comment)

export const updateComment = (id, comment, config) => axios.patch(`${url}/comments/${id}/`, comment, config)
export const deleteComment = (id, config) => axios.delete(`${url}/comments/${id}/`, config)

// comment reply actions : Note- They are not implemented in redux
export const fetchReplies = (id) => axios.get(`${url}/comments/${id}/replies/`)
export const postReply = (reply, config) => axios.post(`${url}/replies/`, reply, config)
export const updateReply = (id, reply, config) => axios.patch(`${url}/replies/${id}/`, reply, config)
export const deleteReply = (id, config) => axios.delete(`${url}/replies/${id}/`, config)
