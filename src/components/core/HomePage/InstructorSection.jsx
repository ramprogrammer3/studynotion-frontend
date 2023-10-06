import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import { Link } from "react-router-dom";
import YellowButton from "./YellowButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-[50%]">
          <img
            src={Instructor}
            alt=""
            className="shadow-white shadow-[-20px_-20px_0_0]"
          />
        </div>

        <div className="lg:w-[50%] flex gap-10 flex-col">
          <h2 className="lg:w-[50%] text-4xl font-semibold ">
            Become an{" "}
            <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
              {" "}
              instructors
            </span>
          </h2>
          <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit">
            <Link to={"/signup"}>
              <YellowButton text={"Start Teaching Today"}>
                <FaArrowRight />
              </YellowButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
