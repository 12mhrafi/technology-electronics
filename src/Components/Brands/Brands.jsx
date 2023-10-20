import React, { useEffect, useState } from 'react'
import Brand from '../Brand/Brand'
import { Card } from 'flowbite-react'


const Brands = () => {
    const [brands,setBrands] = useState([])
  
    useEffect(()=>{
        fetch("/brands.json")
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
   

  return (
    <Card className='container mx-auto mt-24 shadow-none border-0'>
        
        <h2 className='text-5xl mb-8 dark:text-white'>Explore Popular Brands </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        
 

        {
            brands.map(brand => <Brand key={brand.id} brandAll = {brand}></Brand> )
        }
    </div>
    
    </Card>
  
  )
}

export default Brands