'use client'

import Image from 'next/image';
import { useMode } from '@/context/mode';
import Link from 'next/link';

const SkillsSection = (  ) => {
 
  const { darkMode } = useMode(); 

    return (
      <>
    <section id="skills" className={`  md:pt-32 md:pl-44  section scrollspy ${ darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
      <h3 className={`flex justify-center pb-8 text-2xl text-teal-500 text-semibold md:text-7xl  font-semibold ${darkMode ? 'text-teal-500 brightness-150' :''} ${ darkMode ? '' : ''}`}>Skills</h3>
      
        
      <div className="container grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        {/* Languages and Databases */} 
        <div className={` pt-8 md:pl-9 ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <div className="">
            <h4 className={` flex justify-center pb-8 text-2xl text-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Languages</h4>
            <div className="flex flex-wrap gap-5 md:gap-0 justify-evenly">
              <SkillItem src="/js.png" alt="JavaScript" text="JavaScript" />
              <SkillItem src="/ts.png" alt="Python" text="TypeScript" />
              <SkillItem src="/html5-300x300.jpg" alt="HTML5" text="HTML5" />
              <SkillItem src="/css3-300x300.jpg" alt="CSS3" text="CSS3" />
              {/* <SkillItem src="/clanguage.jpg" alt="C language" text="C language" />  */}
            </div>
          </div>
        </div>
      </div>
      <div className={` pt-24 ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="">
            <h4 className={`flex justify-center pb-8 text-2xl text-semibold  ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Frameworks</h4>
            <div className="flex flex-wrap justify-evenly gap-5">
              <SkillItem src="/expressjs.png" alt="React" text="ExpressJs" className="bg-white rounded-full" />
              <SkillItem src="/next-js_1.png" alt="Nextjs" text="NextJs" className="bg-white rounded-full" />
              <SkillItem src="/bootstrap.png" alt="Bootstrap" text="Bootstrap" />
              <SkillItem src="/talwind.jpg" alt="Tailwind" text="Tailwind" />
            </div>
          </div>
        </div>

         {/* Databases */}
         <div className={` pt-24  ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="">
            <h4 className={`flex justify-center pb-8 text-2xl text-semibold  ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Databases</h4>
            <div className="flex flex-wrap justify-evenly">
              <SkillItem src="/mysql-logo-1-300x300.jpg" alt="MySQL" text="MySQL" />
              <SkillItem src="/mongodb.png" alt="MongoDB" text="MongoDB" />
            </div>
          </div>
        </div>
        
         <div className={` pt-24  ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="">
            <h4 className={`flex justify-center pb-8 text-2xl text-semibold  ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Others</h4>
            <div className="flex flex-wrap justify-evenly gap-5 ">
              <SkillItem src="/node-js-logo-png.png" alt="Nodejs" text="NodeJs" />
              <SkillItem src="/git.png" alt="Git" text="Git" />
              <SkillItem src="/wordpress.png" alt="WordPress" text="WordPress" />
              <SkillItem src="/GitHub-PNG.png" alt="Github" text="GitHub" className="bg-white rounded-full" />
            </div>
          </div>
        </div>
        
      
      </section>
      <section id="certificate" className={`  md:pl-40 md:pt-28 pt-20 md:pb-52 pb-20 scrollspy ${ darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
        <h3 className={`flex justify-center pb-8 text-2xl text-semibold md:text-7xl font-semibold ${darkMode ? 'text-teal-500 brightness-150' :''} ${ darkMode ? '' : ''}`}>Certificate</h3>
      <div className="container grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        {/* Languages and Databases */} 
        <div className={` pt-8  ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <div className="">
            <div className="flex flex-wrap justify-evenly">
            <CertificateItem src="/Screenshot 2024-02-10 124859.png" text="First Internship Certifigate" />
            </div>
          </div>
        </div>
      </div>
      <div className={` md:ml-11 md:pl-20 md:py-10 flex justify-evenly ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
<Link className='flex' href={"https://www.linkedin.com/in/devdeep-patidar/details/certifications/"} target='_blank'>
            <CertificateItem src="/Screenshot 2023-10-14 172811.png" text="Introduction of JavaScript by LinkedIn" />
            <CertificateItem src="/Screenshot 2023-10-16 191159.png" text="DeveloperTools by LinkedIn" />
            <CertificateItem src="/Screenshot 2023-10-27 083902.png" text="GitHub  by LinkedIn" />
</Link>
      </div>
      </section>
      </>
  );
};  
const CertificateItem = ({ src, text }) => {


    
    return (
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="">
          <div className="px-3" >
            <Image src={src} alt={text} layout="responsive" className=' md:hover:scale-125 transition ease-in-out' width={600} height={400}  priority/>
          </div>
          <div className="pl-5 mt-3">
            <span className="title teal-text">{text}</span>
          </div>
        </div>
      </div>
    );
  };

const SkillItem = ({ src, alt, text, className }) => {
  return (
    <div className={`relative group cursor-pointer transition duration-300 transform hover:scale-105`}>
      <div className="relative w-24 h-24 rounded-lg overflow-hidden shadow-lg group-hover:ring-4 group-hover:ring-teal-500 transition-all">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" className={className} />
      </div>
      <div className=" text-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className={`text-lg font-semibold text-center bg-teal-500 bg-opacity-0 hover:bg-opacity-100 rounded-full px-3 py-1 transition duration-300`}>{text}</span>
      </div>
    </div>
  );
};
  

export default SkillsSection;
