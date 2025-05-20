import React from 'react'
import { FaLinkedin, FaPhone } from 'react-icons/fa6'
import "../styles/contactBox.css";
import { MdEmail } from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io';

function Contact() {
  return (
    <div className='py-6 pb-12 px-8 flex flex-col gap-7 text-[#EEEEEE]'>

      <div className='flex justify-start items-center'>
      <div className='text-4xl font-bold'>Contact <span className='text-[#00ADB5]'>me</span></div>
      </div>
<div className='flex flex-col gap-10  md:grid grid-cols-2'>
<div className='contactBox px-8 py-7 flex flex-col gap-8 justify-center items-start rounded-2xl shadow-md shadow-[#00ADB5]'>
        <div className='flex justify-start items-center'>
          <div className='flex flex-row justify-start items-center gap-4'>
            <div className='text-'><FaPhone className='size-7 sm:size-8 text-[#00ADB5]'/></div>
            <div className='flex flex-col justify-start items-start'>
              <p className='font-light text-sm sm:text-md text-gray-400'>Phone</p>
              <p className='text-md sm:text-lg'>+98 930 6262 923</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='contactBox px-8 py-7 flex flex-col gap-8 justify-center items-start rounded-2xl shadow-md shadow-[#00ADB5]'>
        <div className='flex justify-start items-center'>
          <div className='flex flex-row justify-start items-center gap-4'>
            <div className='text-'><MdEmail className='size-8 sm:size-9 text-[#00ADB5]'/></div>
            <div className='flex flex-col justify-start items-start'>
              <p className='font-light text-sm sm:text-md text-gray-400'>Email</p>
              <p className='text-md sm:text-lg'>mohamad8rahimi3@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className='contactBox px-8 py-7 flex flex-col gap-8 justify-center items-start rounded-2xl shadow-md shadow-[#00ADB5]'>
        <div className='flex justify-start items-center'>
          <div className='flex flex-row justify-start items-center gap-4'>
            <div className='text-'><IoLogoGithub className='size-8 sm:size-9 text-[#00ADB5]'/></div>
            <div className='flex flex-col justify-start items-start'>
              <p className='font-light text-sm sm:text-md text-gray-400'>Github</p>
              <p className='text-md sm:text-lg'>github.com/mmd-rahimi</p>
            </div>
          </div>
        </div>
      </div>

      <div className='contactBox px-8 py-7 flex flex-col gap-8 justify-center items-start rounded-2xl shadow-md shadow-[#00ADB5]'>
        <div className='flex justify-start items-center'>
          <div className='flex flex-row justify-start items-center gap-4'>
            <div className='text-'><FaLinkedin className='size-7 sm:size-8 text-[#00ADB5]'/></div>
            <div className='flex flex-col justify-start items-start'>
              <p className='font-light text-sm sm:text-md text-gray-400'>Linkedin</p>
              <p className='text-md sm:text-lg'>-</p>
            </div>
          </div>
        </div>
      </div>
</div>


    </div>
  )
}

export default Contact