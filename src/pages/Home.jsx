import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import YellowButton from "../components/core/HomePage/YellowButton";
import BlackButton from "../components/core/HomePage/BlackButton";
import banner from "../assets/Images/banner.mp4";
import CodeBlock from "../components/core/HomePage/CodeBlock";
import CodeBlock2 from "../components/core/HomePage/CodeBlock2";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";

const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold">
          Empower Your Future with{" "}
          <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
            Coding Skills
          </span>
        </div>
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="mt-8 flex flex-row gap-7">
          <Link to={"/signup"}>
            <YellowButton text="Learn More" />
          </Link>
          <Link to={"/login"}>
            <BlackButton text="Book a Demo" />
          </Link>
        </div>

        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video className="shadow-[20px_20px_rgba(255,255,255)]" loop autoPlay>
            <source src={banner} type="video/mp4" />
          </video>
        </div>

        <div>
          <CodeBlock />
        </div>

        <div>
          <CodeBlock2 />
        </div>

        {/* section 2 */}
      </div>

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <Link to={"/signup"}>
                <YellowButton text={"Explore Fill Catelog"}>
                  <FaArrowRight />
                </YellowButton>
              </Link>
              <Link to={"/login"}>
                <BlackButton text={"Learn More"} />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mx-auto flex w-11/12 max-w-maxContent 
        flex-col items-center justify-between gap-8 "
        >
          <div
            className="mb-10 mt-[-100px] flex flex-col 
          justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0"
          >
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                {" "}
                job that is in demand.
              </span>
            </div>

            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <Link to={"/signup"}>
                <YellowButton text={"Learn More"} />
              </Link>
            </div>

            <div></div>
          </div>

          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
