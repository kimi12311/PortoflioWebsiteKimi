/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "C#" },
  { skill: "C++" },
  { skill: "Typescript" },
  { skill: "Javascript" },
  { skill: "React" },
  { skill: "NextJs" },
  { skill: "ASP.Net" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Github Actions" },
  { skill: "Azure" },
  { skill: "SQL" },
  { skill: "NodeJS" },
  { skill: "REST APIs" },
  { skill: "Blazor" },
  { skill: "Test Driven Development" },
  {skill: ".NET MAUI"},
  { skill: "Agile Work Methods" },
  { skill: "Docker" },
  { skill: "Webpack" },
  { skill: "Redux" },
  { skill: "xUnit | nUnit" },
];

const About = () => {
  return (
    <section id="about" className="">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-semibold text-4xl mb-8">About</h1>
        <hr className="  border-0 bg-blue-300 rounded w-8 h-1 mx-auto my-2 mb-8"></hr>
        <div className="flex flex-col md:flex-row space-y-16 items-stretch align-top md:text-left md:p-4 md:space-y-0 md:space-x-10 justify-center">
          <div className="md:w-1/2">
            <h1 className="font-bold text-2xl mb-8">About Me</h1>
            <br />
            <p>
              My name is Kimi and I am described as a{" "}
              <span className="font-bold text-yellow-300">{"determined"}</span>,
              <span className="font-bold text-yellow-300">
                {" self-motivated"}
              </span>
              , and
              <span className="font-bold text-yellow-300">
                {" ambitious"}
              </span>{" "}
              developer by my peers.
            </p>
            <br />
            <p>
              I have several hobbies that keep me busy while I'm not
              programming, these include: music production and noodling with synthesizers.
              I'm always looking for new passions and hobbies to explore and learn about.
              I completed my education in Dubai and attended university where I specialized in Engineering and Physics, then promptly moved back to Sweden in 2021,
            </p>
            <br />
            <p>
              A great piece of software is never finished, it is only improved upon continually. Coding 
              is an art form and a science all at once. 
            </p>
            <br />
            <p>
              I strive to take any project I work on to new heights, striving to create the most useful and well executed solutions I can. 
            </p>
            <div className="flex flex-row space-x-8">
              <Link href="https://github.com/kimi12311" target="_blank">
                <BsGithub size={30} className="mt-8" />
              </Link>
              <Link href="https://www.linkedin.com/in/kimi-andersson-bb1118263/" target="_blank">
                <BsLinkedin size={30} className="mt-8" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="font-bold text-2xl mb-8">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, id) => {
                return (
                  <p
                    key={id}
                    className="bg-slate-900 hover:bg-slate-700 hover:rounded transition-all duration-150 hover:scale-105 px-4 py-2 mr-2 mt-2 text-white font-semibold "
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
