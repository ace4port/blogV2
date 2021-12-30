import React from 'react'
import useFetch from 'hooks/useFetch'
import { useParams } from 'react-router-dom'
import { fetchOne } from 'api'
import { getDate } from 'functions/toDate'

import BlogHead from 'components/_blog/BlogHead'
import BlogBody from 'components/_blog/BlogBody'
import BlogBottom from 'components/_blog/BlogBottom'
import CommentSection from 'components/_blog/CommentSection'

import TopPostsCard from 'components/_blog/Cards/TopPosts'
import AuthorInfoCard from 'components/_blog/Cards/AuthorInfoCard'
import CategoriesCard from 'components/_blog/Cards/CategoriesCard'
import Loader from 'components/ui/Loader'

const Blog = () => {
  const { id } = useParams()
  const [data, loading, error] = useFetch(fetchOne, id)
  // todo: Thumbnail make it base64
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
          <BlogAside author={data?.user} />
        </div>
      )}
    </div>
  )
}

export default Blog

const BlogMain = ({ blog }) => {
  const blogImg =
    blog.thumbnail ??
    'https://images.pexels.com/photos/8929853/pexels-photo-8929853.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
  return (
    <div className="blog-container__main">
      <BlogHead
        title={blog.title}
        description={blog.description}
        blogImg={blogImg}
        category={blog?.category?.category_name}
        views={blog.views}
        created={getDate(blog?.created_at)}
        timeToRead={Math.ceil(Math.random() * 10)}
      />

      {/* To do: Create shareable links for aside buttonss */}
      <BlogBody body={blog.body} />

      <BlogBottom
        comments={blog.comments}
        likes={blog?.likes?.length}
        author={blog?.user}
        prev={blog?.previous_post}
        next={blog?.next_post}
      />

      <CommentSection />
    </div>
  )
}

const BlogAside = ({ author }) => {
  return (
    <div className="blog-container__aside">
      {/* Search bar component -- */}
      <AuthorInfoCard avatar={author?.avatar} name={author?.full_name} description={author?.description} />
      <CategoriesCard />
      <TopPostsCard />
      {/* <FollowUsCard /> */}
      {/* <AdCard /> */}
    </div>
  )
}

const LoadingSkel = () => (
  <div className="blog-container">
    <div className="blog-container__main">
      <Loader width={10} />
      <Loader height={48} />
      <Loader width={6} />
      <Loader height={512} />
      <Loader height={256} />
    </div>
    <div className="blog-container__aside">
      <Loader height={128} />
      <Loader height={256} />
      <Loader height={256} />
    </div>
  </div>
)
