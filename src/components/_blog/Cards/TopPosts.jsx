import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopBlogs } from 'features/blog/blogSlice'
import { Link } from 'react-router-dom'

const imgPlaceholder = 'https://networkertheme.com/gearbox/wp-content/uploads/sites/21/demo-image-00026-800x533.jpg'

const TopPostsCard = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog.topBlogs)
  useEffect(() => !posts.length && dispatch(fetchTopBlogs()), [dispatch, posts.length])

  return (
    <div className="blog__featured">
      <h4>Top Posts</h4>

      {posts.length &&
        posts.map((post) => (
          <PostCard key={post.id} id={post.id} thumb={post.thumb} title={post.title} views={post.views} />
        ))}
    </div>
  )
}

export default TopPostsCard

const PostCard = ({ id, thumb, title, views }) => (
  <Link to={'/blog/' + id}>
    <div className="card postCard">
      <img src={thumb ?? imgPlaceholder} alt={title} />

      <div>
        <h6>{title}</h6>
        <p>{views} views</p>
      </div>
    </div>
  </Link>
)
