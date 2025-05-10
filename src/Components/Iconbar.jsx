import React from 'react'

function Iconbar() {
  return (
    <div className='bg-white w-full h-[5rem] shadow-lg shadow-white flex items-center justify-center'>
        <div className='px-6 py-2 flex flex-row gap-8 sm'>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/javascript-logo-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/typescript-logo-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/react.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/next-js-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/tailwind-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/github-142-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/redux-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/html-5-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/css-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/figma-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/api-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/react-router-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/npm-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/bootstrap-svgrepo-com.svg"/></div>
            <div><img className='size-14 transition-transform duration-200 hover:scale-120' src="./src/assets/vite-svgrepo-com.svg"/></div>
        </div>
    </div>
  )
}

export default Iconbar