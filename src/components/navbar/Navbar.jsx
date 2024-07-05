import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { navdatalink } from './navdatalink'
import './Navbar.css';
import hamburger from './../../assets/gif json/hamburger.json';
import hamburgerclose from './../../assets/gif json/hamburger_close.json';
import Lottie from 'lottie-react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sticky top-0 left-0 w-full px-4 sm:px-6 lg:px-20 py-2 z-40 bg-[#0f172a] navbar'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                    <div className='flex gap-2 space-mono-regular logo'>
                        <h1 className='text-xl md:text-2xl'>&lt; ManoRanjan</h1>
                        <h1 className='text-xl md:text-2xl'>Sutar/ &gt;</h1>
                    </div>
                    <h5 className='text-sm text-center text-white sm:text-base'>Full Stack Developer</h5>
                </div>
                
                {/* Desktop Menu */}
                <ul className='hidden gap-4 text-lg text-white cursor-pointer md:flex lg:text-xl menu space-mono-regular'>
                    {navdatalink.map(({id, title, link}) => (
                        <li key={id} >
                            <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
                        {isOpen ? (
                            <div style={{width:"60px"}} className="order-1 md:order-2 lg:order-2"> <Lottie animationData={hamburgerclose} /></div>
                        ) : (
                            <div style={{width:"20px"}} className="order-1 md:order-2 lg:order-2"> <Lottie animationData={hamburger} /></div>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className='mt-4 text-white cursor-pointer md:hidden menu space-mono-regular'>
                    {navdatalink.map(({id, title, link}) => (
                        <li key={id}>
                            <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


export default Navbar
