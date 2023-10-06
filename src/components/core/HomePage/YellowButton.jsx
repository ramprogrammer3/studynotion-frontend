import React from "react";

const YellowButton = ({ text,children }) => {
  return (
    <div className="text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-yellow-50 text-black  hover:shadow-none hover:scale-95 transition-all duration-200 flex items-center gap-2 ">
      {text}
      {children}
    </div>
  );
};

export default YellowButton;
