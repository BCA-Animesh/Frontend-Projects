import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import survice from './Config'

export default function PostForm({post}) {
    const {register,setValue,handleSubmit,getValues,control,watch}=useForm({defaultValues:{
      title:post?.title||'',
      content:post?.content||'',
      slug:post?.slug||''
    }})
    const userData=useSelector((state)=>state.Auth.userData)
    const nevigate=useNavigate()
    const subbmit=async(data)=>{
      if (post) {
        const file=data.image[0]?await survice.uploadFile(userData,data.image[0],post.id):null
        delete data.image
        if (file) {
          data.featuredimage=await survice.getFile(userData,post.id)
        }
        const dbPost=await survice.updatePost(userData,{...data},post.id)
        if (dbPost) {
          nevigate(`/post/${post.id}`)
        }
      } else {
        const file=await survice.uploadFile(userData,data.image[0],post.id)
        delete data.image
        if (file) {
          data.featuredimage=await survice.getFile(userData,post.id)
        }
        const dbPost=await survice.createPost(userData,{...data})
        if (dbPost) {
          nevigate(`/post/${post.id}`)
        }
      }
    }
    const slugTransform=useCallback((value)=>{
      if (value && typeof value==="string") 
        return value
        .trim()
        .toLowercase()
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
      return subscribtion.unsubscribe
    },[watch,slugTransform,setValue])
  return (
    <div>PostForm</div>
  )
}
