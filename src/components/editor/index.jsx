import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const Editor = ({ data, setData }) => {
  // To do: make it custom built editor
  return (
    <div className="Editor" style={{ color: 'black' }}>
      <CKEditor editor={ClassicEditor} data={data} onChange={(event, editor) => setData(editor.getData())} />
    </div>
  )
}

export default Editor
