import React from "react";
import codingImage from '/assets/coding3.jpg'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-gray-900 via-teal-600 to-gray-800
 dark:bg-gray-800 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-16 relative z-20">
        {/* Text Section */}
        <div className="w-full lg:w-2/5 space-y-6">
          <div className="w-20 h-2 bg-white dark:bg-white" />
          <h1 className="text-6xl sm:text-8xl font-black uppercase font-bebas-neue leading-none text-white  dark:text-white">
            xdCoder
            <br />
            <span className="text-xl sm:text-3xl">I build things for the web.</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-200 dark:text-white">
            Hi, I'm <span className="font-bold">Aditya Sharma</span> 👋  <br/>
Aspiring MERN Stack Developer | Computer Science Undergrad <br/>

I build responsive, modern full-stack web apps using MongoDB, Express, React, and Node.js.  
On a journey to craft impactful tech solutions — one project at a time.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-md uppercase text-white bg-teal-500 hover:bg-teal-400 text-white
 hover:bg-pink-400 transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-4 py-2 rounded-lg text-md uppercase border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-3/5 hidden sm:flex justify-center">
          <img
            src={codingImage}
            alt="Hero illustration"
            className="max-w-xs md:max-w-sm rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
