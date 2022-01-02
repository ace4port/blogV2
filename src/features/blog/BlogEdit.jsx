import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editBlog } from './blogSlice'
import { PostForm } from './BlogCreate'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useFetch from 'hooks/useFetch'
import { fetchOne } from './blogAPI'
import Button from 'components/ui/Buttons'

const BlogEdit = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [formdata, setformdata] = useState({ title: '', description: '', category: 1, body: '' })
  const [data, setData] = useState('Wait')
  const _setValue = (e) => setformdata({ ...formdata, [e.target.name]: e.target.value })

  const [blog, loading, error] = useFetch(fetchOne, id)
  useEffect(() => {
    const { title, description, category, body } = blog
    setformdata({ title, description, category: parseInt(category?.id) })
    // setData(blog.body)
  }, [blog, id])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editBlog({ id: id, ...formdata, body: data }))
  }

  return (
    <div>
      <h1>Write new post</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error?.status + error?.message || JSON.stringify(error)}...</p>}

      <form onSubmit={handleSubmit}>
        <PostForm formdata={formdata} _setValue={_setValue} data={data} setData={setData} handleSubmit={handleSubmit} />
        <Button type="submit">Edit</Button>
      </form>
    </div>
  )
}

export default BlogEdit
