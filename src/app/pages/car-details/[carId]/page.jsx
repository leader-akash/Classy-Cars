import React from 'react'
import CarDetails from '../../../components/carDetails/CarDetails'

const CarDetail = ({params}) => {

  console.log('iddddd', params)

  return (
    <div className='m-5'>
        <CarDetails carId={params?.carId}/>
    </div>
  )
}

export default CarDetail
