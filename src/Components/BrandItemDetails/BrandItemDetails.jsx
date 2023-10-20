import { Button } from 'flowbite-react'
import React from 'react'
import {FaStar} from "react-icons/fa"
import { Link } from 'react-router-dom'

const BrandItemDetails = ({match}) => {
 
    const {_id,productName,brandName,image,price,rating,description} = match
  return (
      <>

  
<div className='md:flex gap-10'>
        <div className='md:w-[50%]'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className="flex gap-3 mt-6 items-center md:items-start md:mt-0 flex-col">
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
         <div className='flex gap-3'>
         <Link to={`/productDetail/${_id}`}> <Button>Details</Button> </Link>
          <Link to={`/updateProudct/${_id}`}><Button >Update</Button></Link>

         </div>
        </div>
    </div>

      </>
  )
}

export default BrandItemDetails