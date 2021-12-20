import React from 'react'
import { FaTwitter, FaLinkedin, FaHeart, FaFacebookF, FaCommentAlt, FaRegCommentAlt, FaRegHeart } from 'react-icons/fa'
import AuthorInfoCard from './Cards/AuthorInfoCard'

const BlogBottom = ({ likes, comments, author, prev, next }) => {
  return (
    <div className="blogbottom">
      <div className="blogbottom__info">
        <div>
          <p>
            Share
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin />
          </p>
        </div>
        <div className="likeComment">
          <p>
            {+comments ? <FaCommentAlt /> : <FaRegCommentAlt />}
            {comments} comments
          </p>
          <p>
            {+likes ? <FaHeart /> : <FaRegHeart />}
            {likes} Like
          </p>
        </div>
      </div>

      <div className="blogbottom__author">
        <AuthorInfoCard thumb={author?.avatar} name={author?.full_name} info={author?.description} id={author?.id} />
        {/* <p>avatar</p>
        <div>
          <p>name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium pariatur sit id officia a saepe
            debitis asperiores blanditiis est.{' '}
          </p> */}
        {/* </div> */}
      </div>

      <div className="blogbottom__others">
        <div className="prevnext">
          <BlogShortCard type="prev" title={prev?.title} created={'20 Dec'} id={prev?.id} />
          <BlogShortCard type="next" title={next?.title} created={'20 Dec'} id={next?.id} />
        </div>
        <p>related posts</p>
      </div>
    </div>
  )
}

export default BlogBottom

const BlogShortCard = ({ type, thumb, title, created }) => (
  <div className="card">
    <p>{type} post</p>
    <img src={thumb} alt="thumnail" />
    <h4>{title}</h4>
    <span>{created}</span>
  </div>
)
