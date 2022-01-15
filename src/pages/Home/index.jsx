import React, { useEffect } from 'react'
import { fetchBlogs } from 'features/blog/blogSlice'
import { useDispatch, useSelector } from 'react-redux'

import BlogIntro from 'components/_blog/Cards/BlogInfo'
import { BlogIntroLoading } from 'components/_blog/Cards/BlogInfo'

const Home = () => {
  const dispatch = useDispatch()
  const blogsList = useSelector((state) => state.blog.blogsList)
  const blogsStatus = useSelector((state) => state.blog.status)
  useEffect(() => !blogsList.length && dispatch(fetchBlogs()), [dispatch, blogsList.length])

  return (
    <div className="main home">
      <Header />
      {blogsStatus === 'loading' && <div>Loading...</div>}
      <div className="blogsContainer">
        {blogsList.length
          ? blogsList.map((blog) => (
              <BlogIntro key={blog.id} readTime={`${Math.ceil(Math.random() * 10)} min read`} blog={blog} />
            ))
          : new Array(4).fill(0).map((_, i) => <BlogIntroLoading key={i} />)}
      </div>
    </div>
  )
}

export default Home

const Header = () => (
  <h1>
    <span>Learn 📚</span>
    <span> Practice 👩‍💻 </span>
    <span>Build 🚀</span>
  </h1>
)
