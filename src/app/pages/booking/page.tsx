"use client";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Image from "next/image";
import car from "../../Assets/bmw.png";

const Booking = () => {

  const indianLocations = [
    { city: 'Select your city' },
    { city: 'Ambala' },
    { city: 'Amritsar' },
    { city: 'Bangalore' },
    { city: 'Chandigarh' },
    { city: 'Chennai' },
    { city: 'Delhi' },
    { city: 'Gurgaon' },
    { city: 'Hisar' },
    { city: 'Haryana' },
    { city: 'Himachal' },
    { city: 'Jaipur' },
    { city: 'Jodhpur' },
    { city: 'Kolkata' },
    { city: 'Ludhiana' },
    { city: 'Noida' }
  ];

  return (
    <div>
      <h2 className="text-[30px]  font-bold my-8 text-center">
        Please enter your booking details carefully
      </h2>

      <div className="flex justify-between mx-5">
        <div className="flex flex-col gap-9 bg-white w-[60vw] rounded-sm">
          {/* <!-- Booking Form --> */}
          <div className="form-container border border-border-color bg-white shadow-default dark:border-strokedark dark:bg-boxdark px-4">
            <div className="border-b border-border-color py-5 px-6.5 dark:border-strokedark">
              <h3 className="text-[25px] font-semibold text-black">
                Booking Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className=" mt-2 mb-2.5 block text-black">
                      Full name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded border-[1.5px] border-border-color bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className=" mt-2 mb-2.5 block text-black ">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded border-[1.5px] border-border-color bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className=" mt-2 mb-2.5 block text-black">
                      Phone number*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full rounded border-[1.5px] border-border-color bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className=" mt-2 mb-2.5 block text-black ">
                      City*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      className="w-full rounded border-[1.5px] border-border-color bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className=" mt-2 mb-2.5 block text-black ">
                    Address*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full rounded border-[1.5px] border-border-color bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                {/* Rental info */}
                <div>
                  <div className="border-b border-border-color py-5 px-6.5 dark:border-strokedark">
                    <h3 className="text-[25px] font-semibold text-black">
                      Rental Info
                    </h3>
                  </div>

                  <div className="text-[22px] font-semibold my-5">
                    <input type="radio" checked /> Pick up
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="mb-4.5 w-[50%] cursor-pointer ">
                      <label className="mb-2.5 block text-black">
                        Location*
                      </label>
                      <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select className="relative  select-component z-20 w-full text-placeholder-color appearance-none rounded border border-stroke bg-transparent outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary  ">
                          {
                            indianLocations.map((el, i) => {
                              return (
                                  <option  key={i}>{el.city}</option>
                              )
                            })
                          }
                        
                        </select>
                      </div>
                    </div>

                    <div className="w-[100%] xl:w-1/2 text-placeholder-color ">
                      <label className=" mb-2.5 block text-black ">
                        Select your date*
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Select your date"
                          className="w-[100%] text-placeholder-color "
                        />
                      </LocalizationProvider>
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className=" mt-2 mb-2.5 block text-black">
                      Time*
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Select your time"
                        className="w-[97%]"
                      />
                    </LocalizationProvider>
                  </div>

                  <div className="text-[22px] font-semibold my-5">
                    <input type="radio" checked /> Drop Off
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="mb-4.5 w-[50%]">
                      <label className="mb-2.5 block text-black cursor-pointer">
                        Location*
                      </label>
                      <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select className="relative  select-component z-20 w-full text-placeholder-color appearance-none rounded border border-stroke bg-transparent outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary  ">
                        {
                            indianLocations.map((el, i) => {
                              return (
                                  <option  key={i}>{el.city}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>

                    <div className="w-[100%] xl:w-1/2  cursor-pointer">
                      <label className=" mb-2.5 block text-black ">
                        Select your date*
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Select your date"
                          className="w-[100%]  "
                        />
                      </LocalizationProvider>
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className=" mt-2 mb-2.5 block text-black">
                      Time*
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Select your time"
                        className="w-[97%]"
                      />
                    </LocalizationProvider>
                  </div>
                </div>

                <button className="flex w-full bg-blue my-5 text-white justify-center rounded bg-primary p-3 font-medium text-gray">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" ml-5 border border-border-color h-[550px] form-container w-[40vw]">
          <div className="p-5">
            <h3 className="text-[25px] font-semibold text-black -pt-1">
              {" "}
              Rental Summary
            </h3>
            <p className="text-placeholder-color">
              {" "}
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>

            <div className="my-5 flex border border-border-color form-container">
              <Image src={car} alt="car" width={300} height={300} />

              <div className="mx-3">
                <h4 className="text-[25px] font-semibold ">Car Name</h4>
                <p>Ratings</p>
              </div>
            </div>

            <div >
              <p className="flex justify-between mx-1 text-[25px] font-medium my-1">Price <p>0000</p></p>
              <p className="flex justify-between mx-1 text-[25px] font-medium my-1">Discount <p>0000</p></p>
              <p className="flex justify-between mx-1 text-[25px] font-medium total-price my-2 pt-2" >Total <p>#0000</p></p>
            </div>

            <button className="flex w-full bg-blue my-5 text-white justify-center rounded bg-primary p-3 font-medium text-gray">
                 Pay now
                </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
