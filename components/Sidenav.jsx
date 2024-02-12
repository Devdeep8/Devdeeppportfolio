'use client'; 

import React, { useState, useEffect } from 'react';

import Image from 'next/image';





import { useMode } from '@/context/mode';


const Sidebar = ({ profilePicUrl  }) => {
  ;
  const [activeLink, setActiveLink] = useState(true);
  const { darkMode , toggleDarkMode  } = useMode(); 

  

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



  return (
    <>
    
      <div className={`px-4 py-2 rounded-md md:hidden flex justify-end`}>
      {/* <ToggleSwitch toggleDarkMode={toggleDarkMode} darkMode={darkMode}/> */}
      </div>
    <div className={` hidden md:block`}>

    <nav className={` fixed top-0 ${darkMode ? ' bg-teal-700' : 'bg-gray-500'} w-64 min-h-screen py-4 px-10`}>
      <div className={`flex items-center justify-center`}>
        <div className=" mr-2">
          <Image  src={profilePicUrl} className="rounded" alt="avatar" width={200} height={200} priority />
        </div>
        
      </div>
      
       
      <ul className="mt-4">
        <li>
          
            <a href='#Home' className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 ${activeLink === 'Home' ? 'bg-gray-700' : ''}`}>Home</a>
         
        </li>
        <li>
          
            <a href='#about' className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 ${activeLink === 'about' ? 'bg-gray-700' : ''}`}>About</a>
         
        </li>
        <li>
          
            <a href='#projects' className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 ${activeLink === 'projects' ? 'bg-gray-700' : ''}`}>Projects</a>
          
        </li>
        <li>
          
            <a href='#skills' className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 ${activeLink === 'skills' ? 'bg-gray-700' : ''}`}>Skills</a>
          
        </li>
        <li>
          
            <a href='#certificate' className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 ${activeLink === 'certificate' ? 'bg-gray-700' : ''}`}>certificate</a>
          
        </li>
        <li>
          
            <a href='#education' className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 ${activeLink === 'education' ? 'bg-gray-700' : ''}`}>Education</a>
          
        </li>
        <li>
         
            <a className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 ${activeLink === 'contact' ? 'bg-gray-700' : ''}`}>Contact</a>
          
        </li>
        <li>
          
            <a href='https://drive.google.com/file/d/1E66NwNM1j06NIpWiNl1OkBvfY_hVD0-t/view?usp=sharing' target='_blank' className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} hover:bg-gray-700 ${activeLink === 'resume' ? 'bg-gray-700' : ''}`}>Resume</a>
          
        </li>
      </ul>
      
      
    </nav>
          </div></>
  );
};

export default Sidebar;
