import React from 'react'
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdMap } from "react-icons/md";

import footerData from '@/data/app/layout/Footer/index.json';


const index = () => {
  const { contact } = footerData;

  return (
    <div className='h-auto max-w-screen-xl mx-auto p-4'>
      <div className='w-full p-4 sm:flex sm:flex-col md:flex md:flex-col items-center justify-center gap-6 '>

        <h1 className='text-4xl font-bold capitalize'>Stay in Touch</h1>
        <div className='w-full sm:flex sm:flex-col sm:gap-12 md:flex md:flex-row md:justify-evenly p-4 bg-white rounded-2xl'>

          <div className='w-full flex flex-col gap-2 justify-between items-center  '>
            <MdCall style={{ fontSize: '32px', color: 'green' }} />
            <div className=' flex flex-col gap-2 items-center'>
              <h1 className='text-md '>{contact.number}</h1>
              <h1 className='text-md '>{contact.timing}</h1>
            </div>
          </div>


          <div className='w-full flex flex-col gap-2 justify-between items-center  '>
            <MdMap style={{ fontSize: '32px', color: 'green' }} />
            <div className=' flex flex-col gap-1 items-center'>
              <h1 className='text-md '>{contact.address[0]}</h1>
              <h1 className='text-md '>{contact.address[1]}</h1>
            </div>
          </div>

          <div className='w-full flex flex-col gap-2 justify-between items-center  '>
            <MdEmail style={{ fontSize: '32px', color: 'green' }} />
            <div className=' flex flex-col gap-1 items-center'>
              <h1 className='text-md '>E-mail</h1>
              <h1 className='text-md '>{contact.email}</h1>
            </div>
          </div>

          {/* <div className="w-full flex flex-col gap-4 justify-between items-center rounded-xl border border-primary p-4 transition-all duration-300 ease-in-out hover:p-6 hover:shadow-lg cursor-pointer hover:text-white" >
            <img src="https://iccmw.org/wp-content/uploads/2023/03/ahmed.jpg" width={200} height={200} alt="khatib" className='rounded-lg' />
            <h1 className='text-xl font-bold text-color-secondary'>Sh. Omar Ahmed</h1>
          </div>

          <div className="w-full flex flex-col gap-4 justify-between items-center rounded-xl border border-primary p-4 transition-all duration-300 ease-in-out hover:p-6 hover:shadow-lg cursor-pointer hover:text-white" >
            <img src="https://iccmw.org/wp-content/uploads/2023/03/ahmed.jpg" width={200} height={200} alt="khatib" className='rounded-lg' />
            <h1 className='text-xl font-bold text-color-secondary'>Sh. Omar Ahmed</h1>
          </div>

          <div className="w-full flex flex-col gap-4 justify-between items-center rounded-xl border border-primary p-4 transition-all duration-300 ease-in-out hover:p-6 hover:shadow-lg cursor-pointer hover:text-white" >
            <img src="https://iccmw.org/wp-content/uploads/2023/03/ahmed.jpg" width={200} height={200} alt="khatib" className='rounded-lg' />
            <h1 className='text-xl font-bold text-color-secondary'>Sh. Omar Ahmed</h1>
          </div>

          <div className="w-full flex flex-col gap-4 justify-between items-center rounded-xl border border-primary p-4 transition-all duration-300 ease-in-out hover:p-6 hover:shadow-lg cursor-pointer hover:text-white" >
            <img src="https://iccmw.org/wp-content/uploads/2023/03/ahmed.jpg" width={200} height={200} alt="khatib" className='rounded-lg' />
            <h1 className='text-xl font-bold text-color-secondary'>Sh. Omar Ahmed</h1>
          </div> */}

        </div>


      </div>
    </div>

  )
}

export default index