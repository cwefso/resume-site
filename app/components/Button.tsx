type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

type ButtonProps = {
  text: string;
  clickHandler: () => void;
  from: string;
  to: string;
  icon: any;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  clickHandler,
  from,
  to,
  icon: Icon,
}) => {
  return (
    <div>
      <div>
        <>
          <div className="flex gap-8">
            <div className="relative inline-flex group">
              <button
                className={`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-gradient-to-r from-${from} to-${to}`}
                onClick={clickHandler}
              >
                <Icon />
                {text}
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};
