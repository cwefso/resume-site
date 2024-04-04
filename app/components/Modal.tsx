"use client";

import React, { useEffect, useState } from "react";
import { sections } from "./TextSections";
import { Button } from "./Button";

const Modal = ({ isOpen, setIsOpen, children }: any) => {
  const [content, setContent] = useState<string>("");

  const onClose = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    if (sections) {
      setContent(sections[0].text);
    }
  }, []);

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
              <div>{content}</div>
              <p className="m-8 text-2xl underline">Skills</p>
              <div className="grid grid-cols-2 gap-4 place-items-center ">
                <>
                  {sections.map((section, index) => {
                    if (index > 0) {
                      return (
                        <>
                          <Button
                            key={index}
                            title={section.title}
                            text={section.text}
                            clickHandler={() => setContent(section.text)}
                            colors={section.colors as string}
                            icon={section.icon}
                          />
                        </>
                      );
                    }
                  })}
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
