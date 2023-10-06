import React from "react";
import { Link } from "react-router-dom";
import YellowButton from "./YellowButton";
import { FaArrowRight } from "react-icons/fa";
import BlackButton from "./BlackButton";
import { TypeAnimation } from "react-type-animation";

const CodeBlock = ({ codeblock }) => {
  return (
    <div className="flex lg:flex-row my-20 justify-between flex-col lg:gap-10 gap-10">
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        <div className="text-4xl font-semibold">
          Unlock your{" "}
          <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
            coding potential{" "}
          </span>
          with our online courses.
        </div>
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          Our courses are designed and taught by industry experts who have years
          of experience in coding and are passionate about sharing their
          knowledge with you.
        </div>

        <div className="flex gap-7 mt-7">
          <Link to={"/signup"}>
            <YellowButton text={"Try it Yourself"}>
              <FaArrowRight />
            </YellowButton>
          </Link>
          <Link to={"/signup"}>
            <BlackButton text={"Learn More"} />
          </Link>
        </div>
      </div>
      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        <div className="codeblock1 absolute"></div>
        <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div className="w-[90%] flex flex-col gap-2 font-bold font-mono text-yellow-25 pr-1">
          <TypeAnimation
            sequence={[
              "Hi \n My Name is Ram Kumar \n I am a full Stack Developer \n I hav Good knowledge of HTML, CSS , JavaScript \n  Having a Good understanding of React.js\n And Tailwind CSS , EXpress.js, Node.js, MongoDB, and mongoose \n Currently I am enhancing DSA Skill With C++ \n I am looking for a Full Stack Web Development role in NCR Area , specially in Noida and greater Noida\n contact me : +91 7808720908, Thanks to all.",
              2000,
              "",
            ]}
            repeat={Infinity}
            cursor={true}
            style={{ whiteSpace: "pre-line", display: "block" }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
