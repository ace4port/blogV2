import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment, fetchComment } from './commentSlice'

import Avatar from 'components/ui/Avatar'
import Button from 'components/ui/Buttons'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getDate } from 'functions/toDate'

const CommentSection = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const commentList = useSelector((state) => state.comment.commentList)

  useEffect(() => !commentList.length && dispatch(fetchComment(id)), [dispatch, commentList.length, id])

  return (
    <div>
      <h3>Comments ({commentList.length})</h3>
      <span>
        <sub>*Comments have to be approved before they appear here</sub>
      </span>

      <CommentForm />

      <div className="card comments">
        {commentList.length ? (
          commentList.map((comment) => comment.is_visible && <Comment key={comment.id} comment={comment} />)
        ) : (
          <span>wow so empty</span>
        )}
      </div>

      <br />
      <br />
    </div>
  )
}

export default CommentSection

const CommentForm = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [formdata, setformdata] = useState({ full_name: '', email: '', comment: '' })
  const _handleChange = (e) => setformdata({ ...formdata, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createComment({ ...formdata, post: id }))
  }

  return (
    <form onSubmit={handleSubmit} className="card comment-form">
      <h4>Leave a comment</h4>

      <textarea name="content" value={formdata.content} onChange={_handleChange} placeholder="Comment" required />

      <div className="comment-form__bottom">
        <div>
          <label htmlFor="full_name">Full Name: </label>
          <input
            type="text"
            name="full_name"
            value={formdata.full_name}
            onChange={_handleChange}
            placeholder="your-name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            name="email"
            placeholder="email address"
            value={formdata.email}
            onChange={_handleChange}
            required
          />
        </div>
      </div>

      <div className="comment-form__submit">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

const Comment = ({ id, comment }) => {
  return (
    <div className="card comment">
      <Avatar size="medium" />

      <div className="comment__content">
        <div className="comment__header">
          <h4 className="comment__author">
            <a href={'/author/' + id}>{comment.user_detail.username}</a>
          </h4>
          <span className="comment__date">{getDate(comment.created_at)}</span>
          {/* <span className="comment__date">2 days ago</span> */}
        </div>

        <p className="comment__text">{comment.content}</p>
        <div className="comment__actions">
          <Button>Reply</Button>
          {parseInt(comment.replies) ? <Button>View {comment.replies} replies</Button> : null}
        </div>
      </div>
    </div>
  )
}
