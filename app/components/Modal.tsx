"use client";
// Modal.js
import React, { useState } from "react";

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
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
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
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
