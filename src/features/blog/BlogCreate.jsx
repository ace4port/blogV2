import React, { useState } from 'react'
import Editor from 'components/editor'
import Button from 'components/ui/Buttons'
import Input from 'components/ui/input'
import { categoryList, fetchCategory } from 'features/category/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createBlog } from './blogSlice'

const BlogCreate = () => {
  const dispatch = useDispatch()
  const [formdata, setformdata] = useState({ title: '', description: '', category: 1, body: '' })
  const [data, setData] = useState('<p>Start writing your actual blog content <b>here!</b></p>')
  const _setValue = (e) => setformdata({ ...formdata, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ ...formdata, body: data })
    dispatch(createBlog({ ...formdata, body: data }))
  }

  return (
    <div>
      <h1>Write new post</h1>

      <form onSubmit={handleSubmit}>
        <PostForm formdata={formdata} _setValue={_setValue} data={data} setData={setData} handleSubmit={handleSubmit} />
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}

export default BlogCreate

export const PostForm = ({ formdata, _setValue, data, setData }) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label>Title</label>
        <Input
          type="text"
          name="title"
          // error={errors.title}
          value={formdata.title}
          setValue={_setValue}
          required={true}
          label="Title *"
        />
      </div>

      <label htmlFor="thumbnail">Thumbnail</label>
      <input type="file" id="thumbnail" />

      <CategorySelector value={formdata.categories} handleSelect={_setValue} />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label>Description</label>
        <Input
          type="text"
          name="description"
          // error={errors.title}
          value={formdata.description}
          setValue={_setValue}
          required={true}
          label="Description: Write a few lines describing your post *"
        />
      </div>

      <Editor data={data} setData={setData} />
    </>
  )
}

export const CategorySelector = ({ value, handleSelect }) => {
  const dispatch = useDispatch()
  const categories = useSelector(categoryList)
  useEffect(() => categories.length === 0 && dispatch(fetchCategory()), [dispatch, categories.length])
  // check if no categories- if no categories, then fetch categories

  return (
    <fieldset>
      <legend>
        <label htmlFor="category">Category</label>
      </legend>
      <select name="category" id="category" value={value} onChange={handleSelect}>
        {categories.length && <option disabled>Select a category</option>}
        {!categories.length && <option disabled>Loading...</option>}
        {categories.length &&
          categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.c_name}
            </option>
          ))}
      </select>
    </fieldset>
  )
}
