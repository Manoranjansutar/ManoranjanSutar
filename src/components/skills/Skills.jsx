import React from 'react'
import './Skills.css';
import html from './../../assets/html.svg';
import css from './../../assets/css.svg';
import javascript from './../../assets/javascript.svg';
import react from './../../assets/react.svg';
import bootstrap from './../../assets/bootstrap.svg';
import tailwind from './../../assets/tailwind.svg';
import mongoDB from './../../assets/mongoDB.svg';
import node from './../../assets/nodejs-icon.svg';
import git from './../../assets/git.svg';
import redux from './../../assets/redux.svg';
import express from './../../assets/express-js.png';
import wallpaper from './../../assets/coding_wallpaper5.gif';

import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";

const Skills = () => {
    return (
        <div className='pt-8 bg-[#0f172a] '>
            <div className='flex justify-center align-middle'> <h1 className='inline-block text-6xl tracking-widest text-center text-white ultra-regular' style={{borderBottom:"8px solid rgb(9,244,244,1)"}}>Skills</h1></div>
            <div className='flex px-20 skills' >
                <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} className='flex flex-wrap justify-center gap-20 mt-14' >
                    <MouseParallaxChild factorX={0.3} factorY={0.5} >
                        <img src={html} alt="" className='w-16 lg:w-24' />
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>HTML</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={css} alt="" className='w-16 lg:w-24'/>
                        <h1 className='text-xl text-center text-white space-mono-regular '>CSS</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={javascript} alt="" className='w-16 lg:w-24'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>Javascript</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={react} alt="" className='w-16 lg:w-24'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>React</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={bootstrap} alt="" className='w-16 lg:w-24'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>Bootstrap</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={tailwind} alt=""  className='w-16 mt-8 lg:w-24'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>Tailwind</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={mongoDB} alt="" className='w-10 lg:w-12'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>MongoDB</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={node} alt="" className='w-16 lg:w-24'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>nodeJs</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={express} alt="" className='w-16 lg:w-24'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>expressJs</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={git} alt="" className='w-16 lg:w-24'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>git</h1>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.8}>
                        <img src={redux} alt="" className='w-16 lg:w-24'/>
                        <h1 className='text-sm text-center text-white lg:text-xl space-mono-regular'>redux</h1>
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
        </div>
    )
}

export default Skills
