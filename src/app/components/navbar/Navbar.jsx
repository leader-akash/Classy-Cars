'use client'
import React from 'react'
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div className='flex justify-between mt-8 mx-10'>
        <h1 className='text-[30px] font-bold'>
            Classy Cars
        </h1>
        <Button variant="outlined" className='rounded-full font-bold text-blue-500'>Sign in</Button>
    </div>
  )
}

export default Navbar
