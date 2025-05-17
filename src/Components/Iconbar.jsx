import React from 'react'
import "../styles/iconbar.css";

function Iconbar() {
  return (
    <div className='iconbar w-full h-[6rem] shadow-xl rounded-b overflow-x-auto'>
      <div className='iconbar-content flex items-center h-full py-2'>
      <style jsx>{`
          .iconbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          
          .iconbar::-webkit-scrollbar-track {
            background: #EEEEEE;
            border-radius: 10px;
            margin: 0 10px;
          }
          
          .iconbar::-webkit-scrollbar-thumb {
            background: #00ADB5;
            border-radius: 10px;
          }
          
          .iconbar::-webkit-scrollbar-thumb:hover {
            background: #008c94;
          }
          
        `}</style>
        
        <div className='icons-wrapper flex gap-x-6 sm:gap-x-8 md:gap-x-11 items-center min-w-max px-6'>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/javascript-logo-svgrepo-com.svg" alt="JavaScript"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/typescript-logo-svgrepo-com.svg" alt="TypeScript"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/react.svg" alt="React"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/next-js-svgrepo-com.svg" alt="Next.js"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/tailwind-svgrepo-com.svg" alt="Tailwind CSS"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/github-142-svgrepo-com.svg" alt="GitHub"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/redux-svgrepo-com.svg" alt="Redux"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/html-5-svgrepo-com.svg" alt="HTML5"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/css-svgrepo-com.svg" alt="CSS3"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/figma-svgrepo-com.svg" alt="Figma"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/react-router-svgrepo-com.svg" alt="React Router"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/npm-svgrepo-com.svg" alt="npm"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/bootstrap-svgrepo-com.svg" alt="Bootstrap"/>
          </div>
          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/api-svgrepo-com(1).svg" alt="API"/>
          </div>          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/vite-svgrepo-com.svg" alt="Vite"/>
          </div>          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/git-svgrepo-com.svg" alt="git"/>
          </div>          <div className='icon-item'>
            <img className='size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14' 
                 src="./src/assets/postman-icon-svgrepo-com.svg" alt="Vite"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iconbar