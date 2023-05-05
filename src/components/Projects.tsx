"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    title: "ManageWise",
    summary:
      "A corprate management app made to simplify the visualization of company data in a graphical way",
    image: "/managewise.png",
    tech: "Firebase, ASP.Net, React, Tailwind CSS, Azure, SQL, OpenAI",
    link: "https://managewisefrontend.azurewebsites.net/",
  },
  {
    title: "Soitta",
    summary: "E Commerce website that sells software developed in C++",
    image: "/Soitta.png",
    tech: "C++",
    link: "https://www.soitta.com/",
  },
  {
    title: "AlgoVerb",
    summary:
      "An algorithmic room simulator for simulating acoustic spaces digitally",
    image: "/algoverb.png",
    tech: "C++",
    link: "https://github.com/kimi12311/AlgorithmicReverbTest",
  },
  {
    title: "2D Platformer",
    summary: "A simple but artistic 2D platformer made with Unity",
    image: "/game.gif",
    tech: "C#, Unity",
    link: "null",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="">
      <h1 className="text-center font-semibold text-4xl mb-8">Projects</h1>
      <hr className="  border-0 bg-blue-300 rounded w-8 h-1 mx-auto my-2 mb-8"></hr>
      <div className="flex flex-col space-y-28">
        {projects.map((item, idx) => {
          return (
            <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubic animation-delay-2 md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  {item.link === "null" ? (
                    <Image
                      src={item.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-80"
                    />
                  ) : (
                    <Link href={item.link} target="_blank">
                      <Image
                        src={item.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-80"
                      />
                    </Link>
                  )}
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{item.title}</h1>
                  <p className="text-xl leading-7 mb-4">{item.summary}</p>
                  <p className="text-lg font-light leading-7 mb-4">
                    {item.tech}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    {item.link === "null" ? null : (
                      <Link href={item.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:translate-y-1 transition-all cursor-pointer duration-150 ease-in-out"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
