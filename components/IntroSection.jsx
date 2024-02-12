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
    < >

    <section id="Home" className={` px-10 md:h-full scrollspy md:pl-80 pt-20 md:py-56 bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>
     
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
