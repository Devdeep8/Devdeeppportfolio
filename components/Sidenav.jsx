'use client'; 

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';





import { useMode } from '@/context/mode';


const Sidebar = ({ profilePicUrl  }) => {
  ;
  const [activeLink, setActiveLink] = useState(true);
  const { darkMode , toggleDarkMode  } = useMode(); 
  const [isOpen, setIsOpen] = useState(false);
  
  // console.log(darkMode);

  useEffect(() => { 
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scrollspy');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    
    <div className={`md:hidden flex bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>
      <div className={`px-1 py-2 top-0 left-0 fixed`}>
        <button onClick={toggleNavbar}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'  
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
        <div className={`px-1 py-2 top-0 right-0 fixed`}>
          <input
            className={`mr-2 mt-[0.3rem]  h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggleDarkMode}
          />
          <label
            className="md:inline-block pl-[0.15rem] hover:cursor-pointer px-5 py-5 hidden"
            htmlFor="flexSwitchCheckDefault"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </label>
        </div>
      </div>
     {/* mobile Navbar */}
      <nav
        className={`${
          isOpen ? 'transition ease-in-out transform translate-x-0' : 'transition ease-in-out transform -translate-x-full'
        } ${darkMode ? 'bg-gradient-to-r from-pink-500 brightness-110 to-purple-500' : 'bg-gradient-to-b from-gray-200 to-gray-300'} px-5 py-5 z-10 fixed top-8 left-0 w-full`}
      >
        <div className="  mt-4 flex justify-center">
      <Link href="http://linkedin.com/in/devdeep-patidar" target="_blank">
        <div className='mb-4  card'>

          {/* Image with border and hover effect */}
          <Image
            src={profilePicUrl}
            alt="Devdeep"
            width={100}
            height={100}
            layout="responsive"
            className='rounded'
            
            />
          {/* Animated gradient overlay */}
         
            </div>
       
      </Link>
    </div>
        

        <ul className="mt-4 text-center">
        <li>
          
            <a href='#Home' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'Home' ? 'bg-gray-700 border-white border-4 text-white scale-110' : ''}`}>Home</a>
         
        </li>
        <li>
          
            <a href='#about' className={`block py-2 text-xl   font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'about' ? 'border-white border-4  bg-gray-700 scale-110 text-white' : ''}`}>About</a>
         
        </li>
        <li>
          
            <a href='#projects' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'projects' ? 'bg-gray-700 border-white border-4  scale-110 text-white' : ''}`}>Projects</a>
          
        </li>
        <li>
          
            <a href='#skills' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'skills' ? 'bg-gray-700 border-white border-4 scale-110 text-white' : ''}`}>Skills</a>
          
        </li>
        <li>
          
            <a href='#certificate' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'certificate' ? 'bg-gray-700 scale-110 text-white border-white border-4 ' : ''}`}>Certificate</a>
          
        </li>
        <li>
          
            <a href='#education' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'education' ? 'bg-gray-700 scale-110 text-white border-white border-4 ' : ''}`}>Education</a>
          
        </li>
        
        <li>
          
            <a href='https://drive.google.com/file/d/1E66NwNM1j06NIpWiNl1OkBvfY_hVD0-t/view?usp=sharing' target='_blank' className={`block py-2 px-4 text-xl  font-medium text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out hover:text-white ${activeLink === 'resume' ? 'bg-gray-700 text-white border-white border-4 ' : ''}`}>My Resume</a>
          
        </li>
      </ul>
      
      </nav>
    </div>
{/* // laptop nav bar */}
    <div className={` hidden  md:block`}>
    <nav className={`px-3 fixed top-0 ${darkMode ? 'bg-gradient-to-r from-pink-500 brightness-110 to-purple-500' : 'bg-gradient-to-b from-gray-200 to-gray-300'} w-64 min-h-screen text-center`}>
    <div className="  mt-4 flex justify-center">
      <Link href="http://linkedin.com/in/devdeep-patidar" target="_blank">
        
        <div className='mb-4 card '>

          {/* Image with border and hover effect */}
          <Image
            src={profilePicUrl}
            alt="Devdeep"
            width={100}
            height={100}
            layout="responsive"
            className='rounded-lg  '
            />
          {/* Animated gradient overlay */}
         
            </div>
       
      </Link>
    </div>

      
       
      <ul className="mt-4">
        <li>
          
            <a href='#Home' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'Home' ? 'bg-gray-700 border-white border-4 text-white scale-110' : ''}`}>Home</a>
         
        </li>
        <li>
          
            <a href='#about' className={`block py-2 text-xl   font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'about' ? 'border-white border-4  bg-gray-700 scale-110 text-white' : ''}`}>About</a>
         
        </li>
        <li>
          
            <a href='#projects' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'projects' ? 'bg-gray-700 border-white border-4  scale-110 text-white' : ''}`}>Projects</a>
          
        </li>
        <li>
          
            <a href='#skills' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'skills' ? 'bg-gray-700 border-white border-4 scale-110 text-white' : ''}`}>Skills</a>
          
        </li>
        <li>
          
            <a href='#certificate' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'certificate' ? 'bg-gray-700 scale-110 text-white border-white border-4 ' : ''}`}>Certificate</a>
          
        </li>
        <li>
          
            <a href='#education' className={`block py-2 text-xl  font-medium px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out ${activeLink === 'education' ? 'bg-gray-700 scale-110 text-white border-white border-4 ' : ''}`}>Education</a>
          
        </li>
        
        <li>
          
            <a href='https://drive.google.com/file/d/1E66NwNM1j06NIpWiNl1OkBvfY_hVD0-t/view?usp=sharing' target='_blank' className={`block py-2 px-4 text-xl  font-medium text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 hover:scale-110 transition ease-in-out hover:text-white ${activeLink === 'resume' ? 'bg-gray-700 text-white border-white border-4 ' : ''}`}>My Resume</a>
          
        </li>
      </ul>
      
      
    </nav>
          </div></>
  );
};

export default Sidebar;
