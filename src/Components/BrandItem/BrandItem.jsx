import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import BrandItemDetails from '../BrandItemDetails/BrandItemDetails';


const BrandItem = () => {
    const [matching, setmatching] = useState([]);
    console.log(matching)
    const [notFound,setNotFound] = useState();
    console.log(notFound)
   
    const { id } = useParams();
    const allBrands = useLoaderData();
    
    useEffect(() => {
        const filteredData = allBrands.filter(brand => brand.brandName.toLowerCase() === id.toLocaleLowerCase());
        console.log(typeof filteredData)
        console.log(typeof [])
        if(filteredData == null){
            setNotFound("data not found");
            return;
        }
            setmatching(filteredData);
        
       
      
        
    }, [])

  
 


    return (
        <div className='container mx-auto px-4'>
  
    
            <h2 className='text-4xl font-semibold mb-10 text-center'>Brand Products </h2>
            {
                

                <div className='grid gap-10'>

                {
                   notFound ? <p>{notFound}</p> :
                    matching.map(match => <BrandItemDetails key={match._id} match={match}></BrandItemDetails>) 
                }
            </div>
            }
          

        </div>
    )
}

export default BrandItem