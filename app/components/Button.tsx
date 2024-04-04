import {
  BeakerIcon,
  SwatchIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

type ButtonProps = {
  text: string;
  title: string;
  clickHandler: () => void;
  colors: string;
  icon: any;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  title,
  clickHandler,
  colors,
}) => {
  const [icon, setIcon] = useState<any>(
    <BeakerIcon width={"20px"} height={"20px"} className="mr-4" />
  );

  useEffect(() => {
    if (title) {
      switch (title) {
        case "Code":
          setIcon(
            <CodeBracketIcon
              width={"20px"}
              height={"20px"}
              className="mr-4"
              color="#44FF44"
            />
          );
          break;
        case "Content":
          setIcon(
            <ChatBubbleLeftRightIcon
              width={"20px"}
              height={"20px"}
              className="mr-4"
              color="#44BBFF"
            />
          );
          break;
        case "Testing":
          setIcon(
            <BeakerIcon
              width={"20px"}
              height={"20px"}
              className="mr-4"
              color="#FF44EC"
            />
          );
          break;
        case "Design":
          setIcon(
            <SwatchIcon
              width={"20px"}
              height={"20px"}
              className="mr-4"
              color="#FF4444"
            />
          );
          break;
      }
    }
  }, [title]);

  return (
    <>
      <div className={"relative inline-flex group mb-2"}>
        <div className="relative inline-flex  group">
          <div
            className={`absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r ${colors} rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}
          ></div>
          <button
            title={title}
            className="relative inline-flex items-center justify-start w-[224px] px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
            onClick={clickHandler}
          >
            {icon}
            <div>{title}</div>
          </button>
        </div>
      </div>
    </>
  );
};
