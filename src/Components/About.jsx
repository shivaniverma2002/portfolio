import React from 'react';
import about from '../assets/img2.png';
const About=()=>{
  return(
    <div className='text-white mx-auto my-12 max-w-[1200px] ' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'> About Me</h2>
                    <p className='lg:text-lg'>
                    A frontend developer is the backbone of a website's user experience,
                     combining technical prowess with creative design skills. They translate complex backend data into visually 
                     
                     appealing and intuitive interfaces that users interact with daily. Strong in HTML, CSS, and JavaScript, 
                     they ensure that websites are not only functional but also responsive, accessible
                     , and optimized for performance across all devices. Their keen eye for detail allows them to seamlessly 
                     integrate aesthetics with usability, ensuring that users have a smooth and engaging experience. 
                     In addition to technical skills, they excel in problem-solving, adapting to the fast-paced evolution of web technologies.
                      With the ability to work closely with designers and backend developers, frontend developers are essential
                       in bridging the gap between 
                    concept and reality, turning innovative ideas into fully functional, user-friendly websites and applications.
                    </p>
                </div>
           
            </div>
            <img src={about} className='mx-auto rounded-3xl py-10 border-2 border-[#67e8f9] md:py-4' alt='' width={300} height={300} />
        </div>
        
    </div>

  )
}
export default About;