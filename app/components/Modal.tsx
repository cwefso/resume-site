"use client";

import React, { useEffect, useState, useCallback } from "react";
import { sections } from "./TextSections";
import { Button, SectionTitle, SECTION_ICONS } from "./Button";
import { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";

// Type guard to check if a title is a valid SectionTitle
function isSectionTitle(title: string): title is SectionTitle {
  return Object.keys(SECTION_ICONS).includes(title);
}

// Updated Section interface to be more flexible
interface Section {
  title: string;
  text: string;
  textColor: string;
  colors: string;
  icon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
}

// Define props type for Modal
interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [content, setContent] = useState<string>("");
  const [sectionTitle, setSectionTitle] = useState<string>("");
  const [sectionColor, setSectionColor] = useState<string>("");

  // Memoize close handler to prevent unnecessary re-renders
  const onClose = useCallback(() => {
    setIsOpen(false);
    // Reset to first section when closing
    if (sections.length > 0) {
      setContent(sections[0].text);
      setSectionTitle(sections[0].title);
    }
  }, [setIsOpen]);

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    }

    // Initial section setup
    if (sections.length > 0) {
      setContent(sections[0].text);
      setSectionTitle(sections[0].title);
      setSectionColor(sections[0].textColor);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handler to change section content
  const handleSectionChange = (section: Section) => {
    setSectionTitle(section.title);
    setContent(section.text);
    setSectionColor(section.textColor);
  };

  // Prevent rendering if modal is closed
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-gray-800 p-6 rounded-md shadow-md mx-4 w-full max-w-2xl h-[80vh] overflow-hidden"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
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

        {/* Modal Content */}
        <div className="flex flex-col items-center h-full overflow-y-auto">
          {/* Section Title */}
          <h2
            id="modal-title"
            className="text-2xl text-center mb-6"
            style={{ color: sectionColor }}
          >
            {sectionTitle}
          </h2>
          {/* Section Content */}
          <div className="flex-grow text-center px-4 mb-6">
            <p className="text-lg md:text-xl">{content}</p>
          </div>
          {/* Section Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center w-full">
            {sections.slice(1).map((section, index) => {
              // Only render button if title is a valid SectionTitle
              if (isSectionTitle(section.title)) {
                return (
                  <Button
                    key={`section-${index}`}
                    title={section.title}
                    text={section.text}
                    clickHandler={() => handleSectionChange(section)}
                    colors={section.colors}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
