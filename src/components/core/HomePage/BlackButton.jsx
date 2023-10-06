import React from "react";

const BlackButton = ({ text }) => {
  return (
    <div className="text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-richblack-800 hover:shadow-none hover:scale-95 transition-all duration-200 ">
      {text}
    </div>
  );
};

export default BlackButton;
