import React, { useState } from 'react'
import Editor from 'components/editor'
import Button from 'components/ui/Buttons'
import Input from 'components/ui/input'

const BlogCreate = () => {
  // check if no categories- if no categories, then fetch categories
  const [formdata, setformdata] = useState({ title: '' })
  const [data, setData] = useState('<p>Start writing your actual blog content <b>here!</b></p>')
  const _setValue = (e) => setformdata({ ...formdata, [e.target.name]: e.target.value })

  return (
    <div>
      <h1>Write new post</h1>

      <form>
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

        <fieldset>
          <legend>
            <label htmlFor="category">Category</label>
          </legend>
          <select id="category">
            <option value="react">React</option>
            <option value="redux">Redux</option>
          </select>
        </fieldset>

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

        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}

export default BlogCreate
