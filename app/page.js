'use client'

import IntroSection from "@/components/IntroSection";
import Sidenav from "@/components/Sidenav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import EducationSection from "@/components/education";
import { ModeProvider } from "@/context/mode";
import { useState } from "react";



export default function Home( ) {
const [darkMode, setDarkMode] = useState(true)

const toggleDarkMode = () => {
  setDarkMode(prevDarkMode => !prevDarkMode);
};
  return (
<>
<ModeProvider value={{darkMode , toggleDarkMode}}>

<div className=" overflow-hidden">
      <Sidenav profilePicUrl={'/dev.jpg' }  />
   
      <div className="flex-1  ">
        <IntroSection   />
        <About  />
        <Projects />
        <SkillsSection />
        <EducationSection />
      </div>
    </div>
</ModeProvider>
</>
  );
}
