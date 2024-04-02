"use client";
// Modal.js
import React from "react";
import { BeakerIcon, SwatchIcon } from "@heroicons/react/24/solid";
import { sections } from "./TextSections";
import { Button } from "./Button";

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
              <div className="flex flex-col items-center gap-8">
                <>
                  {sections.map((section, index) => (
                    <>
                      <Button
                        key={index}
                        text={section.title}
                        clickHandler={() => console.log(section.title)}
                        from={section.from}
                        to={section.to}
                        icon={section.icon}
                      />
                    </>
                  ))}
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
