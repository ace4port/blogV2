import React from 'react'
import { FaTwitter, FaLinkedin, FaHeart, FaFacebookF, FaCommentAlt, FaRegCommentAlt, FaRegHeart } from 'react-icons/fa'
import { PlainButton } from 'components/ui/Buttons'
import AuthorInfoCard from 'components/_blog/Cards/AuthorInfoCard'
import { Link } from 'react-router-dom'
import { getDate } from 'functions/toDate'

const BlogBottom = ({ likes, comments, author, prev, next }) => {
  return (
    <div className="blogbottom">
      <div className="blogbottom__info">
        <div className="icons">
          <p>
            Spread the word
            <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet">
              <FaFacebookF />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet">
              <FaTwitter />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet">
              <FaLinkedin />
            </a>
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
      <hr />

      <div className="blogbottom__author">
        <AuthorInfoCard thumb={author?.avatar} name={author?.full_name} info={author?.description} id={author?.id} />
      </div>

      <div className="blogbottom__others">
        <div className="prevnext">
          <BlogShortCard
            type="⏮ Prev post "
            id={prev?.id}
            title={prev?.title}
            created={prev?.created_at}
            thumbnail={prev?.thumbnail}
          />

          <BlogShortCard
            type="Next post ⏭"
            id={next?.id}
            title={next?.title}
            created={next?.created_at}
            thumbnail={next?.thumbnail}
          />
        </div>
        <p>Future feature- related posts</p>
      </div>
    </div>
  )
}

export default BlogBottom

const BlogShortCard = ({ type, id, thumbnail, title, created }) => (
  <Link to={`/blog/${id}`}>
    <div className="card">
      <p>{type}</p>
      {thumbnail && <img src={thumbnail} alt="thumnail" />}
      <h4>{title}</h4>
      <span>{getDate(created)}</span>
    </div>
  </Link>
)
