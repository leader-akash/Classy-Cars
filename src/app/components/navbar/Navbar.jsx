'use client'
import React from 'react'
import Button from '@mui/material/Button';
import styles from './Navbar.module.css'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Navbar = () => {
  return (
    <div className={`flex justify-between pt-8 pb-5 px-10 ${styles.navbar}`}>
      <div className='flex  items-center'>
        <h1 className='text-[30px] font-bold'>
          Classy Cars
        </h1>
        <TextField id="outlined-basic" placeholder='Search in classy cars' type='search' variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className={`w-[30vw] ml-32 `}
        />

      </div>
      <Button variant="outlined" className='rounded-full font-bold text-blue-500 px-6 text-[16px] '>Sign in</Button>
    </div>
  )
}

export default Navbar
