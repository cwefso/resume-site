import React, { useEffect, useState } from "react";
import {
  BeakerIcon,
  SwatchIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

// Define a union type for allowed titles
export const SECTION_TITLES = ["Code", "Content", "Testing", "Design"] as const;

// Create a type from the titles
export type SectionTitle = (typeof SECTION_TITLES)[number];

// Mapping of titles to icons and colors
export const SECTION_ICONS = {
  Code: {
    Icon: CodeBracketIcon,
    color: "#44FF44",
  },
  Content: {
    Icon: ChatBubbleLeftRightIcon,
    color: "#44BBFF",
  },
  Testing: {
    Icon: BeakerIcon,
    color: "#FF44EC",
  },
  Design: {
    Icon: SwatchIcon,
    color: "#FF4444",
  },
} as const;

// Type for Hero Icons
type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement>
>;

// Improved type definition
type ButtonProps = {
  text: string;
  title: SectionTitle;
  clickHandler: () => void;
  colors: string;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  title,
  clickHandler,
  colors,
}) => {
  const [icon, setIcon] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    // Safely get icon from mapping
    const sectionIcon = SECTION_ICONS[title];
    if (sectionIcon) {
      setIcon(
        <sectionIcon.Icon
          width="20px"
          height="20px"
          color={sectionIcon.color}
          className="mr-4"
        />
      );
    }
  }, [title]);

  return (
    <div className="relative inline-flex group mb-2">
      <div className="relative inline-flex group">
        <div
          className={`
            absolute transition-all duration-1000 
            opacity-70 -inset-px bg-gradient-to-r 
            ${colors} rounded-xl blur-lg 
            group-hover:opacity-100 group-hover:-inset-1 
            group-hover:duration-200 animate-tilt
          `}
        ></div>
        <button
          title={title}
          className="
            relative inline-flex items-center 
            md:justify-between w-[40vw] md:w-[224px] 
            px-8 py-4 text-lg font-bold text-white 
            transition-all duration-200 bg-gray-900 
            font-pj rounded-xl focus:outline-none 
            focus:ring-gray-900
          "
          role="button"
          onClick={clickHandler}
        >
          {icon}
          <div className="ml-6 md:ml-4">{title}</div>
        </button>
      </div>
    </div>
  );
};
