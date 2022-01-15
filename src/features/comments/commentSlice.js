import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchComments, getMyComments, postCommentNotLogged } from './commentAPI'
import { fireToast } from 'components/ui/Toast'

const initialState = {
  status: 'idle',
  commentList: [],
}

export const fetchComment = createAsyncThunk('comment/fetch', async (id) => {
  const response = await fetchComments(id)
  return response.data
})

export const fetchMyComments = createAsyncThunk('comment/my/fetchAll', async () => {
  const response = await getMyComments()
  return response.data
})

export const createComment = createAsyncThunk('comment/create', async (comment) => {
  const response = await postCommentNotLogged(comment)
  if (response.status === 201) {
    fireToast('success', 'Comment submitted for review')
  }
  return response.data
})

export const editComment = createAsyncThunk('comment/edit', async (post) => {
  const response = await fetchComments()
  //   const response = await editPost(post.id, post)
  if (response.status === 200) {
    fireToast('success', 'Post edit success')
    setTimeout(() => window.history.back(), 1000)
  }
  return response.data
})

export const deleteComment = createAsyncThunk('comment/delete', async (id) => {
  const response = await fetchComments()
  fireToast('info', 'Loading ...')
  //   const response = await deleteComment(id)
  if (response.status === 204) {
    fireToast('warning', 'Post deleted successfully')
  }
  return id
})

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchComment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.status = 'idle'
        state.count = action.payload.count
        state.commentList = action.payload?.results
      })

      .addCase(fetchMyComments.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchMyComments.fulfilled, (state, action) => {
        state.status = 'idle'
        state.count = action.payload.count
        state.commentList = action.payload?.results
        state.next = action.payload?.next
        state.prev = action.payload?.previous
      })

      .addCase(deleteComment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.status = 'success'
        state.count -= 1
        state.commentList = [...state.commentList.filter((cmt) => cmt.id !== action.payload)]
      })

      .addCase(createComment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.status = 'success'
        state.count += 1
        state.commentList = [action.payload, ...state.commentList]
      })

      .addCase(editComment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.status = 'success'
        state.commentList = [action.payload, ...state.commentList]
      })
  },
})

export default commentSlice.reducer
