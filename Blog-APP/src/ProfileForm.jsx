import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import survice from './Config';
import authentication from './Auth';
import Button from './Button';
import Input from './Input';

function ProfileForm({userData}) {
    const {register, handleSubmit}=useForm({defaultValues:{
      userName:userData?.displayName||''
    }})
    const navigate=useNavigate()
    const submit=async(data)=>{
      const file=data.image[0]?await survice.uploadFile(data.image[0]):null
        delete data.image
        if (file) {
          data.imageUrl=file.secure_url
        }
        const dbProfile=await authentication.setProfile({...data})
        if (dbProfile) {
          navigate(`/MyAccount`)
        }
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          lable='Image'
          type='file'
          accept='image/jpg, image/png, image/jpeg, image/gif'
          {...register('image',{required:false})}
        />
        {
          userData.photoURL && <div>
            <img src={userData.photoURL} alt="No Profile Photo" />
          </div>
        }
      </div>
      <div>
        <Input
          lable='User Name'
          placeholder='userName'
          {...register('userName',{required:true})}
        />
          <Button type='submit'>
            Update
          </Button>
      </div>
    </form>
  )
}

export default ProfileForm