import React from 'react';


const CoderProfile = () => {
  return (
    <div className='space-mono-regular max-w-fit'>
      <p className='text-base'> <span className='text-orange-500 '>const</span> Coder <span className='text-orange-500 '> = </span> &#123; </p>
      <p className='mx-6 text-xl'>name:'<span className='text-yellow-600'>ManoRanjan Sutar</span>',</p>
      <p className='mx-6 text-xl'>email:' <span className='text-yellow-600'>sutar.manoranjan90@gmail.com</span> ',</p>
      <p className='flex flex-wrap mx-6 text-xl'>mobile:'<span className='text-yellow-600'>7326074744</span>',</p>
      <p className='mx-6 text-xl'>Skills:'<span className='text-yellow-600'>HTML</span>','<span className='text-yellow-600'>CSS</span>','<span className='text-yellow-600'> JavaScript </span>','<span className='text-yellow-600'>React</span>','<span className='text-yellow-600'> Bootstrap</span>','<span className='text-yellow-600'>Tailwind </span>','<span className='text-yellow-600'>Redux</span>','<span className='text-yellow-600'>NodeJs </span>','<span className='text-yellow-600'> ExpressJs</span>','<span className='text-yellow-600'> MongoDb</span>',</p>
      <p className='mx-6 text-xl'>experience:'<span className='text-orange-500 '>3 years</span>',</p>
      <p className='mx-6 text-xl'>designation:'<span className='text-orange-500 '>FullStack Developer</span>',</p>
      <p className='mx-6 text-xl'>hardworker:'<span className='text-orange-500 '>true</span>',</p>
      <p className='mx-6 text-xl'>quicklearner:'<span className='text-orange-500 '>true</span>',</p>
      <p className='mx-6 text-xl'>problemSolver:'<span className='text-orange-500 '>true</span>',</p>
      <p className='mx-6 text-xl'><span className='text-green-500'>hireable</span>: <span className='text-orange-500 '> function( )</span>  &#123; </p>
      <p className='mx-12 text-xl'><span className='text-orange-500 '>return</span>  &#123; </p>
      <p className='mx-12 text-xl'><span className='text-cyan-500'>this</span>.hardworker <span className='text-orange-500 '>&&</span></p>
      <p className='mx-12 text-xl'><span className='text-cyan-500'>this</span>.problemSolver <span className='text-orange-500 '>&&</span></p>
      <p className='mx-12 text-xl'><span className='text-cyan-500'>this</span>.skills.length  &gt;= 5</p>
      <p className='mx-12 text-xl'> &#125;;</p>
      <p className='mx-6 text-xl'> &#125;;</p>
      <p className='text-xl'> &#125;;</p>
    </div>
  );
};

export default CoderProfile;