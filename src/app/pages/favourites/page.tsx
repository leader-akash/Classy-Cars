import axios from 'axios'
import React from 'react'

const Favourites = async () => {

      const result = await axios.get(`http://localhost:5004/api/car/`)
      console.log('result', result?.data)



  return (
    <div className='mx-auto mt-20 text-center'>
       <h1 className='text-[30px] font-semibold'>
            Welcome to Classy Cars 
        </h1>
        <p> Your Favourite cars are shown here</p>
{
  result?.data?.map((el)=> {
    return (
      <p>{el?.carName}</p>
    )
  })
}

    </div>
  )
}

export default Favourites
