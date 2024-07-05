import React from 'react'
import Lottie from 'lottie-react';
import './Service.css';
import servicebanner from './../../assets/0274207612d515f49012c87803a9e631.gif';
import service1 from './../../assets/gif json/service1.json';
import service2 from './../../assets/gif json/service2.json';
import service3 from './../../assets/gif json/service3.json';
import service4 from './../../assets/gif json/service4.json';
import service5 from './../../assets/gif json/service5.json';
import service6 from './../../assets/gif json/service6.json';
import service7 from './../../assets/gif json/service7.json';
import service8 from './../../assets/gif json/service8.json';
import service9 from './../../assets/gif json/service9.json';
import hireme from './../../assets/gif json/hire_me.json';
import arrow from './../../assets/gif json/arrow.json';
import { useRef } from 'react';
import { useInView } from 'framer-motion';



const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className='flex flex-col bg-[#0f172a] custom-container ' id='service' style={{zIndex:"-1"}}>
      <div className='flex justify-center align-middle' > 
        <h1 className='inline-block pt-20 text-4xl tracking-widest text-center text-white ultra-regular lg-text-6xl md:text-5xl' style={{borderBottom:"8px solid rgb(9,244,244,1)"}}>Service</h1>
     </div>
     <div className='flex flex-col justify-between gap-10 mt-10 align-middle md:flex-col lg:flex-row'>
       <div className='flex flex-col justify-center order-2 gap-10 align-middle md:order-2 lg:order-1'>
         <h1 className='px-20 text-3xl leading-tight tracking-widest text-center text-white ultra-regular md:text-5xl lg:text-7xl md:leading-snug'>Bridging <span className='log1'>creativity</span> and functionality</h1>
         <p className='text-2xl text-center text-white space-mono-regular md:text-3xl lg:md:text-3xl'>"Creating seamless digital experiences that drive results."</p>
       </div>
       <img src={servicebanner} alt="" className='order-1 md:order-1 lg:order-2'/>
     </div>

     <div className='flex flex-col justify-center gap-6 px-3 pt-5 align-middle md:flex-row lg:flex-row'    > 
         <div style={{width:"350px"}}><Lottie animationData={service1} /></div>
         <div className='flex flex-col justify-center align-middle '>
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>Website Optimization</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular'   >Want to know how your website can perform even better? I offer professional website reviews to help you identify areas for improvement and optimize your site for better results</p>
         </div>
     </div>

     <div className='flex flex-col justify-center gap-6 px-3 pt-5 align-middle md:flex-row lg:flex-row'>
         <div className='flex flex-col justify-center order-2 align-middle md:order-1 lg:order-1' >
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>User-Centric Design</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular' >Your website is the digital face of your brand, and a great user experience can make all the difference. I specialize in creating user-centric designs that engage your audience and guide them towards your desired actions.</p>
         </div>
        <div style={{width:'350px'}} className="order-1 md:order-2 lg:order-2"> <Lottie animationData={service2} className='order-1 md:order-2 lg:order-2'/></div>
     </div>

     <div className='flex flex-col justify-center gap-6 px-3 pt-5 align-middle md:flex-row lg:flex-row'>
         <div style={{width:"350px"}}><Lottie animationData={service3} /></div>
         <div className='flex flex-col justify-center align-middle ' >
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>Mobile Friendly Website</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular' >Ensure your site looks great and functions smoothly on all devices. I create responsive designs that adapt seamlessly to smartphones and tablets, providing an optimal user experience regardless of screen size.</p>
         </div>
     </div>

     <div className='flex flex-col justify-center gap-6 px-3 pt-5 align-middle md:flex-row lg:flex-row'>
         <div className='flex flex-col justify-center order-2 align-middle md:order-1 lg:order-1'>
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>Goal-Oriented Strategy</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular' >Whether you're a small business or a large enterprise, I'll work with you to develop a tailored strategy that aligns with your goals and drives conversions. I'll help you take your online presence to the next level.</p>
         </div>
         <div style={{width:"350px"}} className="order-1 md:order-2 lg:order-2"><Lottie animationData={service4} /></div>
     </div>

     <div className='flex flex-col justify-center gap-6 px-3 pt-5 align-middle md:flex-row lg:flex-row'>
         <div style={{width:"350px"}}><Lottie animationData={service5} /></div>
         <div className='flex flex-col justify-center align-middle ' >
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>Personalized Solutions</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular' >Every business has unique needs, and that's why I offer customized web development solutions to help you achieve your goals. I'll create a tailored solution using the latest technologies and best practices.</p>
         </div>
     </div>

     <div className='flex flex-col justify-center gap-0 px-3 pt-5 align-middle md:flex-row lg:flex-row '>
         <div className='flex flex-col justify-center order-2 align-middle md:order-1 lg:order-1' >
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>Stringent Quality Testing</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular' >A successful website requires more than just great design and functionality. I provide meticulous testing services to ensure your website excels in design, functionality, and performance on all devices.</p>
         </div>
         <div style={{width:"350px"}} className="order-1 md:order-2 lg:order-2"><Lottie animationData={service6} /></div>
     </div>

     <div className='flex flex-col justify-center gap-6 px-3 pt-5 align-middle md:flex-row lg:flex-row'>
         <div style={{width:"350px"}}><Lottie animationData={service7} /></div>
         <div className='flex flex-col justify-center align-middle ' >
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>Continuous Support</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular'  >My website support services cover everything from routine maintenance to continuous optimization, allowing you to focus on your business while I ensure your website performs at its best.</p>
         </div>
     </div>

     <div className='flex flex-col justify-center gap-6 px-3 pt-5 align-middle md:flex-row lg:flex-row'>
         <div className='flex flex-col justify-center order-2 align-middle md:order-1 lg:order-1' >
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>SEO-Strategy</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular' >Boost your website's traffic and leads with my SEO services. I focus on keyword research and on-page optimization to improve your search engine ranking on Google and other platforms.</p>
         </div>
        <div style={{width:"350px"}} className="order-1 md:order-2 lg:order-2"> <Lottie animationData={service8} /></div>
     </div>

     <div className='flex flex-col justify-center gap-6 px-3 pt-5 mb-8 align-middle md:flex-row lg:flex-row'>
         <div style={{width:"350px"}}><Lottie animationData={service9} /></div>
         <div className='flex flex-col justify-center align-middle ' >
          <h1 className='mb-5 text-2xl space-mono-regular logo md:text-4xl lg:4xl'>Collaborative approach</h1>
           <p className='max-w-lg text-lg text-white space-mono-regular' >I can work flexibly with other teams and designers to turn your vision into a stunning website that represents your brand and engages your audience. Let's work together to create something great!</p>
         </div>
     </div>


<div className='flex flex-col items-center justify-center gap-6 p-4 md:flex-row sm:p-6 lg:p-8 bg-slate-300'>
  <div className='flex flex-col items-center gap-4 text-center md:items-start md:text-left'>
    <h1 className="text-xl font-bold text-black sm:text-2xl space-mono-regular">
      I'm available for remote jobs
    </h1>
    <button className="px-4 py-2 sm:px-6 sm:py-3 font-semibold text-white bg-black rounded-xl hover:bg-[#201b1b] transition duration-300 flex gap-3 justify-center items-center">
    <Lottie animationData={arrow} style={{width:"70px"}}/>
      Hire Me Now
    </button>
  </div>
  <div className="w-40 mt-4 sm:w-48 md:w-56 lg:w-64 md:mt-0">
    <Lottie animationData={hireme} />
  </div>
</div>

  
      
      
    </section>
  )
}

export default Service
