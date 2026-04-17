import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import {Link, useNavigate } from 'react-router-dom'
import { login as storeLogin } from './AuthSlice'
import authentication from './Auth'
import Input from './Input'
import Button from './Button'

function Login() {
  const [error, seterror] =useState("")
  const nevigate=useNavigate()
  const dispatch=useDispatch()
  const {register, handleSubmit}=useForm()
  const login=async(data)=>{
    seterror("")
    try {
      const sesson =await authentication.signIn(data)
      if(sesson){
        const userData =await authentication.getUser()
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
    <div>
      <div>
        <h2>
          Sign in to your account
        </h2>
        <p>
           Don&apos;t have any account?&nbsp;
           <Link to={`./Signup`}>
           Signup
           </Link>
        </p>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <div>
            <Input
              lable='email :'
              type='email'
              placeHolder='Enter your email'
              {...register("email", {required:true, validate:{matchPatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)||"Email address must be a valid address"}})}
            />
            <Input
              lable='password'
              type='password'
              placeHolder='Enter your password'
              {...register("password",{required:true})}
            />
            <Button type='submit'>
              Signin
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login