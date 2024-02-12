// IntroSection.js
'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import Typed from 'typed.js';
import { useMode } from '@/context/mode';

const IntroSection = () => {
  

  const { darkMode ,toggleDarkMode } = useMode(); 


  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['Web Developer', 'DevOps Engineer', 'Full-Stack-Developer'],
      loop: true, 
      typeSpeed: 80,
      backSpeed: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    < > <div className={`flex fixed top-0 right-0  flex-col md:flex-row justify-end items-center bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>

    <input
  className={`mr-2 mt-[0.3rem]  h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}
  type="checkbox"
  role="switch"
  id="flexSwitchCheckDefault"
  onClick={toggleDarkMode} />
<label
  className="md:inline-block pl-[0.15rem] hover:cursor-pointer px-5 py-5 hidden "
  htmlFor="flexSwitchCheckDefault">
     {darkMode ? "Light Mode" :"Dark Mode"}
  </label>
  </div>

    <section id="Home" className={` h-full scrollspy md:pl-80 pt-20 md:py-56 bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>
     
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-3/4">
            <div className="text-center md:text-left">
              <div className="caption">
                <h2 className="text-2xl md:text-6xl font-bold">Hi, I m Devdeep Patidar.</h2>
                <h5 className="text-3xl my-4">
                  A <span className={`typing text-teal-600 text-2xl md:text-5xl font-semibold ${darkMode ? "brightness-200" : ""}`}></span>
                </h5>
                <p className={`text-xl text-${darkMode ? 'white' : 'black'}`}>
                  Self-driven, quick starter, passionate programmer with a
                  curious mind who enjoys solving complex and challenging
                  real-world problems.
                </p>
              </div>
              <div className="mt-4 flex items-center">
                <Link href="http://linkedin.com/in/devdeep-patidar"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 text-gray-400 hover:text-gray-600 hover:bg-blue-500 transition duration-300 mr-2">
                  <FiLinkedin size={24} />
                </Link>
                <Link href="https://github.com/Devdeep8/"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 text-gray-400 hover:text-gray-600 hover:bg-black transition duration-300">
                  <FiGithub size={24} />
                </Link>
              </div>
              <div className="mt-4">
                <Link href="#about"
                  className={`mx-2 inline-block py-3 px-8 text-${darkMode ? 'white' : 'black'} border-2 ${darkMode ? " hover:border-white" : ""} border-black font-semibold text-sm rounded-full hover:bg-${darkMode ? 'white ' : 'black'} hover:text-teal-500 hover:brightness-125 transition duration-300`}>
                  Read More
                </Link>
                <Link href="http://linkedin.com/in/devdeep-patidar"
                  className={`inline-block py-3 px-8 text-${darkMode ? 'white' : 'black'} border-2 border-black font-semibold text-sm rounded-full hover:bg-${darkMode ? 'white' : 'black'} ${darkMode ? " hover:border-white" : ""} hover:text-teal-500 hover:brightness-125 transition duration-300`}>
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default IntroSection;
