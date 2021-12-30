import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './BlogAPI'

const initialState = {
  status: 'idle',
  blogsList: [],
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchBlogs = createAsyncThunk('blog/fetchAll', async (amount) => {
  const response = await fetchPosts(amount)
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
