import React from 'react'
import './Loader.css';
import wallpaper from './../../assets/coding_wall.gif';


const Loader = () => {
  return (
    <div className='flex flex-col gap-24 loader'  style={{backgroundImage:`url(${wallpaper})`,backgroundPosition:"center",backgroundSize:"cover",width:"100vw",height:"100vh"}}>

        <ul className='flex gap-3 text-4xl lg:gap-10 lg:text-9xl space-mono-regular md:text-7xl md:gap-7'>
          <li className='underline'>M</li>
          <li className='underline'>A</li>
          <li className='underline'>N</li>
          <li className='underline'>O</li>
          <li className='underline'>R</li>
          <li className='underline'>A</li>
          <li className='underline'>N</li>
          <li className='underline'>J</li>
          <li className='underline'>A</li>
          <li className='underline'>N</li>
        </ul>
 
      {/* <div className='flex loader1'>
        <ul className='flex gap-3 text-xl lg:gap-5 lg:text-4xl space-mono-regular md:text-7xl md:gap-7'>
          <li className='underline'>F</li>
          <li className='underline'>U</li>
          <li className='underline'>L</li>
          <li className='underline'>L</li>
          <li className='underline'>S</li>
          <li className='underline'>T</li>
          <li className='underline'>A</li>
          <li className='underline'>C</li>
          <li className='underline'>K</li>
        </ul>
      </div>
      <div className='loader2'>
          <ul className='flex gap-3 text-xl lg:gap-5 lg:text-4xl space-mono-regular md:text-7xl md:gap-7'>
            <li className='underline'>D</li>
            <li className='underline'>E</li>
            <li className='underline'>V</li>
            <li className='underline'>E</li>
            <li className='underline'>L</li>
            <li className='underline'>O</li>
            <li className='underline'>P</li>
            <li className='underline'>E</li>
            <li className='underline'>R</li>
          </ul>
        </div> */}
    </div>
  )
}

export default Loader
