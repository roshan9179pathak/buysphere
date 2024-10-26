'use client'
import React from "react";
import { UseFormRegister } from 'react-hook-form';
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  type: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  autoComplete?: string;
  customProp?: string;
  id:string
  register: UseFormRegister<any>
};

const InputField = ({
  type = 'text',
  placeholder,
  className,
  required= false,
  autoComplete,
  register,
  id,
  ...rest

}: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className}`}
      autoComplete= {autoComplete}
      // {...register(id, { required: required ? 'This field is required' : false })}
      {...rest}
    />
  );
};

export default InputField;
