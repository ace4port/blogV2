import React from 'react'
import { FaTwitter, FaLinkedin, FaHeart, FaFacebookF, FaCommentAlt, FaRegCommentAlt, FaRegHeart } from 'react-icons/fa'

const BlogBottom = () => {
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
            <FaRegCommentAlt />3 comments
            <FaCommentAlt />
          </p>
          <p>
            <FaRegHeart /> Like
            <FaHeart />
          </p>
        </div>
      </div>

      <div className="blogbottom__author">
        <p>avatar</p>
        <div>
          <p>name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium pariatur sit id officia a saepe
            debitis asperiores blanditiis est.{' '}
          </p>
        </div>
      </div>

      <div className="blogbottom__others">
        <div className="prevnext">
          <p>prev post</p>
          <p>next post</p>
        </div>
        <p>related posts</p>
      </div>
    </div>
  )
}

export default BlogBottom
