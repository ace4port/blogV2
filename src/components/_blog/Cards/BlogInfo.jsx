import { Link } from 'react-router-dom'
import useCategory from 'hooks/useCategory'
import { AiOutlineArrowRight } from 'react-icons/ai'

function BlogIntro({ readTime, blog }) {
  const category = useCategory(blog.category)

  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className="card blog-info">
        <span className="categ">{category}</span>

        <h2>{blog.title}</h2>
        <p className="desc">{blog.description}..</p>

        <span className="views">{new Date(blog.updated_at).toDateString()}</span>

        <div className="bottom">
          <span>
            Read More <AiOutlineArrowRight />
          </span>
          <span>{blog.user_detail?.username}</span>
        </div>
        <div className="read-time">
          <span className="views">{readTime}</span>
          <span className="views">{blog.views} views</span>
        </div>
      </div>
    </Link>
  )
}

export default BlogIntro
