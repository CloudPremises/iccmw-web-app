import React from 'react'
import footerData from '@/data/app/layout/Footer/index.json';
import imageUrl from '@/../public/assets/images/app/iccmwLogo.png';
import Link from 'next/link'
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";

const index = () => {
  // FooterData
  const { logo, navigation, contact } = footerData;

  return (
    <div className='bg-[#121413] p-4'>
      <div className='max-w-screen-xl mx-auto sm:flex-col lg:flex lg:flex-row lg:justify-between'>

        <div className='p-4 sm:flex sm:flex-col sm:items-center sm:justify-start'>

          {/* Logo Section */}
          <Link href='/'>
            <div className="text-lg flex flex-col items-start cursor-pointer sm:w-80 lg:w-96 ">
              <div className='p-5'>
                <Image src={imageUrl} alt={logo.title} width={120} height={120} />
              </div>
              <span className="ml-2 text-white text-xl font-bold">{logo.title}</span>

              {/* <div className='flex flex-col gap-0 ml-2'>
           <span className='text-xl'>Islamic Community Center</span>
           <span className='text-xl'>of Mid-Westchester</span>
         </div> */}

              {/* <div className='ml-2 text-2xl font-extrabold text-gray-400'>
           ICCMW
         </div> */}

            </div>
          </Link>
          <div>
            <div className="text-lg flex flex-col items-start sm:w-80 lg:w-96 ">

              <p className="ml-2 pt-4 text-white text-sm font-thin">{logo.description}</p>
            </div>

          </div>

        </div>

        <div className='px-12 py-8 sm:flex sm:flex-col sm:items-start sm:gap-8 md:flex-row md:justify-center md:items-baseline md:gap-16'>

          {/* Useful Links */}
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-white text-lg'>Useful Links</h1>
            <ul className='flex flex-col gap-4'>
              {navigation.map((item, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <MdKeyboardArrowRight className="text-gray-400" />

                  <Link
                    href={`${item['route'].toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lg font-semibold text-gray-400 hover:text-green-500 hover:font-bold active:text-green-500 active:font-bold transition duration-300 capitalize">
                    {item['title']}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}

          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-white text-lg '>Contact Us</h1>

            <ul className='flex flex-col gap-4'>
              <div className="text-lg font-semibold text-gray-400 hover:text-green-500 hover:font-bold active:text-green-500 active:font-bold transition duration-300 cursor-pointer">
                <li className='flex items-center gap-2'>
                  <MdKeyboardArrowRight />
                  {contact.number}
                </li>
              </div>

              <div className="text-lg font-semibold text-gray-400 hover:text-green-500 hover:font-bold active:text-green-500 active:font-bold transition duration-300 cursor-pointer">
                <li className='flex items-center gap-2'>
                  <MdKeyboardArrowRight />
                  {contact.email}
                </li>
              </div>

              <div className="text-lg font-semibold text-gray-400 hover:text-green-500 hover:font-bold active:text-green-500 active:font-bold transition duration-300 uppercase cursor-pointer">
                <li className='flex items-center gap-2'>
                  <MdKeyboardArrowRight />
                  {contact.timing}
                </li>
              </div>

              <div className=' text-gray-400 hover:text-green-500 hover:font-bold active:text-green-500 active:font-bold transition duration-300'>
                <li className='flex gap-2 items-baseline'>
                  <MdKeyboardArrowRight />
                  <div className='flex flex-col'>
                    {contact.address.map((item, index) => (
                      <div key={index} className='text-lg font-semibold capitalize'>

                        <Link
                          href=''
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </li>
              </div>
            </ul>
          </div>



        </div>
      </div>
    </div>
  )
}

export default index


