import React from 'react'
import banner from "../../assets/techBanner.jpg"
import { Button } from 'flowbite-react'
const Banner = () => {
  return (
    <div className='relative'>
        <img className='w-full h-[100vh] object-cover' src={banner} alt="banner image" />
        <div className='absolute top-0 gap-5 right-0 left-0 bottom-0 flex flex-col items-center justify-center'>
            <h1 className='text-white font-extrabold text-6xl md:text-8xl'>Innovation</h1>
            <h2 className='text-3xl text-white '>Technology Partner </h2>
          <Button className='px-10 py-2'>Discover more</Button>
        </div>
    </div>
  )
}

export default Banner