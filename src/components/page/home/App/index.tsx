// /* eslint-disable @next/next/no-img-element */
// import React from 'react'

// const index = () => {


//   return (
//     <div className='w-full bg-color-quaternary'>
//       <div className='h-auto max-w-screen-xl mx-auto p-4'>
//         <div className='w-full p-4 sm:flex sm:flex-col md:flex md:flex-col items-center justify-center gap-6 '>

//           {/* Download App */}
//           <div className='w-full sm:flex sm:flex-col sm:items-center sm:gap-4 md:flex md:flex-row md:justify-center md:gap-12  '>
//             {/* Mock Up  */}
//             <div className='flex'>
//               <img src="https://raw.githubusercontent.com/Cloud-Premises/iccmw-app/refs/heads/main/assets/images/mockup/mockup.png" width={320} alt="mokupImage" />
//             </div>

//             {/* Download Description */}
//             <div className='flex flex-col gap-2'>
//               <h1 className='text-4xl font-bold'>Download ICCMW App</h1>
//               <p className='p-4 w-96'>
//                 Download the ICCMW app to get the latest updates on the prayer time, events, including speaker profiles, session
//               </p>
//               <div className='sm:flex sm:flex-col sm:items-center sm:gap-4 lg:flex lg:flex-row lg:gap-4 lg:justify-center'>

//                 {/* Apple Button */}
//                 <button className='w-fit bg-black flex items-center gap-4 py-2.5 px-6 rounded-xl hover:bg-gray-700 hover:shadow-lg  '>
//                   <div>
//                     <img src="https://raw.githubusercontent.com/Cloud-Premises/iccmw-app/refs/heads/main/assets/images/download/appstore.png" width={42} alt="play_store" />
//                   </div>
//                   <div className='flex flex-col items-start'>
//                     <h1 className='font-roboto capitalize text-white text-sm'>
//                       download on the
//                     </h1>
//                     <h1 className='font-roboto font-bold capitalize text-white text-xl'>
//                       apple store
//                     </h1>
//                   </div>
//                 </button>


//                 {/* Gppgle Button */}
//                 <button className='w-fit bg-black flex items-center gap-4 py-1.5 px-6 rounded-xl hover:bg-gray-700 hover:shadow-lg '>
//                   <div>
//                     <img src="https://raw.githubusercontent.com/Cloud-Premises/iccmw-app/refs/heads/main/assets/images/download/playstore.png" width={42} alt="play_store" />
//                   </div>
//                   <div className='flex flex-col items-start'>
//                     <h1 className='font-roboto uppercase text-white text-lg'>
//                       get it on
//                     </h1>
//                     <h1 className='font-roboto font-bold capitalize text-white text-xl'>
//                       google play
//                     </h1>
//                   </div>
//                 </button>


//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default index

/* eslint-disable @next/next/no-img-element */
'use client'/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

// Define the interface for the fetched data
interface Device {
  ios: {
    url: string;
    image: string;
  };
  android: {
    url: string;
    image: string;
  };
}

interface AppData {
  mockupImage: string;
  heading: string;
  description: string;
  device?: Device;  // Make platform optional in case it's missing
}

const Index = () => {
  // Explicitly type the 'data' state as AppData | null
  const [data, setData] = useState<AppData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Cloud-Premises/iccmw-app/refs/heads/main/data/assets/json/downloadAppPage/downloadApp.json'
        );
        const result: AppData = await response.json(); // Ensure that the fetched data matches the AppData type
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div></div>;
  }

  // Check if the platform data is available
  if (!data.device) {
    return <div></div>;
  }

  return (
    <div className='w-full bg-color-quaternary'>
      <div className='h-auto max-w-screen-xl mx-auto p-4'>
        <div className='w-full p-4 sm:flex sm:flex-col md:flex md:flex-col items-center justify-center gap-6'>

          {/* Download App */}
          <div className='w-full sm:flex sm:flex-col sm:items-center sm:gap-4 md:flex md:flex-row md:justify-center md:gap-12'>
            {/* Mock Up  */}
            <div className='flex'>
              <img src={data.mockupImage} width={320} alt="mockupImage" />
            </div>

            {/* Download Description */}
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl font-bold'>{data.heading}</h1>
              <p className='py-4 w-96'>{data.description}</p>
              <div className='sm:flex sm:flex-col sm:items-center sm:gap-4 lg:flex lg:flex-row lg:gap-4 lg:justify-center'>

                {/* Apple Button */}
                {data.device.ios && (
                  <a
                    href={data.device.ios.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-fit bg-black flex items-center gap-4 py-2.5 px-6 rounded-xl hover:bg-gray-700 hover:shadow-lg'
                  >
                    <div>
                      <img src={data.device.ios.image} width={42} alt="app_store" />
                    </div>
                    <div className='flex flex-col items-start'>
                      <h1 className='font-roboto capitalize text-white text-sm'>
                        download on the
                      </h1>
                      <h1 className='font-roboto font-bold capitalize text-white text-xl'>
                        apple store
                      </h1>
                    </div>
                  </a>
                )}

                {/* Google Button */}
                {data.device.android && (
                  <a
                    href={data.device.android.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-fit bg-black flex items-center gap-4 py-1.5 px-6 rounded-xl hover:bg-gray-700 hover:shadow-lg'
                  >
                    <div>
                      <img src={data.device.android.image} width={42} alt="play_store" />
                    </div>
                    <div className='flex flex-col items-start'>
                      <h1 className='font-roboto uppercase text-white text-lg'>
                        get it on
                      </h1>
                      <h1 className='font-roboto font-bold capitalize text-white text-xl'>
                        google play
                      </h1>
                    </div>
                  </a>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
