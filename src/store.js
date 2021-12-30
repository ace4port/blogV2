import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'features/counter/counterSlice'
import authReducer from 'features/auth/authSlice'
import blogReducer from 'features/blog/blogSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    blog: blogReducer,
  },
})
