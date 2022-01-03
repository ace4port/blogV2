import React from 'react'

const Home = () => {
  return (
    <div>
      <BlogCard
        title="What Would It Take to Shut Down the Entire Internet?"
        image="https://networkertheme.com/gearbox/wp-content/uploads/sites/21/demo-image-00026-800x533.jpg"
        content={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore repellendus eum fuga placeat corporis debitis recusandae adipisci doloribus obcaecati deleniti a, totam pariatur consequuntur repellat incidunt itaque doloremque libero veritatis.'
        }
      />
    </div>
  )
}

export default Home

const BlogCard = ({ title, content, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder " />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <h4 className="title is-4">{title}</h4>
            <p className="subtitle is-6">{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
