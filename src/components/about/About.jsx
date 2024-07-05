import React from 'react'
// import about from './../../assets/home2.svg';
import about from './../../assets/programmer.png';
import CoderProfile from '../coderProfile/coderProfile';
import './About.css';

const About = () => {
  return (
    <section id='about' className='text-white bg-[#0f172a] pt-10'>
        <div className='flex items-center justify-center'> <h1 className='inline-block text-4xl tracking-widest text-center text-white ultra-regular lg-text-6xl md:text-5xl' style={{borderBottom:"8px solid rgb(9,244,244,1)"}}>About Me</h1></div>
        
       <div className='flex flex-col items-center justify-center md:flex-col lg:flex-row'>
        <div className='w-full px-20 md:max-w-lg lg:max-w-3xl'>
            <img src={about} alt="" className='mt-4'/>
        </div>
        <div className='max-w-full coder md:w-1/2'>
            <div className='flex gap-3 coder-circle forest-gradient lg:px-5'>
              <div className='bg-black circle'></div>  
              <div className='bg-green-600 circle'></div>  
              <div className='bg-red-700 circle'></div>  
            </div>
            <div className='mx-6 mt-4 mb-4'><CoderProfile/></div>
        </div>
       </div>
    </section>
  )
}

export default About
