import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from './categoryApi'

const initialState = {
  status: 'idle',
  categoryList: [],
}

export const fetchCategory = createAsyncThunk('category/fetchAll', async () => {
  const response = await fetchCategories()
  return response.data
})

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'idle'
        state.count = action.payload.count
        state.categoryList = action.payload?.results
      })
  },
})

export const categoryList = (state) => state.category.categoryList
export default categorySlice.reducer
