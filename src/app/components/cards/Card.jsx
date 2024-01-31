'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import bmw from '../../Assets/bmw.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './Card.module.css'

const Card = ({ data }) => {
  const [wishlistStates, setWishlistStates] = useState(false);

  return (
    <div className='flex flex-wrap  justify-between mr-5 mb-10 cursor-pointer'>
      
            <div className={`w-[260px] h-[300px] bg-indigo-100 rounded-xl mt-10 custom-shadow card-border`}>
              <div className='flex justify-between items-center mx-4 my-2'>
                <h1 className='text-[24px] font-semibold mt-2 '>{data?.car_make}</h1>
                {
                  !wishlistStates ?
                    <FavoriteBorderIcon className='cursor-pointer text-[26px]' onClick={() => setWishlistStates(!wishlistStates)} />
                    :
                    <FavoriteIcon className='cursor-pointer text-[26px] text-red' onClick={() => setWishlistStates(!wishlistStates)} />
                }
              </div>
              <p className='ml-5 font-semibold'>₹ {data?.rental_price}/hour</p>
              <Image src={bmw} width={250} height={140} alt='car' />
              <div className='text-center'>
                <Button variant="contained" className='rounded-full bg-blue font-bold mt-6 text-[14px] '>View more</Button>
              </div>
            </div>
         
    </div>
  );
}

export default Card;