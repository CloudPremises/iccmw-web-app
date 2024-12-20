/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

const index = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <div className='w-full p-4 sm:flex sm:flex-col md:flex md:flex-row items-start justify-center gap-4 '>

        <div className='w-full p-4 bg-white rounded-2xl flex flex-col gap-4'>

          <div className='flex justify-between items-center'>
            {/* Time Now */}
            <div className='flex flex-col'>
              <h1 className='sm:text-lg md:text-xl font-bold text-color-secondary'>03 Safar 1443 AH </h1>
              <h1 className='sm:text-lg md:text-xl font-bold '>Sunday, September 12, 2021 </h1>
            </div>

            <button className='flex gap-2 items-center h-fit transition-all duration-300 ease-in-out bg-black hover:bg-color-secondary text-white font-bold rounded-xl border border-primary py-2 px-3'>
              <FaDownload size={16} />
              <span>
                Monthly Calender
              </span>

            </button>
          </div>

          <div className="w-full flex flex-col gap-4 items-center rounded-xl border border-primary p-6  " >
            {/* Time Now */}
            <div className="w-full flex justify-between items-center rounded-xl border border-primary p-4 bg-color-primary hover:bg-color-primary active:bg-color-primary cursor-pointer hover:text-black" >
              <h1 className='text-md font-bold capitalize hop'>Time Now</h1>
              <h1 className='text-md font-bold capitalize'>4:21 AM</h1>
              {/* <h1 className='text-md font-bold capitalize'>4:40 AM</h1> */}
            </div>

          </div>
          {/* Card */}
          <div className="w-full flex flex-col gap-4 items-center rounded-xl border border-primary p-6  " >
            {/* Heading */}
            <div className='w-full flex justify-between'>
              <h1 className='text-md font-bold uppercase text-color-secondary w-16'>Salah</h1>
              <h1 className='text-md font-bold uppercase text-color-secondary w-16'>Beginning </h1>
              <h1 className='text-md font-bold uppercase text-color-secondary w-16'>Jammat </h1>
            </div>

            {/* Fajr */}
            <div className="w-full flex justify-between items-center rounded-xl border border-primary p-4 hover:bg-color-secondary active:bg-color-secondary cursor-pointer hover:text-white" >
              <h1 className='text-md font-bold capitalize w-16  '>Fajr</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:21 AM</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:40 AM</h1>
            </div>

            {/* Dhuhr */}
            <div className="w-full flex justify-between items-center rounded-xl border border-primary p-4 hover:bg-color-secondary active:bg-color-secondary cursor-pointer hover:text-white" >
              <h1 className='text-md font-bold capitalize w-16 '>Dhuhr</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:21 AM</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:40 AM</h1>
            </div>

            {/* Asr */}
            <div className="w-full flex justify-between items-center rounded-xl border border-primary p-4 hover:bg-color-secondary active:bg-color-secondary cursor-pointer hover:text-white" >
              <h1 className='text-md font-bold capitalize w-16 '>Asr</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:21 AM</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:40 AM</h1>
            </div>

            {/* Maghrib */}
            <div className="w-full flex justify-between items-center rounded-xl border border-primary p-4 hover:bg-color-secondary active:bg-color-secondary cursor-pointer hover:text-white" >
              <h1 className='text-md font-bold capitalize w-16 '>Maghrib</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:21 AM</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:40 AM</h1>
            </div>

            {/* Isha */}
            <div className="w-full flex justify-between items-center rounded-xl border border-primary p-4 hover:bg-color-secondary active:bg-color-secondary cursor-pointer hover:text-white" >
              <h1 className='text-md font-bold capitalize w-16 '>Isha</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:21 AM</h1>
              <h1 className='text-md font-bold capitalize w-16'>4:40 AM</h1>
            </div>

          </div>

        </div>
        <div className='border-gray-500 border-spacing-1'>


        </div>
        <div className='w-full p- rounded-2xl flex flex-col gap-4'>

          {/* Friday Prayer of this week / Next week */}
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold text-color-secondary'>08 Safar 1443 AH </h1>
            <h1 className='text-xl font-bold '>Friday, September 17, 2021 </h1>
          </div>

          <div className='sm:flex sm:flex-col sm:gap-4 md:flex md:flex-row md:gap-4'>
            {/* Kateeb */}
            <div className="w-full flex flex-col gap-3 items-center rounded-xl border border-primary p-6  " >
              <div className='w-full flex flex-col gap-1'>

                <div className='w-full flex justify-end '>
                  <h1 className='text-md font-bold'>First prayer</h1>
                </div>

                <div className=' w-full flex justify-center'>
                  <h1 className='text-2xl font-bold text-color-secondary text-center'>Church Hall</h1>

                </div>

                <div className='flex items-start justify-center rounded-xl text-center'>
                  <CiLocationOn size={24} />
                  <h1>100 Underhill Street Yonkers NY 10710</h1>
                </div>


                {/* Khudba */}
                {/* <div className='flex gap-4'>
                  <h1 className='text-xl font-bold '>khudba:</h1>
                  <h1 className='text-xl font-bold '>12:30 PM</h1>
                </div> */}
                {/* Salah */}
                {/* <div className='flex gap-4'>
                  <h1 className='text-xl font-bold '>Salah:</h1>
                  <h1 className='text-xl font-bold '>12:55 PM</h1>
                </div> */}

              </div>

              <img src="https://iccmw.org/wp-content/uploads/2024/01/mockeh.jpg" width={100} height={100} alt="khatib" className='rounded-full' />
              <h1 className='text-lg font-bold text-center'>Dr. Mohammad Ockeh</h1>

              <div className='w-full flex flex-col gap-3 items-center rounded-xl border border-primary p-6'>
                <h1 className='text-md font-bold text-color-secondary'>Khudba Begin at</h1>
                <div className='w-full py-2 bg-color-tertiary rounded-lg flex justify-center text-white hover:bg-color-secondary cursor-pointer'>
                  <h1 className='text-md font-bold '>12:00 PM</h1>
                </div>
                <h1 className='text-md font-bold text-color-secondary'>Salah Begin at</h1>
                <div className='w-full py-2 bg-color-tertiary rounded-lg flex justify-center text-white hover:bg-color-secondary cursor-pointer'>
                  <h1 className='text-md font-bold '>12:50 PM</h1>
                </div>
              </div>


            </div>


            {/* Kateeb */}
            <div className="w-full flex flex-col gap-3 items-center rounded-xl border border-primary p-6  " >

              <div className='w-full flex flex-col gap-1'>

                <div className='w-full flex justify-end '>
                  <h1 className='text-md font-bold'>Second prayer</h1>
                </div>

                <div className='w-full flex justify-center'>
                  <h1 className='text-2xl font-bold text-color-secondary text-center'>ICCMW Masjid</h1>
                </div>

                <div className='flex items-start justify-center rounded-xl text-center'>
                  <CiLocationOn size={24} />
                  <h1>2 Grandview Blvd Yonkers, NY 10710</h1>
                </div>

                {/* Khudba */}
                {/* <div className='flex gap-4'>
                <h1 className='text-xl font-bold '>khudba:</h1>
                <h1 className='text-xl font-bold '>12:30 PM</h1>
              </div> */}
                {/* Salah */}
                {/* <div className='flex gap-4'>
                <h1 className='text-xl font-bold '>Salah:</h1>
                <h1 className='text-xl font-bold '>12:55 PM</h1>
              </div> */}
              </div>

              <img src="https://iccmw.org/wp-content/uploads/2023/03/ahmed.jpg" width={100} height={100} alt="khatib" className='rounded-full' />
              <h1 className='text-lg font-bold text-center'>Sh. Omar Ahmed</h1>


              <div className='w-full flex flex-col gap-3 items-center rounded-xl border border-primary p-6'>
                <h1 className='text-md font-bold text-color-secondary'>Khudba Begin at</h1>
                <div className='w-full py-2 bg-color-tertiary rounded-lg flex justify-center text-white hover:bg-color-secondary cursor-pointer'>
                  <h1 className='text-md font-bold '>12:00 PM</h1>
                </div>
                <h1 className='text-md font-bold text-color-secondary'>Salah Begin at</h1>
                <div className='w-full py-2 bg-color-tertiary rounded-lg flex justify-center text-white hover:bg-color-secondary cursor-pointer'>
                  <h1 className='text-md font-bold '>12:50 PM</h1>
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default index
