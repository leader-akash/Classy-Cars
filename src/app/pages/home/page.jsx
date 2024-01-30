import Banner from '@/app/components/banner/Banner'
import Card from '@/app/components/cards/Card'
import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'
import carsType from '../../../../RentalCarData.json'


const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Banner />

            <div className='mt-10 mb-16 '>
                <h2 className='flex justify-center text-[45px] font-semibold'><u>Popular Cars</u></h2>
                <div className='flex flex-wrap justify-center'>
                    {
                        carsType?.slice(0, 10)?.map((car, index) => {
                            return (
                                <div key={index}>
                                    <Card data={car} />
                                </div>
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
