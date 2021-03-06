import React from 'react'

const Features = () => {
  return (
    <div>
      <h1>Tech blog</h1>

      <h2>Intro</h2>
      <p>
        Hi. This is a side project I and a friend is collaborating on. It contains all stuff I have learned on front end
        and stuff I am currently learning. So somewhat like testing ground for me.
      </p>

      <h2>Tech stack</h2>
      <p>ReactJS on front</p>
      <p>Django on back with PostGres as database</p>

      <h4>
        Code by- <a href="https://github.com/ace4port/">ace4port</a> and{' '}
        <a href="https://github.com/sirjandrn25">Sirjan Tamang</a>
      </h4>

      <h3>Features</h3>
      <details>
        <summary>Auth</summary>
        <p>Log in, Sign up(Register), and log out.</p>
      </details>

      <details>
        <summary>Blog crud</summary>
        <p>CRUD operations for blogs via dashboard</p>
        <p>Write blogs with awesome WYSIWYG CKEditor5</p>
      </details>

      <details>
        <summary>Comment, reply</summary>
        <p>Comment and reply to any queries you may have</p>
      </details>

      <details>
        <summary>Account</summary>
        <p>Edit account settings, update profile picture and change password</p>
      </details>

      <details>
        <summary>Style Guide</summary>
        <p>See styles used throughout</p>
      </details>

      <p>
        Font, color, layout inspiration from <a href="https://foton.qodeinteractive.com/right-sidebar/">Foton theme</a>{' '}
        and <a href="https://networkertheme.com/gearbox/">Gearbox</a>
      </p>
    </div>
  )
}

export default Features
