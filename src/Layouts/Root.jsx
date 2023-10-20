import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import { Toaster } from 'react-hot-toast';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
const Root = () => {
  
  return (
   <>


    <Header></Header>

   
    <Outlet>
      <Flowbite>
        <DarkThemeToggle>
          
        </DarkThemeToggle>
      </Flowbite>
    </Outlet>
   


    <Footer></Footer>
    <Toaster></Toaster>
    


   </>
  )
}

export default Root