'use client'
import Link from "next/link";
import { useMode } from "@/context/mode";

const EducationSection = () => {
  
  const { darkMode } = useMode(); 

  return (
    <section id="education" className={` md:pl-60 h-screen md:pt-32 scrollspy ${darkMode ? 'bg-black text-white' : ' text-gray-800'}`}>
       <h3 className={`flex justify-center pb-8 text-2xl text-semibold md:text-5xl font-semibold ${darkMode ? 'text-teal-500 brightness-150' :''} ${ darkMode ? '' : ''}`}>Experience & Education</h3>
      <div className="container">
        <div className=" text-center pb-5">
        
          <ExperienceItem
            name="Calanjiyam Consultancies & Technologies"
            link = "#certificate"
            resume = 'My Resume'
            location="Tamil Nadu, India"
            Position="WordPress Developer Intern"
            Time =  "Sept 2023 - Nov 2023"
            darkMode={darkMode}
            />
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <EducationItem
            name="INSTITUTE OF ENGINEERING AND SCIENCE, IPS ACADEMY INDORE"
            link = "https://ies.ipsacademy.org/"
            location="Indore, India"
            degree="Bachelor of Technology in Computer Science & Specialisation in Blockchain, Cybersecurity and IOT"
            graduationYear="2022 - 2026"
            darkMode={darkMode}
          />
          {/* Institute of Engineering and Science */}

          {/* Dalauda Public School */}
          <EducationItem
            name="ST.Thomas.Ser.Sec.School "
            link = "https://www.stthomasschool.co.in/"
            location="Mandsaur, India"
            degree="High School and Higher Secondary School"
            grade="A+"
            graduationYear="2022"
            darkMode={darkMode}
          />
        </div>
      </div> 
    </section>
  );
};

const EducationItem = ({ name, link, location, degree, graduationYear, grade, darkMode }) => {
  return (
    <div className={` py-10 px-16 ${darkMode ? 'bg-black' : ' bg-gray-200'} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="card-content">
        <p>
          <span className={`card-title ${darkMode ? 'teal-text' : 'text-teal'} ${darkMode ? 'hoverline' : ''}`}>
            <a href={link} target="_blank" className={darkMode ? 'hoverline' : ''}><strong>
              {name}

            </strong>
              </a>
          </span>
        </p>
        <p className="brown-text">{location}</p>
        <p>
          <b>Degree: </b>{degree}
          <br />
          {grade && <><b>Grade: </b>{grade}<br /></>}
          <b>Graduation year: </b>{graduationYear}
        </p>
      </div>
    </div>
  );
};
const ExperienceItem = ({ name, link,resume ,location, Position, Time, darkMode }) => {
  return (
    <div className={` py-10 px-8 card ${darkMode ? 'bg-black' : ' bg-gray-200'} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="card-content">
        <p>
          <span className={`card-title ${darkMode ? 'teal-text' : 'text-teal'} ${darkMode ? 'hoverline' : ''}`}>
            <a href={link}  className={darkMode ? 'hoverline' : ''}><strong>
            
           
            
          
    
              {name}

            </strong>
              </a>
          </span>
        </p>
        <p className="brown-text">{location}</p>
        <p>
          <b>Position: </b>{Position}
          <br />
          <b>time :  </b>{Time}
        </p>
      </div>
      <strong>
        <Link href={'https://drive.google.com/file/d/1E66NwNM1j06NIpWiNl1OkBvfY_hVD0-t/view?usp=sharing' } target='_blank' className={`block py-2 px-4 text-${darkMode ? 'white' : 'gray-300'} `} >{resume} </Link>
        
        </strong>
    </div>

    
  );
};

export default EducationSection;
