'use client'
import React from 'react'
import Button from './Buttons';
import InputField from './InputField'
import { useForm } from 'react-hook-form';
import Link from 'next/link'

interface FormData{
  email: string;
  passwod: string;
  name: string
}

const SignUp = () => {

  const { register , getValues , formState:{errors}} = useForm<FormData>();

  const handleSignUp = ()=>{
    const newUser = getValues();
      if(localStorage.getItem('users')){
        const currentUsers = JSON.parse(localStorage.getItem('users') || '[]');
        console.log(currentUsers);
        const updateUsers = [...currentUsers , newUser]
        console.log(updateUsers);
        localStorage.setItem('users', JSON.stringify(updateUsers))
      }else {
        localStorage.setItem('users', JSON.stringify([newUser]))
      }

      alert(`Signed in successfully`)
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-base-100">
    <div className="card w-96 bg-base-100 shadow-xl mx-4">
    <div className="card-body">
      <h2 className="card-title">Sign Up</h2>
      <form>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
  
          <InputField type='text' placeholder='Enter your Name' className='input input-bordered w-full' required = {true} register={register} autoComplete='name' id="name" />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         
          {/* <InputField type='email' placeholder='Enter your Email' className='input input-bordered w-full' required = {true} {...register('email')} autoComplete='email' id="emal" /> */}
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          {/* <InputField type='password' placeholder='Enter your password' className='input input-bordered w-full' required = {true} {...register('passwod')} autoComplete='password' id='password' /> */}
        </div>
        <Button
          type = 'button'
          className='btn btn-primary w-full'
          onClick={()=> handleSignUp()}
        >
          SignUp
        </Button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-sm">Already have an account? </span>
        <Link href="/authentication/login" className="text-primary font-semibold">Log In</Link>
      </div>
    </div>
  </div>
  </div>
  )
}

export default SignUp
