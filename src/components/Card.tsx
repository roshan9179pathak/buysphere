"use client";
import React from "react";
import Button from "./Buttons";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardProps = {
  id: string;
  src: any;
  name: string,
  description: string,
};

const Card = ({ id, src, name, description }: CardProps) => {

  const router = useRouter();
  const clearGstate = ()=>{
    
  }

  const handleClick = () => {
    router.push(`/categories/${id}`);
  };

  

  return (
    <div className="card bg-base-100 w-full sm:w-80 md:w-96 lg:w-[350px] shadow-xl transition-transform duration-700 ease-in-out transform hover:scale-105 md:hover:scale-110 lg:hover:scale-125">
      <figure className="px-5 pt-5 md:px-10 md:pt-10">

        <Image
          src={src} 
          alt={String(id)}
          width={300} 
          height={200} 
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
        <p className="text-sm md:text-base lg:text-lg">
          {description}
        </p>
        <div className="card-actions">
          <Button onClick={()=>{clearGstate(); handleClick()}} className="btn btn-primary">
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
