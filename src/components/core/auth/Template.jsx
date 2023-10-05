import React from "react";
import frameImg from "../../../assets/Images/frame.png";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, description1, description2, image, formType }) => {
  return (
    <div
      className="w-11/12 max-w-maxContent 
        mx-auto flex justify-between my-12 flex-col-reverse gap-16 md:flex-row
        pb-20"
    >
      <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 ">
        <h2 className="text-2xl md:text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
          {" "}
          {title}{" "}
        </h2>
        <p className="mt-4 text-sm md:text-[1.125rem] leading-[1.625rem]">
          <span className="text-richblue-100 "> {description1} </span>
          <span
            className="font-edu-sa 
                    font-bold italic text-blue-100 
                     "
          >
            {" "}
            {description2}{" "}
          </span>
        </p>

        {formType === "signup" ? <SignupForm /> : <LoginForm />}
      </div>

      <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
        <img
          src={frameImg}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute top-2 md:-top-4 md:right-4 z-10 "
        />
      </div>
    </div>
  );
};

export default Template;
