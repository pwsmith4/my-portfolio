
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p>
            Here are a few of the projects I've worked on. Click on the images to learn more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"> {/* Use CSS Grid here */}
                {projects.map((project, idx) => (
                  <div className={idx === 0 ? "sm:col-span-3 p-4 relative h-auto" : "p-4 h-auto relative"}>
                  <a href={project.link} key={project.image}>
              <div className="relative h-full">
                <h1 className={idx === 0 ? "sm:text-2xl text-3xl font-small title-font mb-1 text-white mb-1" : "sm:text-1xl text-2.5xl font-small title-font mb-1 text-white mb-1"}>
                  {project.mainTitle}
                </h1>
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center object-left mb-2" // Add object-right here
                    src={project.image}
                  />
                  <div className="px-8 py-10 absolute inset-0 z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}