import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, lable, defaultValue=''}) {
  return (
    <div className='w-full'>
        {
            lable && <label className='inline-block mb-1 pl-1'>{lable}</label>
        }
        <Controller
            name={name || 'content'}
            control={control}
            render={({field:{onChange}})=>(
                <Editor
                apiKey='jcmq1rv1df9hiflrnrgrb9kqyuef5n3mpoxn2og5jlj3m6ks'
                     initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
         onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}