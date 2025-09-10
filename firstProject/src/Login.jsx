import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import {Link, useNavigate} from 'react-router-dom'
import  authentication  from './Auth'
import {login as storeLogin} from './AuthSlice'
import Logo from './Logo'
import Input from './Input'
import Button from './Button'

function Login() {
   const { register, handleSubmit } = useForm()
   const [error, seterror]=useState("")
   const dispatch=useDispatch()
   const nevigate=useNavigate()
   const login=async(data)=>{
    seterror("")
    try {
      const sesson=await authentication.login(data)
      if(sesson){
        const userData= await authentication.getAccount()
        if(userData){
          dispatch(storeLogin(userData))
          nevigate('/')
        }
      }
    } catch (error) {
      seterror(error.message)
    }
   }
  return (
    <div  className='flex items-center justify-center w-full'>
     <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
      <div className="mb-2 flex justify-center">
        <samp className="inline-block w-full max-w-[100px]">
          <Logo width='100%'/>
        </samp>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
           Don&apos;t have any account?&nbsp;
           <Link to={`./signup`}>
            Signup
           </Link>
      </p>
      {
        error && <p>{error}</p>
      }
      <form onSubmit={handleSubmit(login)}>
        <div className='space-y-5'>
        <Input
          lable='email :'
          type='email'
          placeHolder='Enter your email'
          {...register("email",{
            required:true,
            validate:{
              matchPatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)|| "Email address must be a valid address"
            }
          })}
        />
        <Input
          lable='password'
          type='password'
          placeHolder='Enter your password'
          {...register("password",{required:true})}
        />
        <Button type='submit'  className="w-full">
          Signin
        </Button>
        </div>
      </form>
     </div>
    </div>
  )
}

export default Login