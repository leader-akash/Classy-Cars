'use client'
import React from 'react'
import Button from '@mui/material/Button';
import styles from './Navbar.module.css'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import SellIcon from '@mui/icons-material/Sell';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import carIcon from '../../Assets/sedan-car-model.png'
import Image from 'next/image';

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
        <p className='mr-8  -mt-2 flex flex-col items-center text-black'>
          <Tooltip title='Cars'>
            <Link href={'/pages/cars'}>
              <IconButton>
                <Image src={carIcon} alt='car-icon' width={40} height={40} />
              </IconButton>
            </Link>
          </Tooltip>
          <p className='text-[16px] -mt-2 text-navbar-buttons'>Cars</p>
        </p>
        <p className='mr-8  flex flex-col items-center text-black'>
          <Tooltip title='Favourites'>
            <Link href={'/pages/cars'}>
              <IconButton>
                <FavoriteIcon color='' className='text-[26px] cursor-pointer ' />
              </IconButton>
            </Link>
          </Tooltip>
          <p className='text-[13px]-mt-3 text-navbar-buttons'>Favourites</p>
        </p>
        {/*<p className='mr-8  flex flex-col items-center text-black'>
          <Tooltip title='Favourites'>
            <Link href={'/pages/cars'}>
              <IconButton>
                <SellIcon color='' className='text-[26px] cursor-pointer ' />
              </IconButton>
            </Link>
          </Tooltip>
          <p className='text-[13px] -mt-1 text-navbar-buttons'>Cart</p>
          </p> */}
        <Button variant="outlined" className='font-bold text-blue-500  text-[16px] '>Sign in</Button>
      </div>
    </div>
  )
}

export default Navbar
