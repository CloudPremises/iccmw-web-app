'use client'
import React, { useState, useEffect } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import topBarData from '@/data/app/layout/TopBar/index.json';

const TopBar = () => {
  const { number, address, email } = topBarData;
  const [isVisible, setIsVisible] = useState(true);

  // fetch / load the topBarvisibility variable value
  useEffect(() => {
    const saveVisibility = localStorage.getItem('topBarVisibility');
    if (saveVisibility === 'hidden') {
      setIsVisible(false);
    }
  }, [])

  // store the topBarvisibility variable value
  useEffect(() => {
    localStorage.setItem('topBarVisibility', isVisible ? 'visible' : 'hidden');
  })


  const handleClose = () => {
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className='bg-black p-4 sticky top-0 shadow-md z-50'>
      <div className='container mx-auto xl:max-w-screen-xl'>
        <div className='flex justify-between items-center sm:px-4'>

          {/* Contact Number, Email, Address */}
          <div className='flex justify-between gap-12 sm:flex sm:flex-col sm:gap-4 sm:px-8 md:flex-row md:gap-6'>

            <div className='flex items-center justify-between gap-3 text-white cursor-pointer sm:justify-start'>
              <FaPhoneAlt />
              <span className='text-white text-sm'>
                {number}
              </span>
            </div>

            <div className='flex items-center justify-between gap-3 text-white cursor-pointer sm:justify-start'>
              <MdEmail />
              <span className='text-white text-sm'>
                {email}
              </span>
            </div>

            <div className='flex items-center justify-between gap-3 text-white cursor-pointer sm:justify-start'>
              <FaLocationDot />
              <div className='flex flex-col'>
                <span className='text-white text-xs'>
                  {address[0]}
                </span>
                <span className='text-white text-xs'>
                  {address[1]}
                </span>
              </div>
            </div>

          </div>

          <span className='text-white cursor-pointer'
            onClick={handleClose}>
            <RiCloseLargeFill />
          </span>

        </div>
      </div>
    </div>
  )
}

export default TopBar