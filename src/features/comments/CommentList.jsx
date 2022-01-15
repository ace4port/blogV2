import React, { useState, useEffect } from 'react'
import { getDate } from 'functions/toDate'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyComments } from './commentSlice'

import Swal from 'sweetalert2'
import { ImBin2 } from 'react-icons/im'
import { PlainButton } from 'components/ui/Buttons'
import { Puff } from 'components/ui/loaders/Spinners'
import { Link } from 'react-router-dom'

const CommentList = () => {
  const dispatch = useDispatch()
  const commentList = useSelector((state) => state.comment.commentList)
  const commentStatus = useSelector((state) => state.comment.status)

  useEffect(() => !commentList.length && dispatch(fetchMyComments()), [dispatch, commentList.length])

  return (
    <div>
      <h1>Comments</h1>
      <hr />
      To do(remaining tasks to be done):
      <ul>
        <li>Table css</li>
        <li>Date shorten</li>
        <li>Make api calls/functioning of toggle and delete</li>
      </ul>
      <hr />
      <div>
        <table className="table">
          {/* <TableHead items={['Created At', 'Content', 'Post', 'User', 'Replies', 'Visible', 'Delete']} /> */}
          <TableHead items={['Date', 'Content', 'Post', 'User', 'Replies', 'Visibility', 'Delete']} />

          <tbody>
            {commentStatus === 'loading' && <Loading />}
            {commentList.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CommentList

const Loading = () => (
  <tr>
    <td>
      <h4>
        Loading...
        <Puff style={{ backgroundColor: 'rebeccapurple' }} />
      </h4>
    </td>
  </tr>
)

const CommentItem = ({ comment }) => {
  // const dispatch = useDispatch()
  const [is_visible, setIsVisible] = useState(comment.is_visible)
  const toggleVisible = () => {
    // dispatch(toggleVisible(comment.id))
    setIsVisible(!is_visible)
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        //  dispatch(deleteBlog(id))
        Swal.fire('warning', 'Your comment has been deleted.')
      }
    })
  }

  return (
    <tr>
      {/* <td>
        <input type="checkbox" />
      </td> */}

      <td>{getDate(comment.created_at)}</td>

      <td>
        <h4>{comment.content}</h4>
      </td>

      <td>
        <Link to={'../posts/' + comment.post}>{comment.post}</Link>
      </td>

      <td>{comment?.user_detail?.username}</td>

      <td>{comment.replies}</td>

      <td>
        <label htmlFor="comment_visible">{is_visible ? 'Visible' : 'Hidden'}</label>
        <input
          type="checkbox"
          name="comment_visible"
          id="comment_visible"
          checked={is_visible}
          onChange={toggleVisible}
        />
      </td>

      <td>
        <PlainButton variant="danger" handleClick={() => handleDelete(comment.id)}>
          <ImBin2 />
        </PlainButton>
      </td>
    </tr>
  )
}

const TableHead = ({ items }) => {
  return (
    <thead>
      <tr>
        {/* <th>
                <input type="checkbox" />
              </th> */}
        {items.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  )
}
