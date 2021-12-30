import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { refresh } from 'api'

const initialState = {
  isLoggedIn: false,
  user: {},
  error: null,
  loading: false,
}

export const refreshToken = createAsyncThunk('auth/refreshToken', async () => {
  const token = localStorage.getItem('refresh')
  const response = await refresh(token)
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.isLoggedIn = true

      localStorage.setItem('refresh', payload.refresh)
      localStorage.setItem('access', payload.access)
      localStorage.setItem('user', JSON.stringify(payload.user))

      state.user = payload.user
    },
    logInLocal: (state) => {
      if (localStorage.getItem('user')) {
        state.isLoggedIn = true
        state.user = JSON.parse(localStorage.getItem('user'))
      } else {
        state.isLoggedIn = false
      }
      // to do: check if refresh token is valid
    },
    logOut: (state) => {
      state.isLoggedIn = false
      state.user = {}
      localStorage.removeItem('refresh')
      localStorage.removeItem('access')
      localStorage.removeItem('user')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshToken.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.status = 'idle'
        state.isLoggedIn = true
        localStorage.setItem('access', action.payload.access)
      })
      .addCase(refreshToken.rejected, (state) => {
        localStorage.clear()
        state.isLoggedIn = false
      })
  },
})

export const { logIn, logInLocal, logOut } = authSlice.actions

export const isLoggedIn = (state) => state.auth.isLoggedIn

export default authSlice.reducer
