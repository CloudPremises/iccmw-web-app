/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';

// Define the type for each khateeb object
interface Khateeb {
  name: string;
  image: string;
}

const Khateeb = () => {
  // Use the defined type for the khateebData state
  const [khateebData, setKhateebData] = useState<Khateeb[]>([]);

  // Fetch Khateeb data from the provided JSON link
  useEffect(() => {
    const fetchKhateebData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Cloud-Premises/iccmw-app/refs/heads/main/data/assets/json/khateeb/khateeb.json');
        const data = await response.json();
        setKhateebData(data.khateeb); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching Khateeb data:", error);
      }
    };

    fetchKhateebData(); // Call the fetch function
  }, []); // Empty dependency array ensures it only runs once on mount

  return (

    <div className='h-auto max-w-screen-xl mx-auto p-4'>
      <div className='w-full p-4 sm:flex sm:flex-col md:flex md:flex-col items-center justify-center gap-6 '>

        <h1 className='text-4xl font-bold capitalize'>Our Jummah Khateeb&apos;s</h1>

        <div className='sm:flex sm:flex-col sm:gap-4 md:flex md:flex-row md:gap-6 p-4 bg-white rounded-2xl'>

          {/* Map through the Khateeb data */}
          {khateebData.map((khateeb, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-4 justify-between items-center rounded-xl border border-primary p-4 transition-all duration-300 ease-in-out hover:p-6 hover:shadow-lg cursor-pointer my-4"
            >
              <img
                src={khateeb.image}
                width={200}
                height={200}
                alt={khateeb.name}
                className="rounded-lg"
              />
              <h1 className="text-lg font-bold text-center">{khateeb.name}</h1>
            </div>
          ))}

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

export default Khateeb

