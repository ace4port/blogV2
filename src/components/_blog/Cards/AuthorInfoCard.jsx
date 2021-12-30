import React from 'react'

const AuthorInfoCard = ({
  avatar,
  name = 'John Doe',
  description = 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit diami nonum nibhie vixtus euimos vitae.',
}) => {
  const authorThumb = avatar ?? 'https://foton.qodeinteractive.com/wp-content/uploads/2018/06/blog-sidebar-img-1.png'
  // To do: Add link to author page using id
  return (
    <div className="card authorCard">
      <Avatar thumb={authorThumb} />
      <a href="#author">
        <h4 className="authorCard__name">{name}</h4>
      </a>
      <p className="authorCard__info">{description}</p>
    </div>
  )
}

export default AuthorInfoCard

const Avatar = ({ thumb }) => <img src={thumb} alt="author" />
