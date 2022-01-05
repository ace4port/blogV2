import React, { useEffect } from 'react'
import { fetchBlogs } from 'features/blog/blogSlice'
import { useDispatch, useSelector } from 'react-redux'
import BlogIntro from 'components/_blog/Cards/BlogInfo'

const Home = () => {
  const dispatch = useDispatch()
  const blogsList = useSelector((state) => state.blog.blogsList)
  useEffect(() => !blogsList.length && dispatch(fetchBlogs()), [dispatch, blogsList.length])

  return (
    <div>
      <Header />
      {/* blog.data.isPublished*/}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around ' }}>
        {blogsList.length &&
          blogsList.map((blog) => (
            <BlogIntro key={blog.id} readTime={`${Math.ceil(Math.random() * 10)} min read`} blog={blog} />
          ))}
      </div>
    </div>
  )
}

export default Home

const Header = () => (
  <div className="pt-24 px-12 mx-auto max-w-7xl">
    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
      <h1 className="mb-8 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50">
        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-purple-500 lg:inline">
          Learn
        </span>{' '}
        <span>Practice</span> <span>Build 🚀</span>
      </h1>
    </div>
  </div>
)
