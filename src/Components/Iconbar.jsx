import React from 'react'
import "../styles/iconbar.css";

function Iconbar() {
  return (
    <div className='iconbar w-full h-[10rem] shadow-xl rounded-b flex items-center justify-center md:h-[5rem]'>
        <div className='px-2 py-2 gap-y-8 gap-x-6 grid grid-cols-7 md:flex flex-row items-center justify-center md:gap-10'>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/javascript-logo-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/typescript-logo-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/react.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/next-js-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/tailwind-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/github-142-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/redux-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/html-5-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/css-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/figma-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/react-router-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/npm-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/bootstrap-svgrepo-com.svg"/></div>
            <div><img className='size-10 transition-transform duration-200 hover:scale-120 md:size-14' src="./src/assets/vite-svgrepo-com.svg"/></div>
        </div>
    </div>
  )
}

export default Iconbar