import React from "react";
import type { CSSProperties } from "react";

interface FigureCardProps {
  top?: string;
  left?: string;
  bottom?: string;
  translateY?: string;
  bgColor: string;
  iconBg: string;
  iconSrc: string;
  textColor: string;
  text: string;
  roundedClasses: string;
  padding?: string;
  gap?: string;
  pl?: string;
  minWidth?: string;
  aspect?: string;
  height?: string;
  heightSm?: string;
  iconSize?: string;
  svgSize?: string;
  textSize?: string;
}

const FigureCard: React.FC<FigureCardProps> = ({
  top,
  left,
  bottom,
  translateY,
  bgColor,
  iconBg,
  iconSrc,
  textColor,
  text,
  roundedClasses,
  padding = "p-3",
  gap = "gap-3",
  pl = "pl-5",
  minWidth = "min-w-[140px]",
  aspect = "aspect-square",
  height = "h-[50%]",
  heightSm = "sm:h-[40%]",
  iconSize = "w-1/3 h-1/3",
  svgSize = "w-2/3 h-2/3",
  textSize = "text-sm"
}) => {
  const positionStyle: CSSProperties = {
    top,
    left,
    bottom,
    transform: translateY ? `translateY(${translateY})` : undefined
  };

  return (
    <div
      className={`absolute ${bgColor} backdrop-blur-lg flex flex-col justify-center ${padding} 
                  ${roundedClasses} ${gap} ${pl} ${height} ${heightSm} ${aspect} ${minWidth}`}
      style={positionStyle}
    >
      <div className={`${iconSize} ${iconBg} rounded-t-4xl rounded-br-4xl shadow-md ring-1 ring-white/30 flex justify-center items-center mx-auto`}>
        <img className={`${svgSize}`} src={iconSrc} alt="" />
      </div>
      <p className={`${textColor} w-full text-center font-semibold ${textSize}`}>
        {text}
      </p>
    </div>
  );
};

export default FigureCard;
