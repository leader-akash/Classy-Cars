'use client'
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car from '../../Assets/hero.webp';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './CarImageSlider.module.css'

const CarImageSlider = () => {
 
    const renderCustomIndicator = (clickHandler, isSelected, index) => {
        const images = [
          car,car,car,car,car,car
        ];
        const indicatorClassName = isSelected ? `${styles.carouselIndicator} ${styles.selected}` : `${styles.carouselIndicator}`;

        return (
          <li
            className={indicatorClassName}
            onClick={clickHandler}
            key={index}
          >
            <Image src={images[index]} alt={`indicator-${index + 1}`} width={50} height={50} />
          </li>
        );
      };

    return (
        <div className='w-[500px]'>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} stopOnHover={true} renderIndicator={renderCustomIndicator}>
                <div>
                    <Image src={car} alt='car-images' className='w-[250px] h-[300px] rounded-xl' />
                </div>
                <div>2
                    <Image src={car} alt='car-images' className='w-[250px] h-[300px] rounded-xl' /></div>
                <div>
                    <h3>3</h3>
                    <Image src={car} alt='car-images' className='w-[250px] h-[300px] rounded-xl' />
                </div>
                <div>
                    <h3>4</h3>
                    <Image src={car} alt='car-images' className='w-[250px] h-[300px] rounded-xl' />
                </div>
                <div>
                    <h3>5</h3>
                    <Image src={car} alt='car-images' className='w-[250px] h-[300px] rounded-xl' />
                </div>
                <div>
                    <h3>6</h3>
                    <Image src={car} alt='car-images' className='w-[250px] h-[300px] rounded-xl' />
                </div>
            </Carousel>
        </div>
    );
};

export default CarImageSlider;
