import React, { useEffect } from 'react'

import BlogHead from 'components/_blog/BlogHead'
import BlogBody from 'components/_blog/BlogBody'
import BlogBottom from 'components/_blog/BlogBottom'
import CommentSection from 'components/_blog/CommentSection'

import TopPostsCard from 'components/_blog/Cards/TopPosts'
import AuthorInfoCard from 'components/_blog/Cards/AuthorInfoCard'
import CategoriesCard from 'components/_blog/Cards/CategoriesCard'

import { fetchOne } from 'api'
import useFetch from 'hooks/useFetch'

const Blog = () => {
  const { loading, data, error } = useFetch(fetchOne, 2)

  useEffect(() => console.log(loading, data, error), [loading])

  return (
    <div>
      {loading && <h2>Loading .... </h2>}
      <div className="blog-container">
        <BlogMain blog={data} />
        <BlogAside />
      </div>
    </div>
  )
}

export default Blog

const BlogMain = ({ blog }) => {
  console.log(Date(blog.created_at))
  const blogImg =
    'https://images.pexels.com/photos/8929853/pexels-photo-8929853.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
  return (
    <div className="blog-container__main">
      <BlogHead
        title={blog.title}
        description={blog.description}
        blogImg={blogImg}
        category={'Technology'}
        views={blog.views}
        // created={Date(blog.created_at)}
        created={'20 Dec 2021'}
        timeToRead={Math.ceil(Math.random() * 10)}
      />

      <BlogBody body={blog.body} />
      <BlogBottom />
      <CommentSection />
    </div>
  )
}

const BlogAside = () => {
  return (
    <div className="blog-container__aside">
      <AuthorInfoCard />
      <CategoriesCard />
      <TopPostsCard />
      {/* <FollowUsCard /> */}
      {/* <AdCard /> */}
    </div>
  )
}

/* BLog structure --
body: "aasdasdasdasdasdasdadasd"
description: "asdasdascasca dadsca sdvsdvd sfvsddcsdcda"
title: "asdsad"
views: 11
user: 1

thumbnail: null
category: 2
created_at: "2021-12-19T21:29:05.469212+05:45"
updated_at: "2021-12-20T09:07:44.918527+05:45"
likes: []
id: 2

next_post: {id: 2, title: 'asdsad', thumbnail: ''}
previous_post: {id: 2, title: 'asdsad', thumbnail: ''}
*/
