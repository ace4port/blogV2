import { configureStore } from '@reduxjs/toolkit'

import authReducer from 'features/auth/authSlice'
import blogReducer from 'features/blog/blogSlice'
import counterReducer from 'features/counter/counterSlice'
import commentReducer from 'features/comments/commentSlice'
import categoryReducer from 'features/category/categorySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    category: categoryReducer,
    blog: blogReducer,
    comment: commentReducer,
  },
})
