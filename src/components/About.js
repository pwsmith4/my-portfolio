
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Parker.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
      <div>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          About Me
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I'm a software engineer based in Folsom, CA specializing in building
          and designing exceptional websites, applications, and
          everything in between.
        </p>
        <a href="https://github.com/pwsmith4/resume/blob/1e0c8a24a87bc030457768326a5ce4719fcc3d44/Smith%20Parker%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      View my resume
    </a>
    <a href="https://www.linkedin.com/in/parkerwsmith/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      Visit my LinkedIn
    </a>
      </div>
    </section>
  );
}