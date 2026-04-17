import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import authentication from './Auth'
import { login } from './AuthSlice'
import Input from './Input'
import Button from './Button'

function Signup() {
  const [error,seterror]=useState("")
  const nevigate=useNavigate()
  const dispatch=useDispatch()
  const { register, handleSubmit } = useForm()
  const signup=async(data)=>{
    seterror("")
    try {
      const sesson=await authentication.createAccount(data)
      if (sesson) {
        const userData=await authentication.getUser()
        if (userData) {
          dispatch(login(userData))
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
          Signup to create account
        </h2>
        <p>
          Alrady have an account
          <Link to={`./login`}>
            Login
          </Link>
        </p>
        {
          error && <p>{error}</p>
        }
        <form onSubmit={handleSubmit(signup)}>
          <div>
            <Input
              lable='fullname'
              placeHolder='Enter your fullname'
              {...register("name",{required:true})}
            />
            <Input
              lable='email'
              type='email'
              placeHolder='Enter your email'
              {...register("email",{required:true,validate:{matchpatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)||"Email address must be a valid adderss"}})}
            />
            <Input
              lable='password'
              type='password'
              placeHolder='Enter your password'
              {...register("password",{required:true})}
            />
            <Button type='submit'>
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup