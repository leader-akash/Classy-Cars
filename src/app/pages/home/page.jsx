import React from 'react'
import carsType from '../../../../RentalCarData.json'
import Link from 'next/link'
import Banner from '../../components/banner/Banner'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Card from '../../components/cards/Card'
import axios from 'axios'

const Homepage = async () => {

    const data = await axios.get(`http://localhost:5004/api/car`)

    return (
        <div>
            <Navbar />
            <Banner />

            <div className='mt-10 mb-16 '>
                <h2 className='text-center text-[45px] font-semibold mb-6'><u>Popular Cars</u></h2>
                <div className='flex flex-wrap justify-center'>
                    {
                        data?.data?.slice(0, 10)?.map((car, index) => {
                            return (
                                <Link href={`/pages/car-details/${car?._id}`} key={index}  >
                                    <Card data={car} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
