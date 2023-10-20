import React, { useEffect, useState } from 'react'
import { Button } from 'flowbite-react';
import toast from 'react-hot-toast';

const MyCart = () => {

  const [carts,setCarts] = useState([]);
  const [remainingCart,setRemainingCart] = useState([])

  useEffect(()=>{
    
    fetch("https://technology-server-ten.vercel.app/carts")
    .then(res => res.json())
    .then(data => setCarts(data))
  
  },[])

  // delete cart 
  const handleDelete = (id) => {
    fetch(`https://technology-server-ten.vercel.app/carts/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            toast("deleted Successfully");
            const remaining = carts.filter(cart => cart._id !== id);
            setRemainingCart(remaining)
           
        }
    })
}

  return (
    <div className='container mx-auto px-4'>
      <h2 className='text-4xl font-semibold text-center mb-10'>Cart Products</h2>
        {
          carts?.map(cart =>
            
            <div  key={cart._id} >
            <div className='flex  gap-6 justify-between items-center m-auto md:w-[50%]'>
            <img src={cart.image} className='mt-4 w-[100px] h-auto object-cover' alt="" />
            <p className='mt-4 '>{cart.productName}</p>
              <Button className='mt-4' onClick={()=>handleDelete(cart._id)}>Delete</Button>
             
            </div>
            
            </div>
             )
          }
        
    </div>
  )
}

export default MyCart