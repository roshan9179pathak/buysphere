"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string,
  className?: string,
  onClick?: ()=> void,
};

const Button = ({ children ='Click Me' , className, onClick, type = 'button', ...rest }: ButtonProps) => {
  return <button 
  type={type}
  onClick={onClick} 
  className={`btn ${className}`}
  {...rest}
  >{children}</button>;
};

export default Button;
