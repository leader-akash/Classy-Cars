'use client'
import React from 'react'
import Button from '@mui/material/Button';
import styles from './Navbar.module.css'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={`flex justify-between items-center pt-5 pb-5 px-10 ${styles.navbar}`}>
      <div className='flex  items-center'>
        <Link href='/'>
          <h1 className='text-[30px] font-bold'>
            Classy Cars
          </h1>
        </Link>

        <div className={`searchbar `}>
          <TextField id="outlined-basic" placeholder='Search in classy cars' type='search' variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className={`w-[30vw]`}
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p className='mr-8  '>
          <Tooltip title='Favourites'>
            <Link href={'/pages/favourites'}>
              <IconButton>
                <FavoriteIcon className='text-[28px] cursor-pointer ' />
              </IconButton>
            </Link>
          </Tooltip>
        </p>
        <Button variant="outlined" className='font-bold text-blue-500  text-[16px] '>Sign in</Button>
      </div>
    </div>
  )
}

export default Navbar
