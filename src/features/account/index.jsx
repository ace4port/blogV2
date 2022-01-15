import { TodoList } from 'pages/Blog/BlogList'
import React from 'react'

const Account = () => {
  return (
    <div>
      <TodoList items={['Image upload', 'Edit settings', 'api connection']} />
      <h1>Account settings here</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugiat veritatis pariatur quos accusamus
        earum dolores quam velit dolore modi repellendus consequatur odit eveniet ipsam aliquam, saepe ipsum
        reprehenderit natus.
      </p>
    </div>
  )
}

export default Account
