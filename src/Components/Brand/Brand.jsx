import { Card } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Brand = ({brandAll}) => {
   const {id,image,brand} = brandAll
   
  return (
   <Link to={`/brandItem/${brand}`}>
   
   <Card className='relative  border-0 shadow-none'>
        <img className='w-full h-full object-cover' src={image} alt="" />
        <span className='absolute dark:text-white top-0 text-white right-0 left-0 bottom-0 flex justify-center font-bold items-center'>{brand}</span>
    </Card>
   
   </Link>
  )
}

export default Brand