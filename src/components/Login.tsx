"use client";
import React from "react";
import Link from "next/link";
import InputField from "./InputField";
import Button from "./Buttons";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const Auth = () => {
  const { register, getValues } = useForm<FormData>();
  const router = useRouter();

  const handleLogin = () => {
    const newUser = getValues();
    if (typeof window !== 'undefined') {
      if(localStorage.getItem('users')){
        const currentUsers = JSON.parse(localStorage.getItem('users') || '[]');
        currentUsers.map((user:FormData)=>{
          if(user.email === newUser.email && user.password === newUser.password){
            alert(`Sign In successful`)
            router.push('/')
          }else{
            alert(`Invalid Credentials`)
          }
        })


        const updateUsers = [...currentUsers , newUser]
        console.log(updateUsers);
        localStorage.setItem('users', JSON.stringify(updateUsers))
      }else {
        localStorage.setItem('users', JSON.stringify([newUser]))
      }
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-base-100">
      <div className="card w-96 bg-base-100 shadow-xl mx-4">
        <div className="card-body">
          <h2 className="card-title font-bold">Login</h2>
          <form>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <InputField
                type="email"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required={true}
                autoComplete="email"
                id="email"
                register={register}
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <InputField
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required={true}
                autoComplete="password"
                id="password"
                {...register("password")}
              />
            </div>
            <div className="form-control mb-4">
              <label className="cursor-pointer label">
                <span className="label-text font-semibold">Remember me</span>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </div>

            <Button
              type="button"
              className="btn btn-primary w-full"
              onClick={() => handleLogin()}
            >
              Login
            </Button>

            <Link href="#" className="text-sm mt-2 inline-block text-secondary">
              Forgot password?
            </Link>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm">Don't have an account? </span>
            <Link
              href="/authentication/signup"
              className="text-primary font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      {/* <AlertComp /> */}
    </div>
  );
};

export default Auth;
