import React from "react";
import BookingDetails from '../../../components/bookingDetails/BookingDetails'


const Booking = ({params}) => {

  console.log('params', params)

  return (
    <BookingDetails carId={params?.bookingCarId}/>
  )
};

export default Booking;
