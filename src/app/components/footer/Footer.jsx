import React from 'react'
import PinDropIcon from '@mui/icons-material/PinDrop';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <div className='bg-black text-white w-[100%] p-3 mt-10 flex justify-between px-10 py-5'>

            <div>
                <p className='text-[25px] font-semibold'>Classy Cars</p>
                <p className='text-[13px] mt-2'>Our vision is to provide convenience
                    and help increase your sales business.</p>

                <p className='text-[13px]  mt-4'>© 2024 Classy Store. All Rights Reserved</p>
                <p className='text-[13px]  mt-1'>Made with 💖 by Akash</p>
                <ul className='flex flex-row mt-1 cursor-pointer'>
                    <li><Link href="https://github.com/leader-akash" target="_blank" rel="noopener noreferrer"><GitHubIcon className='text-[18px] mr-2' /></Link></li>
                    <li><Link href='https://www.linkedin.com/in/hi-akash/' target="_blank" rel="noopener noreferrer"><LinkedInIcon className='text-[18px] mr-2' /></Link></li>
                    <li><Link href='https://twitter.com/AkashAk50675432' target="_blank" rel="noopener noreferrer"><XIcon className='text-[18px] mr-2' /></Link></li>
                    <li><Link href='mailto:leader.akashak@gmail.com' target="_blank" rel="noopener noreferrer"><EmailIcon className='text-[18px] mr-2' /></Link></li>
                </ul>

            </div>

            <div>
                <h2 className='text-[18px] font-semibold'>Account</h2>
                <ul className='text-[13px] text-lightGrey'>
                    <li className='py-1'>My account</li>
                    <li className='py-1'>Wishlist</li>
                    <li className='py-1'>My rides</li>
                </ul>
            </div>

            <div>
                <h2 className='text-[18px] font-semibold'>Help</h2>
                <ul className='text-[13px] text-lightGrey'>
                    <li className='py-1'>FAQ</li>
                    <li className='py-1'>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <h2 className='text-[18px] font-semibold'>Contact Us</h2>
                <ul className='text-[13px] text-lightGrey'>
                    <li className='flex items-center py-1'><span className='text-white font-bold -ml-0.5'><PinDropIcon className='text-[18px]' />Location: </span> <span className='mx-1'>Ludhiana, Punjab 14000 </span></li>
                    <li className='flex items-center py-1'><span className='text-white font-bold '><CallIcon className='text-[18px] '/>Call Us: </span>
                      <span className='mx-1'>+91 0000 000000</span>  
                    </li>
                    <li className='flex items-center py-1 cursor-pointer'><span className='text-white font-bold'><EmailIcon className='text-[18px] mr-1' />Email: </span>
                        <Link href='mailto:leader.akashak@gmail.com'>
                            <span className='mx-1'>leader.akashak@gmail.com</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
