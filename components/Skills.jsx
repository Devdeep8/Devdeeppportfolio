'use client'

import Image from 'next/image';
import { useMode } from '@/context/mode';


const SkillsSection = (  ) => {
 
  const { darkMode } = useMode(); 

    return (
      <>
    <section id="skills" className={`  md:pt-32 md:pl-44  section scrollspy ${ darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
      <h3 className={`flex justify-center pb-8 text-2xl text-semibold md:text-7xl font-semibold ${darkMode ? 'text-teal-500 brightness-150' :''} ${ darkMode ? '' : ''}`}>Skills</h3>
      
        
      <div className="container grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        {/* Languages and Databases */} 
        <div className={` pt-8 md:pl-9 ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <div className="card-content">
            <h4 className={` flex justify-center pb-8 text-2xl text-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Languages</h4>
            <div className="flex flex-wrap gap-5 md:gap-0 justify-evenly">
              <SkillItem src="/js.png" alt="JavaScript" text="JavaScript" />
              <SkillItem src="/python-logo-1-300x300.jpg" alt="Python" text="Python" />
              <SkillItem src="/html5-300x300.jpg" alt="HTML5" text="HTML5" />
              <SkillItem src="/css3-300x300.jpg" alt="CSS3" text="CSS3" />
              <SkillItem src="/clanguage.jpg" alt="C language" text="C language" /> 
            </div>
          </div>
        </div>
      </div>
      <div className={` pt-24 ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="">
            <h4 className={`flex justify-center pb-8 text-2xl text-semibold  ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Frameworks</h4>
            <div className="flex flex-wrap justify-evenly gap-5">
              <SkillItem src="/express-js.png" alt="React" text="React" />
              <SkillItem src="/next-js_1.png" alt="Nextjs" text="Nextjs" />
              <SkillItem src="/bootstrap.png" alt="Bootstrap" text="Bootstrap" />
              <SkillItem src="/talwind.jpg" alt="Tailwind" text="Tailwind" />
            </div>
          </div>
        </div>

         {/* Databases */}
         <div className={` pt-24 card ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="">
            <h4 className={`flex justify-center pb-8 text-2xl text-semibold  ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Databases</h4>
            <div className="flex flex-wrap justify-evenly">
              <SkillItem src="/mysql-logo-1-300x300.jpg" alt="MySQL" text="MySQL" />
              <SkillItem src="/mongodb.png" alt="MongoDB" text="MongoDB" />
            </div>
          </div>
        </div>
        
         <div className={` pt-24 card ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="">
            <h4 className={`flex justify-center pb-8 text-2xl text-semibold  ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Others</h4>
            <div className="flex flex-wrap justify-evenly gap-5">
              <SkillItem src="/node-js-logo-png.png" alt="Nodejs" text="Nodejs" />
              <SkillItem src="/git.png" alt="Git" text="Git" />
              <SkillItem src="/wordpress.png" alt="WordPress" text="WordPress" />
              <SkillItem src="/GitHub-PNG.png" alt="Github" text="GitHub" />
            </div>
          </div>
        </div>
        
      
      </section>
      <section id="certificate" className={`  md:pl-40 md:pt-28 pt-20 md:pb-52 pb-20 scrollspy ${ darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
        <h3 className={`flex justify-center pb-8 text-2xl text-semibold md:text-7xl font-semibold ${darkMode ? 'text-teal-500 brightness-150' :''} ${ darkMode ? '' : ''}`}>Certificate</h3>
      <div className="container grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        {/* Languages and Databases */} 
        <div className={` pt-8  ${darkMode ? 'bg-black' : 'bg-white'} ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <div className="card-content">
            <div className="flex flex-wrap justify-evenly">
            <CertificateItem src="/Screenshot 2024-02-10 124859.png" text="First Internship Certifigate" />
            </div>
          </div>
        </div>
      </div>
      <div className={` md:ml-11 md:pl-20 md:py-10 flex justify-evenly ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>

            <CertificateItem src="/Screenshot 2023-10-14 172811.png" text="Introduction of JavaScript by LinkedIn" />
            <CertificateItem src="/Screenshot 2023-10-16 191159.png" text="DeveloperTools by LinkedIn" />
            <CertificateItem src="/Screenshot 2023-10-27 083902.png" text="GitHub  by LinkedIn" />
      </div>
      </section>
      </>
  );
};  
const CertificateItem = ({ src, text }) => {


    
    return (
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="card">
          <div className="px-3" >
            <Image src={src} alt={text} layout="responsive" width={600} height={400}  className='  '/>
          </div>
          <div className="pl-5 mt-3">
            <span className="card-title teal-text">{text}</span>
          </div>
        </div>
      </div>
    );
  };

const SkillItem = ({ src, alt, text }) => {
    return (
      <div className=" items-center px-10">
        <div className="relative w-20 h-20 md:w-24 md:h-30  ">
          <Image src={src} alt={alt} layout="fill" objectFit="contain" className="rounded cursor-pointer hover:scale-125 transition ease-in-out bg-white" />
        </div>
        <p className=" text-sm mt-5">{text}</p>
      </div>
    );
  };
  

export default SkillsSection;
