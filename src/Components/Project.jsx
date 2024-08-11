import React from "react";
import proj1 from "../assets/ecommerce.jpg";
import proj2 from '../assets/cognifyz.jpg';
import proj3 from '../assets/Travel.jpg';
import proj4 from '../assets/gallery.jpg'
const Project = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="pb-8">
        <p
          className="text-4xl mb-3 font-bold primary-color">
          ProJcts
        </p>
        <p className="text-gray-400"> check out My Project</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
        <div
          className="transform
             transition-transform duration-300 hover:scale-105
              overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
              items-center mx-auto content-div h-[200px] bg-cover relative"
        >
          <img src={proj1} layout="fill" objectFit="cover" alt="" />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[black]/70 absolute inset-0 flex flex-col justify-center
                  items-center" >
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="https://ecommerce-sho-starter.web.app/">
                <button
                  className="text-center rounded-lg px-4 py-3
                     m-2  bg-white  text-black font-bold text-2xl" >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform
             transition-transform duration-300 hover:scale-105
              overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
              items-center mx-auto content-div h-[200px] bg-cover relative"
        >
          <img src={proj2} layout="fill" objectFit="cover" alt="" />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[black]/70 absolute inset-0 flex flex-col justify-center
                  items-center" >
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="https://shivaniverma2002.github.io/proj-6/">
                <button
                  className="text-center rounded-lg px-4 py-3
                     m-2  bg-white  text-black font-bold text-2xl" >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform
             transition-transform duration-300 hover:scale-105
              overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
              items-center mx-auto content-div h-[200px] bg-cover relative"
        >
          <img src={proj3} layout="fill" objectFit="cover" alt="" />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[black]/70 absolute inset-0 flex flex-col justify-center
                  items-center" >
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="https://shivaniverma2002.github.io/proj-4/">
                <button
                  className="text-center rounded-lg px-4 py-3
                     m-2  bg-white  text-black font-bold text-2xl" >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform
             transition-transform duration-300 hover:scale-105
              overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
              items-center mx-auto content-div h-[200px] bg-cover relative"
        >
          <img src={proj4} layout="fill" objectFit="cover" alt="" />
          <div
            className="opacity-0 group-hover:opacity-90 bg-[black]/70 absolute inset-0 flex flex-col justify-center
                  items-center" >
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="https://shivaniverma2002.github.io/proj-5/">
                <button
                  className="text-center rounded-lg px-4 py-3
                     m-2  bg-white  text-black font-bold text-2xl" >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
      </div>
  );
};
export default Project;
