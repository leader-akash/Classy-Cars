import React from 'react'
import Car from '../../Assets/hero.webp'
import bg from '../../Assets/caa.jpg'
import Image from 'next/image'
import Button from '@mui/material/Button';
import styles from './Banner.module.css'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className={`flex flex-col xl:flex-row justify-between ${styles.banner} mx-10 mt-5`}>
            <div className={`xl:w-[40vw] ${styles.content}`}>
                <div className='text-[5vw] xl:text-[65px] font-bold'>
                    Find, book, rent a car—quick and super easy!
                </div>
                <p className='text-[2vw] xl:text-[25px] mt-5'>Streamline your car rental experience with our effortless booking process.</p>
                <Link href={'/pages/cars'}>
                <div className='explore-btn'>
                    <Button variant="contained" className='bg-blue'>Explore Cars</Button>
                </div>
                </Link>

            </div>

            <div className={`xl:w-[50vw] mt-10 xl:mt-0 ${styles.imageContainer}`}>
                <Image
                    src={Car} alt='bg'
                    className='z-10 relative ml-10'
                    width={800}  // Set a fixed width for the image
                    height={550} // Set a fixed height for the image
                /> 
                {/* <Image src={bg} alt='bg' className='z-0 absolute top-0 right-0 w-[850px] h-[550px] car-bg' /> */}

            </div>
        </div>
    )
}

export default Banner
