import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import Loader from 'components/ui/Loader'
import { RoundButton, PlainButton } from 'components/ui/Buttons'

import { ImBin2, ImEye } from 'react-icons/im'
import { MdModeEditOutline, MdOutlineAdd, MdRefresh } from 'react-icons/md'

import { deleteBlog, fetchBlogs, fetchMyBlogs } from './blogSlice'
import useCategory from 'hooks/useCategory'
import { TodoList } from 'pages/Blog/BlogList'

const BlogList = () => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const blogList = useSelector((state) => state.blog.blogsList)
  const blogListLoading = useSelector((state) => state.blog.status)

  useEffect(() => {
    dispatch(fetchMyBlogs())
  }, [dispatch, blogList.length])

  return (
    <div>
      <TodoList items={['Image upload', 'multi select', 'select all', 'delete all']} />

      <h1>Blogs</h1>
      <div className="buttons">
        <RoundButton handleClick={() => nav('create')}>
          <MdOutlineAdd />
          Create new blog
        </RoundButton>

        <RoundButton variant="disabled">
          <ImBin2 />
          Delete
        </RoundButton>
        <RoundButton variant="disabled">Logs</RoundButton>
        <RoundButton variant="info" handleClick={() => dispatch(fetchBlogs())}>
          <MdRefresh />
          Refresh
        </RoundButton>
      </div>

      {/*  To do: Implement actual filtering ... 
      <div className="filters">
        <h5>Filters</h5>
      </div>     */}

      {/* Actual table */}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              {['Thumb', 'Title', 'Date', 'Views', 'Likes', 'Comments', 'Category', 'Actions'].map((item) => (
                <th key={item}>{item}</th>
              ))}
              {/* <th>Status</th> [hidden, published, draft] */}
            </tr>
          </thead>

          <tbody>
            {blogListLoading === 'loading' && (
              <tr>
                <td>
                  <h4>Loading...</h4>
                </td>
              </tr>
            )}
            {blogList.map((blog) => (
              <BlogItem blog={blog} key={blog.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogList

const BlogItem = ({ blog }) => {
  const dispatch = useDispatch()
  const nav = useNavigate()

  const category = useCategory(blog.category)
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
        dispatch(deleteBlog(id))
        Swal.fire('warning', 'Your file has been deleted.')
      }
    })
  }
  return (
    <tr key={blog.id}>
      <td>
        {/* {JSON.stringify(blog)} */}
        <input type="checkbox" />
      </td>

      <td>
        {blog.thumbnail ? <img src={blog.thumbnail} alt="thumbnail" /> : <Loader height={50} width={50} />}
        {/* <Loader height={50} width={50} /> */}
      </td>
      <td>
        <Link to={`${blog.id}`}>
          <h4>{blog.title}</h4>
        </Link>
        {blog.description}
      </td>
      <td>{new Date(blog.created_at).toDateString()}</td>
      <td>{blog.views}</td>
      <td>{blog?.likes && blog.likes.length}</td>

      <td>
        <Link to={'/dashboard/comments'}>{blog.comments}</Link>
      </td>

      <td>{category}</td>

      <td>
        <PlainButton handleClick={() => nav(`${blog.id}`)}>
          <ImEye />
        </PlainButton>

        <PlainButton handleClick={() => nav(`${blog.id}/edit`)}>
          <MdModeEditOutline />
        </PlainButton>
        <PlainButton variant="danger" handleClick={() => handleDelete(blog.id)}>
          <ImBin2 />
        </PlainButton>
      </td>
    </tr>
  )
}
