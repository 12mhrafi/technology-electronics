import React from 'react'
import Brands from '../../Components/Brands/Brands'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Service from '../../Components/Service/Service'


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands/>
      <About></About>
      <Service></Service>
      
 
    </div>
  )
}

export default Home