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
      className={` py-28 px-10 md:pl-80  scrollspy ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`} 
    >
      <h3
        className={` md:pt-10 md:text-8xl text-3xl pb-8 flex items-center justify-center font-semibold  ${
          darkMode ? "text-teal-500" : "text-teal-500"
        } ${darkMode ? " brightness-150" : ""}`}
      >
        Projects
      </h3>
      <div className="grid grid-cols-3 gap-7">
        <Link
          target="_blank"
          href={"https://devdeep8.github.io/portfolio.first/"}
        >
          <div className={` ${darkMode ? " text-white" : "bg-white"}`}>
            <Image
              alt="music streaming app"
              src="/project-music-player.png"
              width={300}
              height={300}
              className="mb-2 border-solid border-4  border-transparent hover:scale-125	transition ease-in-out hover:border-rose-400"
              priority/>

            <span
              className={` ${
                darkMode ? " text-teal-500 brightness-150" : ""
              } hover:underline`}
            >
              First Portfolio
            </span>
            <p className={` ${darkMode ? "text-white" : ""}`}>
              My First Website .
            </p>
            <div className={`${darkMode ? " text-white" : "bg-white"}`}>
              {/* Accomplishments content */}
              sqadw
            </div>
          </div>
        </Link>
        <div>
          <Link
            target="_blank"
            href={"https://thalaforreason-sandy.vercel.app/"}
            className=" "
          >
            <div className={` ${darkMode ? " text-white" : "bg-white"}`}>
              <div className="">
                <Image
                  alt="quiz app"
                  src="/project-quizup-logo-1.png"
                  width={330}
                  height={300}
                  className=" mb-2 border-solid border-4 border-transparent hover:scale-125	 transition ease-in-out hover:border-rose-400"
                  priority
                />
              </div>
              <div className="">
                <span
                  className={` ${
                    darkMode ? "text-teal-500 brightness-150" : ""
                  } hover:underline `}
                >
                  A thala For Reason
                </span>
                <p className={`${darkMode ? "text-white" : ""}`}>
                  First React App
                </p>
              </div>
              <div
                className={`-reveal ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                {/* Accomplishments content */}
              </div>
            </div>
          </Link>
        </div>

        <Link
          target="_blank"
          href={"https://devdeep8.github.io/memegenerator/"}
        >
          <div className={` ${darkMode ? " text-white" : "bg-white"}`}>
            <div className="-image waves-effect waves-block waves-light">
              <Image
                alt="django web app"
                src="/project-library-logo.png"
                width={330}
                height={300}
                className="mb-2 border-solid border-4 border-transparent hover:scale-125	 transition ease-in-out hover:border-rose-400"
                priority/>
            </div>

            <div className="-content">
              <span
                className={` ${
                  darkMode ? "text-teal-500 brightness-150" : ""
                } hover:underline`}
              >
                Memes Genrator
              </span>
              <p className={`${darkMode ? "text-white" : ""}`}>
                To Know how API work
              </p>
            </div>
            <div
              className={`-reveal ${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
            >
              {/* Accomplishments content */}
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8 pt-10">
        <Link
          target="_blank"
          href={"https://todos-devdeep8.vercel.app/"}
        >
          <div className={` ${darkMode ? " text-white" : "bg-white"}`}>
            <div className="">
              <Image
                alt="music streaming app"
                src="/project-ai-1.jpg"
                width={330}
                height={300}
                className="mb-2 border-solid border-4 border-transparent hover:scale-125 transition ease-in-out hover:border-rose-400"
                priority/>
            </div>
            <div className="">
              <span
                className={` ${
                  darkMode ? " text-teal-500 brightness-150" : ""
                } hover:underline`}
              >
                Todo APP
              </span>
              <p className={` ${darkMode ? "text-white" : ""}`}>
                My favorite Project
              </p>
            </div>
            <div className={`${darkMode ? " text-white" : "bg-white"}`}>
              {/* Accomplishments content */}
            </div>
          </div>
        </Link>

        <Link
          target="_blank"
          href={"https://passwordchange.vercel.app/"}
          className=" "
        >
          <div className={` ${darkMode ? " text-white" : "bg-white"}`}>
            <div className="">
              <Image
                alt="quiz app"
                src="/project-aim_bert-bias.png"
                width={330}
                height={300}
                className="mb-2 border-solid border-4 border-transparent hover:scale-125 transition ease-in-out hover:border-rose-400"
                priority />
            </div>
            <div className="">
              <span
                className={` ${
                  darkMode ? "text-teal-500 brightness-150" : ""
                } hover:underline `}
              >
                Password Generator
              </span>
              <p className={`${darkMode ? "text-white" : ""}`}>
                Web App 
              </p>
            </div>
            <div
              className={`-reveal ${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
            >
              {/* Accomplishments content */}
            </div>
          </div>
        </Link>

        <Link
          target="_blank"
          href={"https://currencyconertor.vercel.app/"}
        >
          <div className={` ${darkMode ? " text-white" : "bg-white"}`}>
            <div className="-image waves-effect waves-block waves-light">
              <Image
                alt="django web app"
                src="/project-ml-7.jpg"
                width={330}
                height={300}
                className="mb-2 border-solid border-4 border-transparent hover:scale-125 transition ease-in-out hover:border-rose-400"
                priority/>
            </div>
            <div className="-content">
              <span
                className={` ${
                  darkMode ? "text-teal-500 brightness-150" : ""
                } hover:underline`}
              >
                Currency Convertor
              </span>
              <p className={`${darkMode ? "text-white" : ""}`}>
                First Freelance Work
              </p>
            </div>
            <div
              className={`-reveal ${darkMode ? " text-white" : "bg-white"}`}
            >
              {/* Accomplishments content */}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
