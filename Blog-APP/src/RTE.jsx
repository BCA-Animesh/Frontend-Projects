import React from 'react'
import {Controller} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'

export default function RTE({name, lable, control, defultValue=""}) {
  return (
    <div>
        {
            lable && <label>{lable}</label>
        }
        <Controller
            name={name || 'content'}
            control={control}
            render={({field:{onChange}})=>(
                <Editor
                     apiKey='jcmq1rv1df9hiflrnrgrb9kqyuef5n3mpoxn2og5jlj3m6ks'
                      initialValue={defultValue}
                    init={{
                        initialValue:defultValue,
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}
