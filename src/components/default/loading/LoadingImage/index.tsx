/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Loader from "@/components/common/action/loader/Loader";
import IccmwLogo from '@/../public/assets/images/app/iccmwAppLogo.png'
import Image from 'next/image';

const index = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Image src={IccmwLogo} width={100} alt="iccmw" />
      <Loader />
    </div>
  )
}

export default index
