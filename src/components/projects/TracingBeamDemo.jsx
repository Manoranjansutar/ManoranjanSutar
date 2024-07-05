"use client";
import React, { useState } from "react";
import { TracingBeam } from "../ui/tracing-beam";
import grilli from './../../assets/grilli-full-page.png';
import shopify from './../../assets/shopify-full-page.png';
import react from './../../assets/react.svg';
import node from './../../assets/nodejs-icon.svg';
import bootstrap from './../../assets/bootstrap.svg';
import express from './../../assets/express-js.png';
import useContext from './../../assets/usecontext.png';
import mongodb from './../../assets/mongoDB.svg';
import stripe from './../../assets/strapi.svg';
import php from './../../assets/php.svg';
import jwt from './../../assets/jwt.png';
import axios from './../../assets/axios.png';
import portfolio from './../../assets/portfolio-full-page.png';
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { Link } from "react-scroll";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ImArrowRight } from "react-icons/im";
// import grilli from './../../assets/grilli_gif.gif';




export function TracingBeamDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  const techStack1 = [
    {
      id: 1,
      name: "React",
      image:react,
    },
    {
      id: 2,
      name: "Bootstrap",
      image:bootstrap,
    },
    {
      id: 3,
      name: "NodeJs",
      image:node,
    },
    {
      id: 4,
      name: "ExpreeJs",
      image:express,
    },
    {
      id: 5,
      name: "MongoDB",
      image:mongodb,
    },
    {
      id: 6,
      name: "Stripe",
      image:stripe,
    },
    {
      id: 7,
      name: "JWT",
      image:jwt,
    },
    {
      id: 8,
      name: "Axios",
      image:axios,
    },
  ];
  const techStack2 = [
    {
      id: 1,
      name: "React",
      image:react,
    },
    {
      id: 2,
      name: "Bootstrap",
      image:bootstrap,
    },
    {
      id: 3,
      name: "PHP",
      image:php,
    },
    {
      id: 4,
      name: "useContext",
      image:useContext,
    }
  ];
  return (
    <TracingBeam className="px-6">
      <div className="relative max-w-2xl pt-4 mx-auto antialiased">
        <div className="flex gap-3 lg:gap-10 md:gap-6">
          <div className="text-5xl text-white lg:text-8xl ultra-regular logo md:text-6xl">1.</div>
          <div className="project">
            <p className="mb-4 text-3xl text-white space-mono-regular logo">&lt; Grilli Restaurant/ &gt; </p>
            <div className="project-img">
             <img src={grilli} alt="" className="hover:scale-150" />
            </div>
            <div className="text-sm prose-sm prose text-white space-mono-regular dark:prose-invert">
                <div className="flex justify-between gap-0 align-middle">
                  <p className="flex text-xl">Tech Stack - <AnimatedTooltipPreview techStack={techStack1}/></p>
                </div>
               <p className="text-justify" >Full-stack restaurant website uses React.js with Bootstrap for a responsive frontend, built using Vite for optimized performance. The backend is powered by Node.js and Express.js, with MongoDB as the database. JWT handles user authentication, while Stripe processes payments securely. Axios facilitates smooth communication between frontend and backend. This tech stack enables the development of a fast, secure, and feature-rich online food ordering platform, supporting key functionalities like menu browsing, order placement, user accounts, and payment processing.</p>
               <div className="flex justify-center gap-2 py-6 font-semibold align-middle">
                <a href="https://grill-v1-frontend.vercel.app/"><button className="bg-[rgb(9,244,244,1)] text-black px-4 py-2 rounded hover:bg-[rgb(9,244,220,5)]">Live Demo</button></a>
                <a href="https://github.com/Manoranjansutar/GRILL-V1-FRONTEND" target="_self" rel="noopener noreferrer">
                  <button className="px-4 py-2 text-black bg-[rgb(9,244,244,1)] rounded" >GitHub</button>
                </a>
                <button className="bg-[rgb(9,244,244,1)] text-black px-4 py-2 rounded hover:bg-[rgb(9,244,220,5)] text-xs" onClick={openModal}>More Details</button>
                {isOpen && (
        <div className="fixed inset-0 w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50" id="my-modal">
          <div className="relative p-5 mx-auto bg-black rounded-md shadow-lg text-whiteborder top-20 " style={{width:"500px"}}>
            <div className="mt-3">
              <h3 className="text-2xl font-bold leading-6 text-center text-gray-900 underline logo">&lt; Grilli Restaurant/ &gt; </h3>
              <div className="py-3 mt-2 px-7">
                
                <p className="flex justify-center text-sm text-gray-500 align-middle"> <ImArrowRight className="text-4xl" style={{color:"red"}} />
                Tech Stack - Reactjs, Bootstrap , Nodejs ,Expressjs , MongoDB , JWT , Stripe , Vite , Axios
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={closeModal}
                  className="w-full px-4 py-2 text-base font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
               </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 lg:gap-10 md:gap-6">
          <div className="text-5xl text-white lg:text-8xl ultra-regular logo md:text-6xl">2.</div>
          <div className="project">
            <p className="mb-4 text-3xl text-white space-mono-regular logo">&lt; Shopify Ecommerce/ &gt;</p>
            <div className="project-img">
             <img src={shopify} alt="" className="hover:scale-150"/>
            </div>
            <div className="text-sm prose-sm prose text-white dark:prose-invert space-mono-regular">
              <div className="flex justify-between gap-0 pt-5 align-middle">
                  <p className="flex text-xl">Tech Stack - <AnimatedTooltipPreview techStack={techStack2}/></p>
              </div>
               <p className="text-justify" >E-commerce website combines a modern frontend with a robust backend. React provides a dynamic user interface, enhanced by Bootstrap for responsive design and pre-built components. Vite serves as the build tool, offering fast development and optimized production builds. The backend is powered by PHP, handling server-side logic, database operations, and API endpoints. This tech stack enables the creation of a feature-rich online store with product catalogs, shopping carts, user accounts, and secure checkout processes.</p>
               <div className="flex justify-center gap-2 py-6 font-semibold align-middle">
               <a href="https://shopify-ecommerce-lime.vercel.app/"> <button className="bg-[rgb(9,244,244,1)] text-black px-4 py-2 rounded hover:bg-[rgb(9,244,220,5)]">Live Demo</button></a>
                <a href="https://github.com/Manoranjansutar/Shopify-ecommerce"><button className="bg-[rgb(9,244,244,1)] text-black px-4 py-2 rounded hover:bg-[rgb(9,244,220,5)]">Github</button></a>
                <button className="bg-[rgb(9,244,244,1)] text-black px-4 py-2 rounded hover:bg-[rgb(9,244,220,5)]" onClick={openModal}>More Details</button>
               </div>    
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 lg:gap-10 md:gap-6">
          <div className="text-5xl text-white lg:text-8xl ultra-regular logo md:text-6xl">3.</div>
          <div>
            <p className="mb-4 text-3xl text-white space-mono-regular logo">&lt; Portfolio/ &gt;</p>
            <div className="project-img"><img src={portfolio} alt="" className="hover:scale-150"/></div>
            <div className="text-sm prose-sm prose text-white dark:prose-invert space-mono-regular">
            <div className="flex justify-between gap-0 pt-5 align-middle">
                  <p className="flex text-xl">Tech Stack - <AnimatedTooltipPreview techStack={techStack2}/></p>
              </div>
                <p className="text-justify">Innovative full-stack developer specializing in modern web technologies.Crafting responsive, high-performance apps with React and Vite.Leveraging Tailwind CSS for sleek, efficient styling solutions.Enhancing user experiences with Aceternity UI's cutting-edge components.</p> 
                <div className="flex justify-center gap-4 pt-5 font-bold align-middle">
                  <button className="px-4 py-2 text-black bg-[rgb(9,244,244,1)] rounded">Github</button>
                  <button className="px-4 py-2 text-black bg-[rgb(9,244,244,1)] rounded">More Details</button>
                </div>   
            </div>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}


