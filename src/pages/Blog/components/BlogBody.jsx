import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const BlogBody = ({ body }) => {
  return (
    <div className="blogbody">
      <Aside />

      <div className="blogbody__main">
        <p>{body}</p>
      </div>
    </div>
  )
}

export default BlogBody

const Aside = () => (
  <div className="blogbody__aside">
    <p>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet">
        <FaFacebook />
      </a>
    </p>
    <p>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet">
        <FaTwitter />
      </a>
    </p>
    <p>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet">
        <FaLinkedin />
      </a>
    </p>
  </div>
)
