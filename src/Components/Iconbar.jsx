import React from "react";
import "../styles/iconbar.css";

function Iconbar() {
  return (
    <div className="iconbar w-full h-[6rem] shadow-xl rounded-b overflow-x-auto">
      <div className="iconbar-content flex items-center h-full py-2">
        <style>{`
          .iconbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }

          .iconbar::-webkit-scrollbar-track {
            background: #eeeeee;
            border-radius: 10px;
            margin: 0 10px;
          }

          .iconbar::-webkit-scrollbar-thumb {
            background: #00adb5;
            border-radius: 10px;
          }

          .iconbar::-webkit-scrollbar-thumb:hover {
            background: #008c94;
          }
        `}</style>

        <div className="icons-wrapper flex gap-x-6 sm:gap-x-8 md:gap-x-11 items-center min-w-max px-6">
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/javascript-logo-svgrepo-com.svg"
              alt="JavaScript"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/typescript-logo-svgrepo-com.svg"
              alt="TypeScript"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/react.svg"
              alt="React"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/next-js-svgrepo-com.svg"
              alt="Next.js"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/tailwind-svgrepo-com.svg"
              alt="Tailwind CSS"
            />
          </div>
                    <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/shadcn-ui-seeklogo.svg"
              alt="Vite"
            />
          </div>
          {/* ubuntu-svgrepo-com.svg */}
                    <div className="icon-item">
            <img
              className="size-13 transition-transform duration-200 hover:scale-125 sm:size-15 md:size-16 lg:size-17"
              src="../images/ubuntu-svgrepo-com.svg"
              alt="GitHub"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/github-142-svgrepo-com.svg"
              alt="GitHub"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/redux-svgrepo-com.svg"
              alt="Redux"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/html-5-svgrepo-com.svg"
              alt="HTML5"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/css-svgrepo-com.svg"
              alt="CSS3"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/figma-svgrepo-com.svg"
              alt="Figma"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/react-router-svgrepo-com.svg"
              alt="React Router"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/npm-svgrepo-com.svg"
              alt="npm"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/bootstrap-svgrepo-com.svg"
              alt="Bootstrap"
            />
          </div>
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/api-svgrepo-com(1).svg"
              alt="API"
            />
          </div>{" "}
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/vite-svgrepo-com.svg"
              alt="Vite"
            />
          </div>{" "}
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/git-svgrepo-com.svg"
              alt="git"
            />
          </div>{" "}
          <div className="icon-item">
            <img
              className="size-11 transition-transform duration-200 hover:scale-125 sm:size-13 md:size-13 lg:size-14"
              src="../images/postman-icon-svgrepo-com.svg"
              alt="Vite"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Iconbar;
