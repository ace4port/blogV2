import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deletePost, fetchPosts } from './BlogAPI'

const initialState = {
  status: 'idle',
  blogsList: [],
}

export const fetchBlogs = createAsyncThunk('blog/fetchAll', async (amount) => {
  const response = await fetchPosts(amount)
  return response.data
})
export const deleteBlog = createAsyncThunk('blog/delete', async (id) => {
  const response = await deletePost(id)
  return response.data
})

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'idle'
        state.count = action.payload.count
        state.blogsList = action.payload?.results
        state.next = action.payload?.next
        state.prev = action.payload?.previous
      })
  },
})

export default blogSlice.reducer
