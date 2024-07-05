import React from 'react';
import circular from './../../assets/CircularText.svg';

const Cv = () => {

    const handleDownloadCV = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '/resume_fresher.pdf'; // Path to your CV PDF file
        downloadLink.download = 'resume_fresher.pdf'; // Name of the downloaded file
        downloadLink.click();
      };

  return (
    <div className='relative flex items-center justify-center mt-4 '>
      <img src={circular} alt=""  className='w-40 bg-white rounded-full animate-spin-slow'/>
      <div className='absolute flex items-center justify-center w-20 h-20 p-2 text-white -translate-x-1/2 -translate-y-1/2 bg-black rounded-full cursor-pointer top-1/2 left-1/2 cv'  onClick={handleDownloadCV}>
          <h3>C V</h3>
      </div>
    </div>
  )
}

export default Cv
