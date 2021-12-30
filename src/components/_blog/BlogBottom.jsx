import React from 'react'
import { FaTwitter, FaLinkedin, FaHeart, FaFacebookF, FaCommentAlt, FaRegCommentAlt, FaRegHeart } from 'react-icons/fa'
import { PlainButton } from 'components/ui/Buttons'
import AuthorInfoCard from './Cards/AuthorInfoCard'

const BlogBottom = ({ likes, comments, author, prev, next }) => {
  return (
    <div className="blogbottom">
      <div className="blogbottom__info">
        <div className="icons">
          <p>
            Share
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin />
          </p>
        </div>
        <div className="icons">
          <p>
            {+comments ? <FaCommentAlt /> : <FaRegCommentAlt />}
            <a href="#comments">{comments} comments</a>
          </p>
          <p>
            {+likes ? <FaHeart /> : <FaRegHeart />}
            <PlainButton>{likes} Like</PlainButton>
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
          </p>  
        </div> */}
      </div>

      <div className="blogbottom__others">
        <div className="prevnext">
          <BlogShortCard
            type="prev"
            id={prev?.id}
            title={prev?.title}
            created={prev?.created_at}
            thumbnail={prev?.thumbnail}
          />

          <BlogShortCard
            type="next"
            id={next?.id}
            title={next?.title}
            created={next?.created_at}
            thumbnail={next?.thumbnail}
          />
        </div>
        <p>related posts</p>
      </div>
    </div>
  )
}

export default BlogBottom

const BlogShortCard = ({ type, id, thumbnail, title, created }) => (
  <div className="card">
    {/* To do: add link to post page using id */}
    <p>{type} post</p>
    <img src={thumbnail} alt="thumnail" />
    <h4>{title}</h4>
    <span>{created}</span>
  </div>
)
