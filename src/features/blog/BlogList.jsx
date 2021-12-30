import { PlainButton } from 'components/ui/Buttons'
import { RoundButton } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import { Spinner } from 'components/ui/loaders/Spinners'
import React, { useEffect } from 'react'
import { ImBin2, ImEye } from 'react-icons/im'
import { MdModeEditOutline, MdOutlineAdd } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { fetchBlogs } from './blogSlice'

const BlogList = () => {
  const dispatch = useDispatch()
  const blogList = useSelector((state) => state.blog.blogsList)
  const blogListLoading = useSelector((state) => state.blog.status)

  useEffect(() => {
    if (!blogList.length) dispatch(fetchBlogs())
  }, [dispatch, blogList.length])

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        // dispatch(deleteBlog(id))
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <div>
      <h1>Blogs</h1>
      <div className="buttons">
        <RoundButton>
          <MdOutlineAdd />
          Create new blog
        </RoundButton>
        <RoundButton variant="danger">
          <ImBin2 />
          Delete
        </RoundButton>
        <RoundButton variant="disabled">Logs</RoundButton>
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
              <th>Thumb</th>
              <th>Title</th>
              <th>Date</th>
              <th>Views</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Category</th>
              {/* <th>Status</th> [hidden, published, draft] */}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogListLoading === 'loading' && <Spinner />}
            {blogList.map((blog) => (
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
                  <h4>{blog.title}</h4>
                  {blog.description}
                </td>
                <td>{new Date(blog.created_at).toDateString()}</td>
                <td>{blog.views}</td>
                <td>{blog?.likes && blog.likes.length}</td>
                <td>{blog.comments}</td>
                <td>{blog.category}</td>

                <td>
                  <PlainButton>
                    <ImEye />
                  </PlainButton>
                  <PlainButton>
                    <MdModeEditOutline />
                  </PlainButton>
                  <PlainButton variant="danger" handleClick={handleDelete}>
                    <ImBin2 />
                  </PlainButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogList
