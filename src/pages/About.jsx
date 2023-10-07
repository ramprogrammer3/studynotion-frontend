import React from "react";
import HighlightText from "../components/common/HighlightText";
import banner1 from "../assets/Images/aboutus1.webp";
import banner2 from "../assets/Images/aboutus2.webp";
import banner3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import StoryContent from "../components/core/AboutPage/StoryContent";
import foundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/AboutPage/StatsComponent";

const About = () => {
  return (
    <div>
      {/* section one  */}

      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text="Brighter Future" />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] grid w-[100%] grid-cols-3 gap-3 lg:gap-5 translate-y-[30%]">
            <img src={banner1} alt="" />
            <img src={banner2} alt="" />
            <img src={banner3} alt="" />
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section className="border-b border-b-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px]"></div>
          <Quote />
        </div>
      </section>

      {/* section 3  */}

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          {/* first div  */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h2 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story{" "}
              </h2>
              <StoryContent
                text={
                  "Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world."
                }
              />
              <StoryContent
                text={
                  "As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential."
                }
              />
            </div>
            <div>
              <img
                src={foundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>

          {/* second div  */}
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h2 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                Our Vision{" "}
              </h2>
              <StoryContent
                text={
                  "With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience."
                }
              />
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h2 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h2>
              <StoryContent
                text={
                  "Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities."
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 4  */}

      <StatsComponent />




    </div>
  );
};

export default About;
