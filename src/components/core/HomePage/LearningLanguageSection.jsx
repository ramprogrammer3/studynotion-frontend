import React from "react";
import YellowButton from "./YellowButton";
import { Link } from "react-router-dom";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lession from "../../../assets/Images/Plan_your_lessons.png";

const LearningLanguageSection = () => {
  return (
    <div>
      <div className="text-4xl font-semibold text-center my-10">
        Your swiss knife for{" "}
        <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
          {" "}
          learning any language
        </span>
        <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
          <img
            src={know_your_progress}
            alt=""
            className="object-contain  lg:-mr-32 "
          />
          <img
            src={compare_with_others}
            alt=""
            className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
          />
          <img
            src={plan_your_lession}
            alt=""
            className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
          />
        </div>
      </div>
      <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
        <Link to={"/signup"}>
          <YellowButton text={"Learn More"} />
        </Link>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
