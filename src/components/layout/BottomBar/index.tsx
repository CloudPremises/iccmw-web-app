'use client'
import Link from 'next/link'
import React from 'react'

const BottomBar = () => {

  return (

    <div className='bg-black p-4'>
      <div className='max-w-screen-xl mx-auto flex justify-between'>
        <div></div>
        <div className='flex gap-6 justify-between content-between'>
          <Link
            href='/privacy'
            className="text-lg font-semibold text-gray-400 hover:text-green-500 hover:font-bold active:text-green-500 active:font-bold transition duration-300 capitalize">
            Privacy Policy
          </Link>
          <Link
            href='/terms'
            className="text-lg font-semibold text-gray-400 hover:text-green-500 hover:font-bold active:text-green-500 active:font-bold transition duration-300 capitalize">
            Terms & Condition
          </Link>
        </div>
      </div>
    </div >

  )
}

export default BottomBar