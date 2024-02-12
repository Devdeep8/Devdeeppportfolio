// About.js

import React from 'react';
import { useMode } from '@/context/mode';

 
const About = ({  }) => {
  const { darkMode } = useMode(); 
  return (
    <section  
      id="about"
      className={ `scrollspy px-5 pt-32  md:pl-60 md:ml-20 md:pb-1 pb-8 ${
        darkMode ? 'bg-black text-white' : ' text-gray-800'
      }`}
    >
      <h3 className={` flex justify-center text-teal-500 md:text-8xl text-4xl p-5 font-bold ${darkMode ? " brightness-150" : ""}`}>About</h3>
      <div className="container flow-text pl-2 pr-2">
        <blockquote>
          <h2 className=' font-medium text-2xl pb-4'>A Software Developer with a passion for Backend Development.</h2>
        </blockquote> 
        <p>
          I am a Computer Science 1st-year Student at IPS Academy Indore. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do.
        </p>
        <p>
          I have worked on technologies like  NextJS, React, Veu, HTML5, CSS, JavaScript currently. I have created many Projects which helped me strengthen my experience in Python, Flask, and Django.
        </p>
        <p>
          I am passionate about developing complex applications that solve real-world problems impacting millions of users.
        </p>
        <ul className=' p-1'>
          <li className=' p-1'><b>Languages:</b> JavaScript, HTML/CSS </li>
          <li className=' p-1'><b>Databases:</b> MySQL, MongoDB , Postgrsql</li>
          <li className=' p-1'><b>Frameworks:</b> Nextjs, React, Bootstrap, Tailwind </li>
          <li className=' p-1'><b>Tools & Technologies:</b> Git, linux</li>
        </ul>
        <p className=' font-medium'>
          Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences, and personal growth.
        </p>
      </div>
    </section>
  );
};

export default About;
