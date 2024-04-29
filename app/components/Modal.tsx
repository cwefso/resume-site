"use client";

import React, { useEffect, useState } from "react";
import { sections } from "./TextSections";
import { Button } from "./Button";

const Modal = ({ isOpen, setIsOpen, children }: any) => {
  const [content, setContent] = useState<string>("");
  const [sectionTitle, setSectionTitle] = useState<string>("");
  const onClose = () => {
    setIsOpen(false);
    setContent(sections[0].text);
    setSectionTitle("Bio");
  };

  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    if (sections) {
      setContent(sections[0].text);
      setSectionTitle(sections[0].title);
    }
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 rounded-sm shadow-sm flex  justify-center items-center z-10">
          <div className="bg-gray-800 p-6 rounded-md shadow-md mx-4 min-h-[80vh] ">
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
            <p className="m-8 text-2xl  text-center">{sectionTitle}</p>
            <div className="mx-2 md:max-w-[40vw] m-4 text-center">
              <div className="text-2xl md:text-lg md:h-[550px]">{content}</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center pt-12">
                <>
                  {sections.map((section, index) => {
                    if (index > 0) {
                      return (
                        <>
                          <Button
                            key={index}
                            title={section.title}
                            text={section.text}
                            clickHandler={() => {
                              setSectionTitle(section.title);
                              setContent(section.text);
                            }}
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
