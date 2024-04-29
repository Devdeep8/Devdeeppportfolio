"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMode } from "@/context/mode";

const Projects = ({}) => {
  const { darkMode } = useMode();
  return (
    <section
      id="projects"
      className={`py-10 md:pl-10 scrollspy ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <h3
        className={`text-3xl md:text-5xl pb-4 flex items-center justify-center font-semibold ${
          darkMode ? "text-teal-500" : "text-teal-500"
        } ${darkMode ? "brightness-150" : ""}`}
      >
        Projects
      </h3>
      <div className=" md:ml-60 md:mr-2  grid grid-cols-1 md:grid-cols-3 gap-7">
        <ProjectLink
          href={"https://machine-six.vercel.app/"}
          alt={"Stock Management App"}
          src={"/project-music-player.png"}
          text={"Stock Management App"}
          darkMode={darkMode}
        />

        <ProjectLink
          href={"https://thalaforreason-sandy.vercel.app/"}
          alt={"Thala for Reason"}
          src={"/project-quizup-logo-1.png"}
          text={"Thala for Reason"}
          darkMode={darkMode}
        />

        <ProjectLink
          href={"https://devdeep8.github.io/memegenerator/"}
          alt={"Memegenerator"}
          src={"/project-library-logo.png"}
          text={"Memegenerator"}
          darkMode={darkMode}
        />

        <ProjectLink
          href={"https://todos-devdeep8.vercel.app/"}
          alt={"Todo List"}
          src={"/project-ai-1.jpg"}
          text={"Todo List"}
          darkMode={darkMode}
        />

        <ProjectLink
          href={"https://passwordchange.vercel.app/"}
          alt={"Password Generator App"}
          src={"/project-aim_bert-bias.png"}
          text={"Password Generator"}
          darkMode={darkMode}
        />

        <ProjectLink
          href={"https://currencyconertor.vercel.app/"}
          alt={"Currency Converter"}
          src={"/project-ml-7.jpg"}
          text={"Currency Converter"}
          darkMode={darkMode}
        />
      </div>
    </section>
  );
};

const ProjectLink = ({ href, alt, src, text, darkMode }) => {
  return (
    <Link href={href} target="_blank" className="group">
        <div className="relative my-4 cursor-pointer transition duration-150 ease-in-out transform hover:scale-110">
          <div className="relative rounded-lg overflow-hidden hover:shadow-2xl transition-all">
            <Image
              src={src}
              alt={alt}
              layout="responsive"
              width={330}
              height={300}
            />
          </div>
          <div className="text-center md:opacity-0 md:group-hover:opacity-100 transition-opacity">
            <span className={`text-lg font-semibold text-center brightness-150 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent' : ''} md:bg-opacity-0 md:hover:bg-opacity-100 rounded-full px-3 py-1 transition duration-300`}>
              {text}
            </span>
          </div>
        </div>
    </Link>
  );
};

export default Projects;
