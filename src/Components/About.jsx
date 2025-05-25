import React from 'react'
import { FaCode , FaMobileAlt } from 'react-icons/fa'
import { FaBoltLightning } from 'react-icons/fa6'
import { HiOutlineServer } from 'react-icons/hi'


function About() {
  return (
    <div className='px-8 flex flex-col gap-14 text-[#EEEEEE] bg-[#222831] md:grid grid-cols-2'>
        <div className='text-lg font-[600] flex flex-col justify-center gap-5 sm:text-xl md:text-2xl md:gap-12 lg:gap-9'>
            <div className='flex flex-row gap-8 items-center'><div><FaCode className='size-7 md:size-8 text-[#00ADB5]'/></div><div>Website Development</div></div>
            <div className='flex flex-row gap-8 items-center'><div><FaMobileAlt className='size-7 md:size-8 text-[#00ADB5]'/></div><div>App Development</div></div>
            <div className='flex flex-row gap-8 items-center'><div><HiOutlineServer className='size-7 md:size-8 text-[#00ADB5]'/></div><div>Website Hosting</div></div>
            <div className='flex flex-row gap-8 items-center'><div><FaBoltLightning className='size-7 md:size-8 text-[#00ADB5]'/></div><div>Performance Optimization</div></div>
        </div>
        <div className='flex flex-col gap-7'>
            <div className='text-4xl font-bold'>About <span className='text-[#00ADB5]'>me</span></div>
            <p className='text-lg lg:text-xl'>
            I`m a patient and very flexible person who loves progress.
            <br /> I enjoy codding and good at teamwork.
            <br />
            I am a frontend developer with a strong passion for building interactive and performant web applications using modern tools like
             <span className='text-[#00ADB5] font-semibold'> React </span>,<span className='text-[#00ADB5] font-semibold'>Next.js </span>,<span className='text-[#00ADB5] font-semibold'>Tailwind CSS</span> , and more.
             I started learning programming at a bootcamp<span className='font-light text-sm md:text-md text-[#00ADB5]'>(for 8 months) </span>and continued it as self-study.
             I have 6 months of work experience at<span className='text-[#00ADB5]'> AFTAB-NEGAR </span>Company as a admin platform & 6 months of work experience at<span className='text-[#00ADB5]'> MOODIC Studio </span>as a admin platform.
            </p>
        </div>

    </div>
  )
}

export default About