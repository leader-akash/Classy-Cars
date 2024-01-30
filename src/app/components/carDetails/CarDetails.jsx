'use client'
import Image from 'next/image'
import React from 'react'
import Button from '@mui/material/Button';
import carBg from '../../Assets/caa.jpg'

const CarDetails = () => {
    return (
        <div>
            <h2 className='text-[35px]'>Car Details</h2>
            <div className='flex border mx-10'>
                <div className='ml-5 my-5 border rounded-xl'>
                    <div className='w-[500px] h-[380px]'>
                        <Image src={carBg} alt='car-image' className='w-[500px] h-[380px] rounded-xl'/>
                    </div>
                </div>

                <div className='mx-5 my-5'>
                    <h2 className='text-[30px] font-semibold'>Car name</h2>

                    <p className='my-5 text-[20px]'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>

                    <div className='flex justify-between items-center'>
                        <p className='my-5 text-[20px] font-semibold'>₹ 50/hour</p>

                        <Button variant="contained" className='rounded-full bg-blue font-bold mt-6 text-[14px] '>Book now</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarDetails
