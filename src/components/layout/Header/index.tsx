'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import headerData from '@/data/app/layout/Header/index.json';
import imageUrl from '@/../public/assets/images/app/iccmwLogo.png';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from "react-icons/io5";
import { usePathname, useRouter } from 'next/navigation'
import TopBar from '../TopBar';


const Header = () => {
  const { logo, navigation, button } = headerData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const pathName = usePathname();
  const router = useRouter();


  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <header
      className={`sticky top-0 bg-white z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''
        }`}>
      <TopBar />
      <div className="max-w-screen-xl flex justify-between items-center mx-auto py-2 px-4">

        {/* Logo Section */}
        <Link href='/'>
          <div className="text-lg font-bold flex items-center cursor-pointer">
            <Image src={imageUrl} alt={logo.title} width={50} height={50} />
            <span className="ml-2 sm:w-60 lg:w-auto">{logo.title}</span>

            {/* <div className='flex flex-col gap-0 ml-2'>
              <span className='text-xl'>Islamic Community Center</span>
              <span className='text-xl'>of Mid-Westchester</span>
            </div> */}

            {/* <div className='ml-2 text-2xl font-extrabold text-gray-500'>
              ICCMW
            </div> */}

          </div>
        </Link>

        {/* Hamburger Menu for Smaller Screens */}
        <div className="md:hidden">
          <button
            className="text-2xl text-green-500 focus:outline-none "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {
              isMenuOpen ? <IoClose /> : <RxHamburgerMenu />
            }
          </button>
        </div>



        {/* Navigation and Button Section */}
        <div className={`flex py-2 gap-4 sm:flex-none transform 
          ${isMenuOpen ?
            "flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg px-12 items-start py-6"
            : "hidden"} md:flex md:items-center md:static md:w-auto  `}>

          {/* Navigation */}
          <nav className='flex'>
            <ul className={`flex md:space-x-4 
              ${isMenuOpen ? 'flex flex-col space-x-0 items-start gap-2'
                : 'hidden'}   
              md:flex md:items-center `}>
              {navigation.map((item, index) => {
                const isActive = pathName === item.route.toLowerCase().replace(/\s+/g, '-');

                return (
                  <li key={index}>
                    <Link
                      href={`${item.route.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`text-lg font-semibold transition duration-300 capitalize 
                   ${isActive ? 'text-color-secondary font-bold' : 'text-gray-500 hover:text-color-secondary hover:font-bold'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item['title']}
                    </Link>
                  </li>
                )
              }

              )}
            </ul>
          </nav>

          {/* Button */}

          {/* {button.map((item, index) => (
            <button className="bg-yellow-500 px-6 py-1 h-12 rounded-lg capitalize" key={index}>
              {item['title']}
            </button>
          ))} */}

          {button.length > 0 && (
            <button
              className="text-lg font-semibold text-white bg-color-secondary px-6 py-1 h-12 rounded-lg capitalize transition-all duration-300 ease-in-out hover:py-2 hover:px-8"
              onClick={() => router.push(`/${button[0].link}`)}
            >
              {button[0].title}
            </button>
          )}
          {/* 
          {button.length > 0 && (
            <button className="text-lg font-semibold text-black bg-yellow-500 px-6 py-1 h-12 rounded-lg capitalize">
              {button[1].title}
            </button>
          )} */}

        </div>
      </div >
    </header >
  );
};

export default Header;
