"use client";

import React, { useEffect, useState } from "react";
import { sections } from "./TextSections";
import { Button } from "./Button";

const Modal = ({ isOpen, setIsOpen, children }: any) => {
  const [content, setContent] = useState<string>("");
  const [sectionTitle, setSectionTitle] = useState<string>("");
  const [sectionColor, setSectionColor] = useState<string>("");
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
      setSectionColor(sections[0].textColor);
    }
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 rounded-sm shadow-sm flex  justify-center items-center z-10">
          <div className="bg-gray-800 p-6 rounded-md shadow-md mx-4  h-[80vh]">
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

            <div className="mx-2 md:max-w-[40vw] m-4 text-center flex flex-col items-center">
              <div className="relative top-[5vh]">
                <p
                  className="text-2xl text-center"
                  style={{ color: sectionColor }}
                >
                  {sectionTitle}
                </p>
              </div>

              <div className="relative top-[10vh]">
                <div className="text-2xl md:text-lg md:h-[20vh]">{content}</div>
              </div>

              <div className="relative top-[25vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
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
                              setSectionColor(section.textColor);
                            }}
                            colors={section.colors as string}
                            icon={section.icon}
                          />
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
