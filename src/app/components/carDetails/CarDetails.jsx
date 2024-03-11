import Image from 'next/image'
import React from 'react'
import Button from '@mui/material/Button';
import CarImageSlider from '../carImagesSlider/CarImageSlider'
import Link from 'next/link';
import axios from 'axios';
import { useParams } from 'next/navigation';

const CarDetails = async ({carId}) => {


    const carData = await axios(`http://localhost:5004/api/car/${carId}`)

    console.log('carData', carData?.data)
    const data = carData?.data?.getCar

    return (
        <div>
            <h2 className='text-[35px]'>Car Details</h2>
            <div className='flex detail-container mx-10'>
                <div className='m-5 '>
                    <CarImageSlider image={data?.image}/>
                </div>

                <div className='mx-5 my-5'>
                    <h2 className='text-[30px] font-semibold'>{data?.name}</h2>

                    <p className='my-5 text-[20px]'>Classy cars has become the most famous brand inspired by the most unforgiving proving ground the race track</p>

                    <div className='flex justify-between items-center'>
                        <p className='my-5 text-[20px] font-semibold'>₹{data?.rentPerKm}/day</p>
                        <Link href={`/pages/booking/${data?._id}`}>
                            <Button variant="contained" className='bg-blue font-bold mt-6 text-[14px] '>Book now</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails
