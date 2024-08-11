import React from 'react';
import { TypeAnimation} from 'react-type-animation';
import hero from '../assets/img1.png';
const Hero=()=>{
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] h-full mx-auto py-8 bg-black justify-center items-center'>
            <div className='col-span-1 my-auto mx-auto justify-center items-center '>
                <div className='w-[400px] h-[320px] lg:w-[300px] p-3 border-2
                 border-[#67e8f9] rounded-full shadow-lg shadow-[#67e8f9]'>
                    <img src={hero}  className ='mt-2 h-[250px]' alt='heroimg'/>
                </div>

            </div>
            <div className='col-span-1 px-5 my-auto justify-center items-center p-2'>
                <h1 className='text-white text-4xl sm:text-7xl lg:text-4xl font-bold'>
                    <span className='primary-color text-2xl'>
                        I'm a
                    </span> <br/>
                    <TypeAnimation 
                    sequence={[
                        "Frontend Dev",1000,
                        "Web Designer",1000,
                        "Problem Solver",1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}/>
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My Name is shivani Verma. I am Keen to learn new skills and enjoy my work.
                </p>
                <div className='my-8 '>
                    <a href='/'className='px-6 text-[#fff] py-3 w-full rounded-xl mr-4  bg-gradient-to-tr from-blue-900
                     to-[#67e8f9] '>
                    Download cv</a>
                    <a href='#context' className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-tr from-blue-900
                     to-[#67e8f9] text-white hover:border-none'>context</a>
                </div>
            </div>

        </div>
    )
}
export default Hero;