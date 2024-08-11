import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwindcss from '../assets/tailwind.png';
import cpp from '../assets/cpp.png';
import react from '../assets/react.png';
const Skill=()=>{
  return (
<div className='text-gray-400 md:h-[150px] max-w-[1200px] mx-auto   grid grid-cols-3 place-items-center md:flex md:justify-between 
    md:items-center'>
    <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'> 
     my<br/> Tech<br/> Stack <br/>

   </h2>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={html} alt=''/>
        <p className='mt-2'> Html</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={css} alt=''/>
        <p className='mt-2'> CSS </p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={javascript} alt=''/>
        <p className='mt-2'> javascript</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={react} alt=''/>
        <p className='mt-2'> React</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={tailwindcss} alt=''/>
        <p className='mt-2'> Tailwindcss</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={cpp} alt=''/>
        <p className='mt-2'> C++</p>
    </div>
    </div>
  )
}
export default Skill;
