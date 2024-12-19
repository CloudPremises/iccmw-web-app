import React from 'react'
import SectionTitle from '@/components/common/layout/section/SectionTitle'


const page = () => {
  return (
    <div className='auto'>
      {/* Page Title */}
      <SectionTitle title='about us' />
      {/*  */}
      <div className='w-full'>
        <div className='h-auto max-w-screen-xl mx-auto p-4'>
          <div className='w-full p-4 sm:flex sm:flex-col md:flex md:flex-row items-center justify-between gap-6 '>
            <div className='text-4xl font-bold capitalize'>
              heading
            </div>
            <div className='text-4xl font-bold capitalize'>
              heading
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default page
