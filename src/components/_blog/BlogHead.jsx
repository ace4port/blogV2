import React from 'react'
import { FiBarChart2 } from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'

const BlogHead = ({ blogImg, title, category, views, timeToRead, created }) => {
  return (
    <div className="bloghead">
      <div className="bloghead__top">
        <p className="feature">{category}</p>
        <p className="views">
          <FiBarChart2 />
          {views} views
        </p>
        <p className="time">
          <MdAccessTime />
          {timeToRead + 'min read'}
        </p>
        <p className="time">
          <MdAccessTime />
          {created}
        </p>
      </div>
      {/* <h1 className="blog__title">{'What Would It Take to Shut Down the Entire Internet?'}</h1> */}
      <h1 className="blog__title">{title}</h1>
      <img className="blog__img" src={blogImg} alt="blog featured" />
    </div>
  )
}

export default BlogHead
