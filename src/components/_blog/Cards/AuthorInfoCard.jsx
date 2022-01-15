import Avatar from 'components/ui/Avatar'
import React from 'react'
import { Link } from 'react-router-dom'

const AuthorInfoCard = ({ avatar, name = 'John Doe', id, description }) => {
  const authorThumb = avatar ?? 'https://foton.qodeinteractive.com/wp-content/uploads/2018/06/blog-sidebar-img-1.png'
  return (
    <Link to={'/author/' + id}>
      <div className="card authorCard">
        <Avatar size="large" thumb={authorThumb} />
        <div className="card__body">
          <h4 className="authorCard__name">{name}</h4>
          <p className="authorCard__info">
            {description ?? (
              <>
                The author is shy and hasnt introduced self. <br />
                But Rest assured. They are awesome
              </>
            )}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default AuthorInfoCard
