import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import survice from './Config'
import Input from './Input'
import RTE from './RTE'
import Button from './Button'

export default function PostForm({post}) {
    const {register,setValue,handleSubmit,getValues,control,watch}=useForm({defaultValues:{
      title:post?.title||'',
      content:post?.content||'',
      slug:post?.slug||''
    }})
    const userData=useSelector((state)=>state.Auth.userData)?.uid
    const navigate=useNavigate()
    const submit=async(data)=>{
      if (post) {
        const file=data.image[0]?await survice.uploadFile(data.image[0]):null
        delete data.image
        if (file) {
          data.featuredimage=file.secure_url
        }
        const dbPost=await survice.updatePost(userData,{...data},post.id)
        if (dbPost) {
          navigate(`/post/${post.uid}/${post.id}`)
        }
      } else {
          const file=await survice.uploadFile(data.image[0])
          delete data.image
          if (file) {
            data.featuredimage=file.secure_url
            const dbPost=await survice.createPost(userData,{...data})
            if (dbPost) {
              navigate(`/post/${userData}/${dbPost}`)
            }
        }
      }
    }
    const slugTransform=useCallback((value)=>{
      if (value && typeof value==="string") 
        return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

        return ""
    },[])
    useEffect(()=>{
      const subscribtion=watch((value,{name})=>{
        if (name==="title") {
          setValue('slug',slugTransform(value.title),{shouldValidate:true})
        }
      })
      return ()=>subscribtion.unsubscribe()
    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          lable='Title'
          placeholder='Title'
          {...register('title',{required:true})}
        />
        <Input
          lable='Slug'
          placeholder='Slug'
          {...register('slug',{required:true})}
          onInput={(e)=>setValue('slug',slugTransform(e.currentTarget.value),{shouldValidate:true})}
        />
        <RTE
          lable='Content'
          name='content'
          control={control}
          defaultValues={getValues('content')}
        />
      </div>
      <div>
        <Input
          lable='Featured Image'
          type='file'
          accept='image/jpg, image/png, image/jpeg, image/gif'
          {...register('image',{required:!post})}
        />
        {
          post && <div>
            <img src={post.featuredimage} alt={post.title} />
          </div>
        }
        <Button type='submit'>
          {post?'Update':'Submit'}
        </Button> 
      </div>
    </form>
  )
}
