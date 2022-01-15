import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createPost, deletePost, editPost, fetchMyPosts, fetchPosts, fetchTopPosts } from './blogAPI'
import { fireToast } from 'components/ui/Toast'

const initialState = {
  status: 'idle',
  blogsList: [],
  topBlogs: [],
}

export const fetchBlogs = createAsyncThunk('blog/fetchAll', async (amount) => {
  const response = await fetchPosts(amount)
  return response.data
})

export const fetchTopBlogs = createAsyncThunk('blog/fetch/top', async () => {
  const response = await fetchTopPosts()
  return response.data
})

export const fetchMyBlogs = createAsyncThunk('blog/my/fetchAll', async (amount) => {
  const response = await fetchMyPosts(amount)
  return response.data
})

export const createBlog = createAsyncThunk('blog/create', async (post) => {
  const response = await createPost(post)
  if (response.status === 201) {
    fireToast('success', 'Post created')
    setTimeout(() => window.history.back(), 1000)
  }
  return response.data
})

export const editBlog = createAsyncThunk('blog/edit', async (post) => {
  const response = await editPost(post.id, post)
  if (response.status === 200) {
    fireToast('success', 'Post edit success')
    setTimeout(() => window.history.back(), 1000)
  }
  return response.data
})

export const deleteBlog = createAsyncThunk('blog/delete', async (id) => {
  fireToast('info', 'Loading ...')
  const response = await deletePost(id)
  if (response.status === 204) {
    fireToast('warning', 'Post deleted successfully')
  }
  return id
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

      .addCase(fetchMyBlogs.fulfilled, (state, action) => {
        state.status = 'idle'
        state.count = action.payload.count
        state.blogsList = action.payload?.results
        state.next = action.payload?.next
        state.prev = action.payload?.previous
      })

      .addCase(fetchTopBlogs.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTopBlogs.fulfilled, (state, action) => {
        state.status = 'idle'
        state.topBlogs = action.payload
      })

      .addCase(deleteBlog.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.status = 'success'
        state.count -= 1
        state.blogsList = [...state.blogsList.filter((blog) => blog.id !== action.payload)]
      })

      .addCase(createBlog.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.status = 'success'
        state.count += 1
        state.blogsList = [action.payload, ...state.blogsList]
      })

      .addCase(editBlog.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(editBlog.fulfilled, (state, action) => {
        state.status = 'success'
        state.blogsList = [action.payload, ...state.blogsList]
      })
  },
})

export default blogSlice.reducer
