import Carousel from '@/components/common/dataDisplay/carousel/Carousel'
import React from 'react'

const index = () => {
  const images = [
    'https://iccmw.org/wp-content/uploads/2023/03/slider01.jpg',
    'https://iccmw.org/wp-content/uploads/2023/03/slider02.jpg',
    'https://iccmw.org/wp-content/uploads/2023/03/slider03.jpg',
  ];

  return (
    <div className='max-w-screen-xl mx-auto m-8 px-4'>
      <Carousel slides={images} />
    </div>
  )
}

export default index