import React from 'react'
import Card from '../../components/cards/Card'
import carsType from '../../../../RentalCarData.json'
// import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'


const Cars = async () => {
    // const router = useRouter();

    const result = await axios.get(`http://localhost:5004/api/car`)

    return (
        <div>
            {/*<div className='flex flex-wrap justify-center'>
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
            */}

            <div className='flex flex-wrap justify-center'>
                {
                    result?.data?.map((car, index) => {
                        return (
                            <Link href={`/pages/car-details/${car?._id}`} key={index}>
                                    <Card data={car} />
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Cars
