"use client";
// Modal.js
import React from "react";
import {
  BeakerIcon,
  SwatchIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

const Modal = ({ isOpen, setIsOpen, children }: any) => {
  const onClose = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 rounded-sm shadow-sm flex justify-center items-center z-10">
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={closeModal}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="max-w-[40vw] m-4 text-center">
              <div>
                I<span>&#8217;</span>m Charles Wefso, and I became a software
                engineer so that I could help improve people<span>&#8217;</span>
                s lives in meaningful ways. I have a background as a writer and
                a passion for political engagement. In 2020, after many years
                living and working in Denver, I decided to explore a new path
                and enter the world of software engineering. I love building
                applications because it allows me to use my creativity,
                problem-solving abilities, and my passion for working
                collaboratively with others.
              </div>
              <p className="m-8 text-2xl underline">Skills</p>
              <div className="flex flex-row gap-8">
                <>
                  <div className="relative inline-flex group">
                    <>
                      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44FF44] via-[#66FF66] to-[#00FF00] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <button
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#44FF44] mr-2" />
                        Content
                      </button>
                    </>
                  </div>
                </>
                <>
                  <div className="relative inline-flex group">
                    <>
                      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BBFF]  to-[#0055FF] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <button
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        <CodeBracketIcon className="h-6 w-6 text-[#44BBFF] mr-2" />
                        Engineering
                      </button>
                    </>
                  </div>
                </>
                <>
                  <div className="relative inline-flex group">
                    <>
                      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#FF4444] to-[#FF4444] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <button
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        <SwatchIcon className="h-6 w-6 text-[#FF4444] mr-2" />
                        Design
                      </button>
                    </>
                  </div>
                </>
                <>
                  <div className="relative inline-flex group">
                    <>
                      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#FF44EC] to-[#FF44EC] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <button
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        <BeakerIcon className="h-6 w-6 text-[#FF44EC] mr-2" />
                        Testing
                      </button>
                    </>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
