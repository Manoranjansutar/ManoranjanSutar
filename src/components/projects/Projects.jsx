import React from 'react'
import { TracingBeamDemo } from './TracingBeamDemo'
import './Projects.css';
import { motion, useScroll } from "framer-motion"



const Projects = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div id='project' className='pt-10 bg-[#0f172a] ' >
     <div className='flex justify-center align-middle'> <h1 className='inline-block text-4xl tracking-widest text-center text-white ultra-regular lg-text-6xl md:text-5xl' style={{borderBottom:"8px solid rgb(9,244,244,1)"}}>Projects</h1></div>
      <div className='pt-14'>
        <TracingBeamDemo />
      </div>
    </div>
  )
}

export default Projects
