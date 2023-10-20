import { Card } from 'flowbite-react'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
FaArrowRight
const Service = () => {
  return (
    <div className='mt-24'>
        <Card className="container mx-auto px-4 dark:text-white shadow-none border-0">
            <div className=' m-auto md:w-[60%] text-center'>
                <h4 className='text-sm uppercase'>Services we're offering</h4>
                <h2 className='text-4xl'>High quality products and services that we stand behind</h2>
            </div>
            <div className="grid gap-8 mt-10 md:grid-cols-3">
                <div className='border'>
                    <img className='w-full h-[300px] object-cover' src={"https://i.ibb.co/GRYBz97/OIP-8.jpg"} alt="" />
                    <div className='flex  p-6 flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'>Data Visualization</h4>
                        <p>Sed non odio non elit porttitor Donec fermentum, elit sit ame</p>
                        <a href="" className='flex items-center gap-2'>Read more <FaArrowRight></FaArrowRight> </a>
                    </div>
                </div>
                <div className='border'>
                    <img className='w-full h-[300px] object-cover' src={"https://i.ibb.co/GRYBz97/OIP-8.jpg"} alt="" />
                    <div className='flex  p-6 flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'>Data Visualization</h4>
                        <p>Sed non odio non elit porttitor Donec fermentum, elit sit ame</p>
                        <a href="" className='flex items-center gap-2'>Read more <FaArrowRight></FaArrowRight> </a>
                    </div>
                </div>
                <div className='border'>
                    <img className='w-full h-[300px] object-cover' src={"https://i.ibb.co/GRYBz97/OIP-8.jpg"} alt="" />
                    <div className='flex  p-6 flex-col gap-4'>
                        <h4 className='text-2xl font-semibold'>Data Visualization</h4>
                        <p>Sed non odio non elit porttitor Donec fermentum, elit sit ame</p>
                        <a href="" className='flex items-center gap-2'>Read more <FaArrowRight></FaArrowRight> </a>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Service