import useFetch from 'hooks/useFetch'
import { BlogMain } from 'pages/Blog'
import { LoadingSkel } from 'pages/Blog'
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchOne } from './blogAPI'

const BlogView = () => {
  const { id } = useParams()
  const [data, loading, error] = useFetch(fetchOne, id)
  return (
    <div>
      {loading && <LoadingSkel />}
      {error ? (
        <h4>
          {error?.status} {error?.message}
        </h4>
      ) : (
        <div className="blog-container">
          <BlogMain blog={data} />
        </div>
      )}
    </div>
  )
}

export default BlogView
