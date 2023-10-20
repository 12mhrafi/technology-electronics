import React from 'react'
import { Button, Card, DarkThemeToggle, Flowbite } from 'flowbite-react';

const About = () => {
  
    return (

        <div className='mt-24'> 
            <Card className='container shadow-none border-0 mx-auto px-4 dark:text-white'>
        
                <div className='grid gap-5 md:grid-cols-2 '>
                    <div>
                        <img className='w-full h-auto object-cover' src={"https://i.ibb.co/GRYBz97/OIP-8.jpg"} alt="" />
                    </div>
                    <div>
                        <h6 className='text-sm'>ABOUT US</h6>
                        <h2 className='text-4xl'>We Execute Our ideas From The Start to Finish</h2>
                        <p className='my-5'>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors</p>
                        <div className='md:flex gap-2'>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <h2 className='font-semibold'>Manage Tech Services</h2>
                                    <p>We’ve designed a culture that allows our stewards to assimilate</p>
                                </div>
                                <div>
                                    <h2 className='font-semibold'>Internet Networking</h2>
                                    <p>We’ve designed a culture that allows our stewards to assimilate</p>
                                </div>
                            </div>
                            <div className=' bg-gray-200 mt-5 dark:bg-black dark:text-white md:mt-0 p-4'>
                                <p className='text-lg  font-semibold'>High Quality IT Solutions for Startup</p>
                            </div>
                        </div>
                        <div>
                            <Button className='px-7 py-2 mt-5 '>Discover More</Button>
                        </div>
                    </div>
                </div>
           
            </Card>
        </div>
    
    
        
    )
}

export default About