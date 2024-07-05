import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import btn from './../../assets/gif json/contact-button.json';
import contact from './../../assets/gif json/contact-2.json';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer , Bounce} from 'react-toastify';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const [formData,setFormData] = useState({
     name:"",
     email:"",
     phone:"",
     message:""
  })

  const handleChange = (e) =>{
     setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_oflv2kw', 'template_3w55zt4', formData, 'Y2ASO-LVVBrGiPQt-')
      .then((result) => {
          console.log(result.text);
          toast.success('Email sent successfully!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      }, (error) => {
          console.log(error.text);
          toast.success('Failed to send email.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    };
    

  return (
    <section id='contact' className='pt-10 pb-32 bg-[#0f172a] '>
      <div className='flex justify-center align-middle'> <h1 className='inline-block text-4xl tracking-widest text-center text-white ultra-regular lg-text-6xl md:text-5xl' style={{borderBottom:"8px solid rgb(9,244,244,1)"}}>Contact</h1></div>
      <div className='flex flex-col items-center justify-center pt-10 text-center space-mono-regular'>
          <div className='flex justify-center gap-2 px-20 align-middle space-mono-regular logo' >
               <h1 className='text-3xl ' >&lt;</h1>
               <h1 className='text-3xl' > Contribution &gt; </h1>
          </div>
          <p className='text-xl text-white'>Let's make something amazing together...!!!</p>
          <p className='max-w-2xl mt-3 text-lg text-white' >I'm always available for collaborations and small jobs, as it gives me an opportunity to learn and grow. Feel free to contact me on any of my listed socials or in the contact form below, and I'll do my best to get back to you asap. Reach me out... <span className='cursor-pointer logo'>here</span> </p>
          <div className='flex justify-center gap-2 px-20 align-middle space-mono-regular logo' >
               <h1 className='text-3xl ' >&lt;</h1>
               <h1 className='text-3xl' > Contribution/ &gt; </h1>
          </div>
         <div className='flex flex-col items-center justify-center gap-0 md:flex-row lg:flex-row lg:gap-0'>
         <Lottie animationData={contact} style={{height:"320px"}} className='mb-5'/>
            <div className='flex flex-col'>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' className='w-full h-10 p-3 mb-4 border-black rounded-md' name='name' value={formData.name} onChange={handleChange} required/>
                <input type="email" placeholder='Email Address'  className='w-full h-10 p-3 mb-4 rounded-md' name='email' value={formData.email} onChange={handleChange} required/>
                <div className='flex items-center justify-center w-full gap-0 mb-4'>
                  <input type="number" placeholder='Phone Number'  className='w-full h-10 p-3 rounded-md' name='phone' value={formData.phone} onChange={handleChange} required/>
                  <button type="submit" className='w-full border-0 outline-none'>
                    <Lottie animationData={btn} style={{height:"50px"}} className='w-full'/>
                 </button>
                 <ToastContainer/>
                </div>
                <input type="text" placeholder='Message'  className='w-full h-10 p-3 mb-4 rounded-md' name='message' value={formData.message} onChange={handleChange} required/>
              </form>
            </div>
         </div>
      </div>
    
    </section>
  )
}

export default Contact
