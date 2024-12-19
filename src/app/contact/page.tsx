import React from 'react'
import Contactus from '@/components/page/contact/ContactUs'
import Map from "@/components/page/home/Map";
import SectionTitle from '@/components/common/layout/section/SectionTitle'


const page = () => {
  return (
    <div>
      {/* Page Title */}
      <SectionTitle title='contact us' />
      {/* Page Body */}
      <Contactus />
      <Map />
    </div>
  )
}

export default page
