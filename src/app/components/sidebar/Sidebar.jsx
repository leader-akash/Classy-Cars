'use client'
import React, { useState } from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  const carsType = ['Sport', 'SUV', 'Sedan', 'XUV', 'Mini', 'Prime Sedan'];
  const capacity = ['2 Person', '4 Person', '5 Person', '7 Person'];

  // Use an array of selected states, initialized with false for each car type
  const [selectedTypes, setSelectedTypes] = useState(Array(carsType?.length).fill(false));

  const [capacityTypes, setCapacityTypes] = useState(Array(capacity?.length).fill(false));

  const sortBy = ['Price low to high', 'Price high to low']


  const handleTypeClick = (index) => {
    // Create a copy of the selectedTypes array and toggle the value at the clicked index
    const updatedSelectedTypes = [...selectedTypes];
    updatedSelectedTypes[index] = !updatedSelectedTypes[index];
    setSelectedTypes(updatedSelectedTypes);
  };

  const handleCapacityClick = (index) => {
    const updatedSelectedCapacity = [...capacityTypes];
    updatedSelectedCapacity[index] = !updatedSelectedCapacity[index]

    setCapacityTypes(updatedSelectedCapacity)
  }

  return (
    <div className={`sticky ${styles.sidebarContainer}`}>
      <div className={`${styles.carTypeContainer}`}>
        <h2 className='text-[25px] font-semibold ml-3 mt-2'>Car Type</h2>

        {carsType?.map((el, i) => (
          <div key={i} onClick={() => handleTypeClick(i)}>
            <p className={`${styles.typeContainer} ${selectedTypes[i] ? styles.selectedType : ''}`}> {el} </p>
          </div>
        ))}
      </div>

      <div className={`${styles.carTypeContainer} mt-5`}>
        <h2 className='text-[25px] font-semibold ml-3 mt-2'>Capacity</h2>

        {capacity?.map((el, i) => (
          <div key={i} onClick={() => handleCapacityClick(i)}>
            <p className={`${styles.typeContainer} ${capacityTypes[i] ? styles.selectedType : ''}`}> {el} </p>
          </div>
        ))}
      </div>

      <div className={`${styles.carTypeContainer} mt-5`}>
        <h2 className='text-[25px] font-semibold ml-3 mt-2'>Filters</h2>
        <div className='ml-3 mt-2 '>
          <div className='flex justify-between'>
            <h3 className='text-[18px] font-medium mt-2'>Price Range</h3>
            <button className={`${styles.clearFilterBtn}`}> Clear all</button>
          </div>
          <p>all</p>
          <input className="label-padding sel-range cursor-pointer w-[156px]" type="range" min="0" max="100000" step="5000" />
        </div>

        <h3 className='text-[18px] font-semibold mt-2 ml-3 mb-1'>Sort By</h3>

        <div className='flex flex-col mt-1 ml-3 mb-2'>
          <label for='lowToHigh' className='cursor-pointer'>
            <input type='radio' id='lowToHigh' name='price-sort' className='mr-1' />
            Price- Low to high
          </label>

          <label for='highToLow' className='cursor-pointer '>
            <input type='radio' id='highToLow' name='price-sort' className='mr-1' />
            Price- High to low
          </label>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
