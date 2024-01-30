'use client'
import React from 'react'
import Card from '../../components/cards/Card'
import carsType from '../../../../RentalCarData.json'


const Cars = () => {
    return (
        <div>
            <div className='flex flex-wrap justify-center'>
                    {
                        carsType?.map((car, index) => {
                            return (
                                <div key={index}>
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
