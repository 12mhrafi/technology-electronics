import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button } from 'flowbite-react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';

const ProductDetail = () => {
    const [singleData,setSingleData] = useState({})
    const {_id,productName,brandName,image,price,rating,description} = singleData
    const {id} = useParams();
   
    const totalInfo = useLoaderData();
   
    useEffect(()=>{
       const matchdata = totalInfo.find(data => data._id === id)
        setSingleData(matchdata)
    },[])

    const handleCart = (singleData) => {
        const {_id,productName,brandName,image,price,rating,description} = singleData
    
        const addCartInfo = {productName,brandName,image,price,rating,description}

        fetch("https://technology-server-ten.vercel.app/carts",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(addCartInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast("cart added successfully")
            }
        });
    }

  return (
    <div className='container mx-auto p-4'>
        <div className='md:flex gap-5 '>
        <div className='md:w-[50%]'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className="flex gap-3 mt-6 md:mt-0 flex-col items-center md:items-start">
             <h2 className='text-2xl'>{productName}</h2>
             <p>Brand: <span className='font-semibold'>{brandName}</span></p>
            <div className='flex items-center'>
            <div className='flex gap-1 text-orange-400'>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            </div>
            <span className='ml-2 text-gray-500'>({rating})</span>
            </div>
            <p className='text-3xl font-semibold'>BDT:{price}</p>
            <p>{description && description.slice(0,50)}</p>
          <Button onClick={()=>handleCart(singleData)}>Add to cart</Button>
        </div>
    </div>
      <div>
      <h2 className='text-2xl mt-10'>Description</h2>
        <h4 className='mt-5 font-semibold'>Product Information</h4>
        <p className='mt-3'>{description}</p>
      </div>
    </div>
  )
}

export default ProductDetail