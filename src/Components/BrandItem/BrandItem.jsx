import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import BrandItemDetails from '../BrandItemDetails/BrandItemDetails';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const BrandItem = () => {
    const [matching, setmatching] = useState([]);
    console.log(matching)
    const [notFound, setNotFound] = useState();
    console.log(notFound)

    const { id } = useParams();
    const allBrands = useLoaderData();

    useEffect(() => {
        const filteredData = allBrands.filter(brand => brand.brandName.toLowerCase() === id.toLocaleLowerCase());
        console.log(typeof filteredData)
        console.log(typeof [])
        if (filteredData == null) {
            setNotFound("data not found");
            return;
        }
        setmatching(filteredData);
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-semibold mb-10 text-center'>Brand Products </h2>
            <Swiper className='mb-10'>
                <SwiperSlide><img className='w-full h-[90vh] object-cover' src={"https://i.ibb.co/qxqtXBw/OIP-10.jpg"} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[90vh] object-cover' src={"https://i.ibb.co/dLtpn5v/OIP-11.jpg"} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[90vh] object-cover' src={"https://i.ibb.co/yQSB78f/OIP-12.jpg"} alt="" /></SwiperSlide>

            </Swiper>
            <div className='container mx-auto px-4'>
                {
                    <div className='grid gap-10'>

                        {
                            notFound ? <p>{notFound}</p> :
                                matching.map(match => <BrandItemDetails key={match._id} match={match}></BrandItemDetails>)
                        }
                    </div>
                }


            </div>
        </div>
    )
}

export default BrandItem