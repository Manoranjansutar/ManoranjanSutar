import React from 'react'
import BackgroundAnimation from './BackgroundAnimation'
import './Home.css';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import hero from './../../assets/hero-dark@90.dba36cdf.jpg';
import Cv from './Cv';
import coding from './../../assets/hero.gif';




const Home = () => {
  return (
    <section className='flex flex-col md:flex-row lg:flex-row'  id='home' style={{backgroundImage:`url('${hero}')`,backgroundPosition:"center" ,zIndex:"0"}}>
      <MouseTrail strokeColor={"#FF8541"} />
      <main> </main>
      
      <div className='relative w-full p-4 lg:p-12 md:order-1 lg:order-1 md:w-1/2 '>
        <BackgroundAnimation />
        <div className='absolute px-6 text-white top-4 home lg:top-16 lg:left-24 lg:px-0'>
          <h1 className='mt-0 text-4xl font-black leading-tight tracking-wider ultra-regular md:text-4xl lg:text-7xl lg:mt-20 lg:leading-snub md:leading-snub md:mt-0' >Turning <span className='log1'>Vision</span> Into <span className='log2'>Reality</span>  With <span className='log3'>Code</span>  And <span className='log4'>Design.</span> </h1>
          <p className="pt-10 pb-3 text-sm space-mono-regular md:text-sm lg:text-xl">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
            React.js and web development</p>
        <div className='float-left px-20 md:px-0'  > <Cv /></div>
        </div>
      </div>

      <div className='relative w-full mt-16 align-middle md:w-1/2 lg:mt-0 md:order-2 md:mt-20 lg-order-2'>
        <BackgroundAnimation />
        <div className='absolute text-white top-20 left-7 lg:top-32 md:top-0'>
          <img src={coding} alt=""  width={1200}/>
        </div>
      </div>
    </section>
  )
}

export default Home
