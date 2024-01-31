'use client'
import React from 'react'
import Card from '../../components/cards/Card'
import carsType from '../../../../RentalCarData.json'
import { useRouter } from 'next/navigation'


const Cars = () => {
    const router = useRouter();

    const handleCarDetails = () => {
        router.push('/pages/car-details')
    }

    return (
        <div>
            <div className='flex flex-wrap justify-center'>
                {
                    carsType?.map((car, index) => {
                        return (
                            <div key={index} onClick={handleCarDetails}>
                                <Card data={car} />
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Cars
