import React from 'react'

const BlogList = () => {
  return (
    <div>
      <div>----------------This is blog list page---------------------</div>

      <TodoList items={['Bloglist', 'Category']} />
    </div>
  )
}

export default BlogList

export const TodoList = ({ items }) => (
  <ul>
    To do list:
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)
