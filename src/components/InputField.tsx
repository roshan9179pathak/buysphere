'use client'
// import React from "react";
// 

// interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>  {
//   type: string;
//   placeholder?: string;
//   className?: string;
//   required?: boolean;
//   autoComplete?: string;
//   customProp?: string;
//   id:string
//   register: UseFormRegister<any>
// };

// const InputField = ({
//   type = 'text',
//   placeholder,
//   className,
//   required= false,
//   autoComplete,
//   id,
//   ...rest

// }: InputFieldProps) => {
//   return (
//     <input
//     required={required}
//       type={type}
//       placeholder={placeholder}
//       className={`${className}`}
//       autoComplete= {autoComplete}
//       {...register(id, { required: required ? 'This field is required' : false })}
//       {...rest}
//     />
//   );
// };

// export default InputField;

import React from 'react';
import { UseFormRegister } from 'react-hook-form';
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<any>;
  required: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  id?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  required = true,
  type = "text",
  placeholder = "",
  className = "",
  autoComplete = "off",
  id = "",
  ...rest
}) => {
  return (
    <input
      required={required}
      type={type}
      placeholder={placeholder}
      className={className}
      autoComplete={autoComplete}
      {...(register && id ? register(id, { required: required ? 'This field is required' : false }) : {})}
      {...rest}
    />
  );
};

export default InputField;

