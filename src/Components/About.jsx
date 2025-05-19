import React from 'react'
import { FaCode } from 'react-icons/fa'


function About() {
  return (
    <div className='px-8 flex flex-col gap-14 text-[#EEEEEE] bg-[#222831]'>
        <div className='text-lg font-[600] flex flex-col gap-5'>
            <div className='flex flex-row gap-8 items-center'><div><FaCode className='size-7 text-[#00ADB5]'/></div><div>Website Development</div></div>
            <div className='flex flex-row gap-8 items-center'><div><FaCode className='size-7 text-[#00ADB5]'/></div><div>Website Development</div></div>
            <div className='flex flex-row gap-8 items-center'><div><FaCode className='size-7 text-[#00ADB5]'/></div><div>Website Development</div></div>
            <div className='flex flex-row gap-8 items-center'><div><FaCode className='size-7 text-[#00ADB5]'/></div><div>Website Development</div></div>
        </div>
        <div className='flex flex-col gap-7'>
            <div className='text-4xl font-bold'>About <span className='text-[#00ADB5]'>me</span></div>
            <p className='text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur aperiam molestiae inventore, sequi natus, porro sed dolores quaerat atque, expedita adipisci voluptate commodi reprehenderit repudiandae amet exercitationem minus nostrum?
                Alias beatae iure ex doloribus quod dolorem saepe sequi impedit consequuntur inventore est et voluptate dicta eius ducimus quas at, voluptatum quo quisquam ad illo. Totam dignissimos mollitia qui quasi?. Accusantium soluta temporibus natus, deleniti pariatur corporis harum hic in reprehenderit nemo assumenda fuga neque tempora quasi laborum illo eius asperiores earum voluptatem.
            </p>
        </div>

    </div>
  )
}

export default About